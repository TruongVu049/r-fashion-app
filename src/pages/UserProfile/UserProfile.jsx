import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Loading } from "../../components";
import { AiOutlineCheckCircle } from "react-icons/ai";
import axios from "axios";
import { Helmet } from "react-helmet";
const UserProfile = () => {
  const { user } = useContext(AuthContext);
  const [info, setInfo] = useState({});
  const [status, setStatus] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let ignore = false;
    if (user.toKen && user.id) {
      setIsLoading(true);
      axios
        .get(`${process.env.REACT_APP_API_KEY}api/account/info/${user.id}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + user.toKen,
          },
        })
        .then((res) => {
          if (res.status === 200) {
            setInfo(res.data);
          }
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
    return () => (ignore = true);
  }, []);

  function handleChangeInfo() {
    setIsLoading(true);
    axios
      .post(`${process.env.REACT_APP_API_KEY}api/account/updateinfo`, info, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + user.toKen,
        },
      })
      .then(async (res) => {
        if (res.status == 200) {
          setStatus(true);
          await setTimeout(() => {
            setStatus(false);
          }, 1000);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Hồ sơ của tôi</title>
        <meta name="description" content="FAF - Thời trang nam nữ" />
      </Helmet>
      {isLoading && <Loading />}
      <div className="container mx-auto px-4 mt-40 mb-16">
        <div className="bg-white overflow-hidden shadow rounded-lg border">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Thông tin người dùng
            </h3>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
            <dl className="sm:divide-y sm:divide-gray-200">
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 items-center">
                <dt className="text-sm font-medium text-gray-500">Họ tên</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <div className="">
                    <label
                      htmlFor="fullName"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    ></label>
                    <div className="mt-2">
                      <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 ">
                        <input
                          type="text"
                          name="fullName"
                          id="fullName"
                          autoComplete="fullName"
                          value={info?.fullName}
                          onChange={(e) => {
                            setInfo({
                              ...info,
                              fullName: e.target.value,
                            });
                          }}
                          className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>
                </dd>
              </div>
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 items-center">
                <dt className="text-sm font-medium text-gray-500">Email</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <div className="">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    ></label>
                    <div className="mt-2">
                      <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 ">
                        <input
                          type="text"
                          name="email"
                          id="email"
                          disabled={true}
                          autoComplete="email"
                          value={info?.email}
                          className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>
                </dd>
              </div>
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 items-center">
                <dt className="text-sm font-medium text-gray-500">
                  Số điện thoại
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <div className="">
                    <label
                      htmlFor="phoneNumber"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    ></label>
                    <div className="mt-2">
                      <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 ">
                        <input
                          type="number"
                          name="phoneNumber"
                          id="phoneNumber"
                          autoComplete="phoneNumber"
                          value={info?.phoneNumber}
                          onChange={(e) => {
                            setInfo({
                              ...info,
                              phoneNumber: parseInt(e.target.value),
                            });
                          }}
                          className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>
                </dd>
              </div>
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 items-center">
                <dt className="text-sm font-medium text-gray-500">Địa chỉ</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <div className="">
                    <label
                      htmlFor="address"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    ></label>
                    <div className="mt-2">
                      <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 ">
                        <textarea
                          id="address"
                          cols="20"
                          rows="6"
                          type="text"
                          name="address"
                          value={info.address || ""}
                          onChange={(e) => {
                            setInfo({
                              ...info,
                              address: e.target.value,
                            });
                          }}
                          className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <button
          onClick={handleChangeInfo}
          type="button"
          className="mt-4 w-full bg-green-500 font-semibold text-base py-3 rounded-lg duration-200 hover:bg-green-400 text-white px-5"
        >
          Lưu
        </button>
      </div>
      {status ? (
        <div
          className={`
    fixed top-0 left-0 bottom-0 right-0 z-[999]  w-full   p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full`}
        >
          <div className="rounded-lg relative p-3 z-[999] w-full max-w-md max-h-full bg-[rgba(0,0,0,0.6)] top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]">
            <div className="relative  p-4 rounded-lg">
              <div className="flex flex-col gap-3 items-center justify-center text-lg p-4">
                <span className="md:text-8xl sm:text-7xl text-5xl text-white">
                  <AiOutlineCheckCircle className="bg-green-600 rounded-[50%]" />
                </span>
                <h2 className="text-white sm:text-lg text-base">
                  Đã lưu lại thay đổi
                </h2>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default UserProfile;
