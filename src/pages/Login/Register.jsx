import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import axios from "axios";
import { emailRegex, passwordRegex } from "../../constants";

const Register = () => {
  const [email, setEmail] = useState("");
  const [errEmail, setErrEmail] = useState(null);
  const [userName, setUserName] = useState("");
  const [errUserName, setErrUserName] = useState(null);
  const [password, setPassword] = useState("");
  const [errPassword, setErrPassword] = useState(null);
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [errPasswordConfirm, setErrPasswordConfirm] = useState(null);
  const [status, setStatus] = useState("typing");

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
    password != passwordConfirm && setErrPasswordConfirm("wrong");
    if (errEmail || errPassword) {
      console.log("set typing");
      setStatus("typing");
    } else {
      setStatus("submitting");
      axios
        .post(
          `${process.env.REACT_APP_API_KEY}/api/auth/register`,
          {
            email: email,
            name: userName,
            password: password,
          },
          {
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((res) => {
          if (res.status === 201) window.location.href = "/login";
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  console.log("render register");
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
              {"Đăng ký"}
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
            <div key={2}>
              <div>
                <div className="flex items-center justify-between duration-300 ease-linear">
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Họ Tên
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    autoComplete="username"
                    required
                    onChange={(e) => setUserName(e.target.value)}
                    className="block w-full rounded-md border-0 py-2 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-titleSMColor placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="mt-5">
                <div className="flex items-center justify-between duration-300 ease-linear">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full rounded-md border-0 py-2 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-titleSMColor placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="mt-5">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password-confirm"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Confirm Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password-confirm"
                    name="password-confirm"
                    type="password"
                    autoComplete="current-password"
                    required
                    onChange={(e) => setPasswordConfirm(e.target.value)}
                    className="block w-full rounded-md border-0 py-2 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-titleSMColor placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
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
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              >
                Đăng nhập
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
