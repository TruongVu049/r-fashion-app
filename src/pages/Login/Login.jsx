import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import axios from "axios";

const EMAIL_REGEX = /^[\w.+\-]+@gmail\.com$/;

const Login = () => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState({
    errEmail: "",
    errPwd: "",
    errAuth: "",
  });

  const { user, login } = useAuth();
  const navigate = new useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let ignore = false;
    const v1 = EMAIL_REGEX.test(email);
    if (!v1) {
      ignore = true;
      setErrMsg({
        ...errMsg,
        errEmail: "Email không hợp lệ",
      });
    }
    if (!ignore) {
      const dataLogin = {
        email: email,
        password: pwd,
      };
      axios
        .post(`https://localhost:44351/api/account/login`, dataLogin, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then(async (res) => {
          console.log(res.data);
          await login({
            id: res.data.id,
            email: res.data.email,
            fullName: res.data.fullName,
            role: res.data.role,
            toKen: res.data.token,
          });
          window.location.href = "/";
        })
        .catch((error) => {
          if (error.response?.status == 404) {
            setErrMsg({
              ...errMsg,
              errAuth: "Thông tin email và mật khẩu không chính xác",
            });
          } else {
            setErrMsg({
              ...errMsg,
              errAuth: "Đã xảy ra lỗi vui lòng thực hiện đăng nhập lại! ",
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
                {"Đăng nhập"}
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
                        errAuth: "",
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
              <div className="mt-5">
                <div className="flex items-center justify-between duration-300 ease-linear">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Mật khẩu
                  </label>
                  <div>
                    <Link
                      href="#"
                      className="font-semibold text-rose-400 hover:text-red-300"
                    >
                      Quên mật khẩu?
                    </Link>
                  </div>
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
                        errAuth: "",
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
              {errMsg.errAuth && (
                <span className="text-xs text-primaryColor mt-0">
                  {errMsg.errAuth}
                </span>
              )}
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-secondColor px-3 py-2 px-1 text-sm font-semibold leading-6 text-while10Color shadow-sm hover:bg-primaryColor focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  {"Đăng nhập"}
                </button>
              </div>
            </form>

            <div>
              <p className="mt-10 text-center text-sm text-gray-500">
                Bạn đã có tài khoản
                <Link
                  to="/register"
                  className="font-semibold leading-6 text-rose-500 hover:text-red-400"
                >
                  Đăng ký
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
