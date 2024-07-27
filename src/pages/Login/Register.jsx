import { useState } from "react";
import { PopupModal, Loading, Modal } from "../../components";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { FaRegCircleXmark } from "react-icons/fa6";
import axios from "axios";
const EMAIL_REGEX =
  /^(([^<>()\[\]\.,;:\s@\"  ]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const PASS_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,55}$/;
const NAME_REGEX = /[!@#\$%\^\&*\)\(+=._-]/;

const Register = () => {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [pwd, setPwd] = useState("");
  const [matchPwd, setMatchPwd] = useState();
  const [errMsg, setErrMsg] = useState({
    errEmail: "",
    errFullName: "",
    errPwd: "",
    errMatchPwd: "",
  });
  const [stateForm, setStateForm] = useState(0); // 0: pending, 1: success, 2: error
  const [isLoading, setIsLoading] = useState(false);

  const navigate = new useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let isValid = true;
    const v1 = EMAIL_REGEX.test(email);
    if (!v1) {
      isValid = false;
      setErrMsg((errMsg) => {
        return {
          ...errMsg,
          errEmail: "Email không hợp lệ",
        };
      });
    }
    if (NAME_REGEX.test(fullName)) {
      isValid = false;
      setErrMsg((errMsg) => {
        return {
          ...errMsg,
          errFullName: "Họ tên không được phép chứa ký tự đặc biệt!",
        };
      });
    }
    const v2 = PASS_REGEX.test(pwd);
    if (!v2) {
      isValid = false;
      setErrMsg((errMsg) => {
        return {
          ...errMsg,
          errPwd:
            "Mật khẩu phải tối thiểu tám ký tự, ít nhất một chữ cái viết hoa, một chữ cái viết thường, một số và một ký tự đặc biệt!",
        };
      });
    } else {
      if (pwd !== matchPwd) {
        isValid = false;
        setErrMsg((errMsg) => {
          return {
            ...errMsg,
            errMatchPwd: "Mật khẩu xác nhận không khớp!",
          };
        });
      }
    }
    if (isValid) {
      setIsLoading(true);
      axios
        .post(
          `${
            process.env.REACT_APP_API_KEY
          }api/account/register?email=${email}&fullName=${fullName}&password=${encodeURIComponent(
            pwd
          )}`
        )
        .then((res) => {
          setStateForm(1);
        })
        // .then(() => {
        //   setTimeout(() => {
        //     navigate("/login");
        //   }, 1500);
        // })
        .catch((error) => {
          if (error.response.status) {
            setErrMsg({
              ...errMsg,
              errEmail: "Emali đã được sử dụng. Vui lòng sử dụng email khác!",
            });
          }
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  return (
    <>
      <div>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="mt-24 sm:mx-auto sm:w-full sm:max-w-sm shadow-2xl p-5 rounded-2xl duration-300 ease-linear">
            <form onSubmit={handleSubmit} className="space-y-6" method="POST">
              <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                {"Đăng ký"}
              </h2>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setErrMsg({
                        ...errMsg,
                        errEmail: "",
                      });
                    }}
                    className={`block w-full rounded-md  py-2 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-titleSMColor placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-300 sm:text-sm sm:leading-6
                  `}
                  />
                </div>
                {errMsg.errEmail && (
                  <span className="md:mt-2 mt-1 text-xs text-primaryColor">
                    {errMsg.errEmail}
                  </span>
                )}
              </div>
              <div>
                <div>
                  <div className="flex items-center justify-between duration-300 ease-linear">
                    <label
                      htmlFor="username"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Họ Tên
                    </label>
                  </div>
                  <div className="mt-1">
                    <input
                      id="username"
                      name="username"
                      type="text"
                      required
                      onChange={(e) => {
                        setFullName(e.target.value);
                        setErrMsg({
                          ...errMsg,
                          errFullName: "",
                        });
                      }}
                      className="block w-full rounded-md border-0 py-2 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-titleSMColor placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-300 sm:text-sm sm:leading-6"
                    />
                  </div>
                  {errMsg.errFullName && (
                    <span className="md:mt-2 mt-1 text-xs text-primaryColor">
                      {errMsg.errFullName}
                    </span>
                  )}
                </div>
                <div className="mt-4">
                  <div className="flex items-center justify-between duration-300 ease-linear">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Mật khẩu
                    </label>
                  </div>
                  <div className="mt-1">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      required
                      onChange={(e) => {
                        setPwd(e.target.value);
                        setErrMsg({
                          ...errMsg,
                          errPwd: "",
                        });
                      }}
                      className="block w-full rounded-md border-0 py-2 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-titleSMColor placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-300 sm:text-sm sm:leading-6"
                    />
                  </div>
                  {errMsg.errPwd && (
                    <span className="md:mt-2 mt-1 text-xs text-primaryColor">
                      {errMsg.errPwd}
                    </span>
                  )}
                </div>
                <div className="mt-4">
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password-confirm"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Xác nhận mật khẩu
                    </label>
                  </div>
                  <div className="mt-1">
                    <input
                      id="password-confirm"
                      name="password-confirm"
                      type="password"
                      required
                      onChange={(e) => {
                        setMatchPwd(e.target.value);
                        setErrMsg({
                          ...errMsg,
                          errMatchPwd: "",
                        });
                      }}
                      className="block w-full rounded-md border-0 py-2 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-titleSMColor placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-300 sm:text-sm sm:leading-6"
                    />
                  </div>
                  {errMsg.errMatchPwd && (
                    <span className="md:mt-2 mt-1 text-xs text-primaryColor">
                      {errMsg.errMatchPwd}
                    </span>
                  )}
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-secondColor px-3 py-2 text-sm font-semibold leading-6 text-while10Color shadow-sm hover:bg-primaryColor focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  {"Đăng Ký"}
                </button>
              </div>
            </form>

            <div>
              <p className="mt-10 text-center text-sm text-gray-500">
                Bạn đã có tài khoản
                <Link
                  to="/login"
                  className="font-semibold leading-6 text-rose-500 hover:text-red-400"
                >
                  Đăng nhập
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {stateForm !== 0 ? (
        <Modal
          onClose={() => {
            setStateForm(0);
          }}
          title={"Thông báo"}
        >
          <div className="relative bg-white rounded-lg">
            <div className="flex gap-3 items-center justify-center text-lg">
              {stateForm === 1 ? (
                <span className="text-4xl text-green-500">
                  <AiOutlineCheckCircle />
                </span>
              ) : (
                <span className="text-4xl text-rose-500">
                  <FaRegCircleXmark />
                </span>
              )}
              <h2>
                {stateForm === 1
                  ? "Đăng ký tài khoản thành công"
                  : "Đăng ký tài khoản không thành công. "}
              </h2>
            </div>
            {stateForm === 1 ? (
              <h2 className="mt-2 p-2 pt-4 text-sm text-center  border-t-2 border-gray-200">
                Quay trở lại{" "}
                <Link
                  to={"/login"}
                  className="inline-block text-blue-600 hover:underline hover:text-blue-700"
                >
                  {" "}
                  đăng nhập
                </Link>
              </h2>
            ) : (
              <h2 className="mt-2 p-2 pt-4 text-sm text-center  border-t-2 border-gray-200">
                Vui lòng thực hiện lại!
              </h2>
            )}
          </div>
        </Modal>
      ) : null}

      {isLoading && <Loading />}
    </>
  );
};

export default Register;
