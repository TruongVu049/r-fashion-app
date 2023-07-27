import { useState, useContext, useEffect } from "react";
import { Breadcrumb } from "../../components";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

import { emailRegex } from "../../constants";

const Login = () => {
  const [email, setEmail] = useState("");
  const [errEmail, setErrEmail] = useState(null);
  const [password, setPassword] = useState("");
  const [errPassword, setErrPassword] = useState(null);
  const [status, setStatus] = useState("typing");
  const navigator = useNavigate();
  const { login } = useAuth();

  useEffect(() => {
    setErrEmail(null);
  }, [email]);

  useEffect(() => {
    setErrPassword(null);
  }, [password]);

  async function handleSubmit(e) {
    e.preventDefault();

    setStatus("submitting");
    //check email

    !emailRegex.test(email) && setErrEmail("Email không hợp lệ");
    password.length < 7 &&
      setErrPassword(
        "Password phải chứa các kí tự từ a-z, 0-9 và có độ dài lớn hơn 8"
      );
    if (errEmail || errPassword) {
      console.log("set typing");
      setStatus("typing");
    } else {
      setStatus("submitting");
      try {
        const res = await fetch("http://localhost:5000/api/auth/login", {
          method: "POST",
          body: JSON.stringify({
            email: email,
            password: password,
          }),
          headers: { "Content-Type": "application/json" },
        });
        const data = await res.json();
        console.log(data);
        if (res.status === 400 || res.status === 401) {
          setStatus("error");
          // return display.textContent = `${data.message}. ${data.error ? data.error : ''}`
        }
        if (data.Login) {
          login({
            id: data.user.id,
            email: data.user.email,
            userName: data.user.fullName,
            authToken: data.token,
          });
          // return navigator("/");
          window.location.href = "/";
        }
      } catch (err) {
        console.log(err.message);
      }
    }
  }
  return (
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
              Đăng nhập
            </h2>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  className={`block w-full rounded-md  py-2 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-titleSMColor placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6
                  ${errEmail && "border-[1px] border-solid border-primaryColor"}
                  `}
                />
              </div>
              {errEmail && (
                <span className="text-xs text-primaryColor">{errEmail}</span>
              )}
            </div>

            <div key={1}>
              <div className="flex items-center justify-between duration-300 ease-linear">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Quên mật khẩu?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  className={`block w-full rounded-md  py-2 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-titleSMColor placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6
                        ${
                          errPassword &&
                          "border-[1px] border-solid border-primaryColor"
                        }
                        `}
                />
              </div>
              {errPassword && (
                <span className="text-xs text-primaryColor">{errPassword}</span>
              )}
            </div>
            {status === "error" && (
              <span className="text-xs text-primaryColor mt-2">
                Email hoặc password không chính xác. Vui lòng thực hiện lại !
              </span>
            )}
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-secondColor px-3 py-2 px-1 text-sm font-semibold leading-6 text-while10Color shadow-sm hover:bg-primaryColor focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Đăng Nhập
              </button>
            </div>
          </form>

          <div>
            <p className="mt-10 text-center text-sm text-gray-500">
              Chưa có tài khoản?
              <Link
                to="/register"
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              >
                Đăng ký
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
