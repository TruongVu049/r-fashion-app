import { useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { PopupModal } from "../../components";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AiOutlineCheckCircle } from "react-icons/ai";
import axios from "axios";

const EMAIL_REGEX = /^[\w.+\-]+@gmail\.com$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
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
  const [success, setSuccess] = useState(false);
  const navigate = new useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let ignore = false;
    const v1 = EMAIL_REGEX.test(email);
    const v2 = PWD_REGEX.test(pwd);
    if (!v1) {
      ignore = true;
      setErrMsg({
        ...errMsg,
        errEmail: "Email không hợp lệ",
      });
    }
    if (fullName.length == "") {
      ignore = true;
      setErrMsg({
        ...errMsg,
        errFullName: "Vui lòng điền vào tên của bạn!",
      });
    }
    if (!v2) {
      ignore = true;
      setErrMsg({
        ...errMsg,
        errPwd: "Mật khẩu không hợp lệ",
      });
    }
    if (pwd !== matchPwd) {
      ignore = true;
      setErrMsg({
        ...errMsg,
        errMatchPwd: "Mật khẩu xác nhận không khớp",
      });
    }
    if (!ignore) {
      console.log({
        email: email,
        fullName: fullName,
        password: pwd,
      });
      axios
        .post(
          `http://localhost:60462/api/account/register?email=${email}&fullName=${fullName}&password=${encodeURIComponent(
            pwd
          )}`
        )
        .then((res) => {
          setSuccess(true);
        })
        .then(() => {
          // return navigator("/");
          setTimeout(() => {
            navigate("/login");
          }, 1500);
        })
        .catch((error) => {
          console.log(error.response.status);
          if (error.response.status) {
            setErrMsg({
              ...errMsg,
              errEmail: "Emali đã tồn tại",
            });
          }
        });
    }
  };

  return (
    <>
      <div>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="mt-24 sm:mx-auto sm:w-full sm:max-w-sm shadow-2xl p-5 rounded-2xl duration-300 ease-linear">
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
              action="#"
              method="POST"
            >
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
                    autoComplete="email"
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
                  <span className="text-xs text-primaryColor">
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
                      autoComplete="username"
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
                    <span className="text-xs text-primaryColor">
                      {errMsg.errFullName}
                    </span>
                  )}
                </div>
                <div className="mt-5">
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
                      autoComplete="current-password"
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
                    <span className="text-xs text-primaryColor">
                      {errMsg.errPwd}
                    </span>
                  )}
                </div>
                <div className="mt-5">
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
                      autoComplete="current-password"
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
                    <span className="text-xs text-primaryColor">
                      {errMsg.errMatchPwd}
                    </span>
                  )}
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-secondColor px-3 py-2 px-1 text-sm font-semibold leading-6 text-while10Color shadow-sm hover:bg-primaryColor focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
      {success ? (
        <PopupModal>
          <div className="relative bg-while10Color p-4 rounded-lg">
            {/* header */}
            <h2 className="p-2 text-base font-semibold border-b-2 mx-[-16px]">
              Thông báo
            </h2>
            {/* body */}
            <div className="flex gap-3 items-center justify-center text-lg p-4">
              <span className="text-4xl text-green-500">
                <AiOutlineCheckCircle />
              </span>
              <h2>Đăng ký tài khoản thành công</h2>
            </div>
            {/* footer */}
            <h2 className="p-2 pt-4 text-sm text-center  border-t-2 mx-[-16px] mb-[-20px]">
              Quay trở lại đăng nhập sau 1s
            </h2>
          </div>
        </PopupModal>
      ) : null}
    </>
  );
};

export default Register;
