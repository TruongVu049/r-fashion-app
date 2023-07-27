import { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
export default function Filter({ searchParams, onFilterChange }) {
  const [range, setRange] = useState({
    min: 0,
    max: 3000000,
  });
  console.log("render filter");
  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    onFilterChange(formJson);
    searchParams.set("page", 0);
  }

  // class ${isShow ? "fixed top-0 left-0 right-0 " : "hidden"}
  // class  ${isShow ? "translate-x-[0]" : "translate-x-[-100%]"}

  return (
    <div
      className={`
      md:rounded-lg md:bg-while10Color md:shadow-[0_0.0625rem_20px_0_rgba(0,0,0,.05)] md:p-5 md:flex-[1_1_30%] md:block md:relative
         bottom-0 md:z-[10] z-[999]
      
      `}
    >
      <div className="md:relative md:hidden block absolute w-full h-[100vh] inset-[0] opacity-60 bg-[#212121]"></div>
      <div
        className={`
        md:relative md:w-full ms:w-[50%] w-[80%]  bg-while10Color md:p-0 p-5 h-full
        md:translate-x-[0]
        md:shadow-none shadow-[-1px_0px_20px_-5px_#aaa] ease-linear delay-0 duration-[300ms]
       
        `}
      >
        <div className="md:hidden block pb-[40px]">
          <FaXmark className="float-right m-2 cursor-pointer text-[20px] hover:text-primaryColor hover:duration-400" />
        </div>
        <form method="post" onSubmit={handleSubmit}>
          <div>
            <h3 className="text-secondColor py-[10px] opacity-80 text-left text-xl font-semibold">
              Theo Danh Mục
            </h3>
            <div className="">
              <label
                htmlFor="CAT_SHIRT"
                className="flex font-semibold flex-row-reverse items-center justify-end duration-200 hover:text-primaryColor cursor-pointer xl:w-[50%] lg:w-[60%] text-[18px]"
              >
                Áo
                <input
                  className="accent-primaryColor h-5 w-5 mr-3 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  type="checkbox"
                  id="CAT_SHIRT"
                  name="CAT_SHIRT"
                />
              </label>
            </div>
            <div className="">
              <label
                htmlFor="CAT_PANTS"
                className="flex font-semibold flex-row-reverse items-center justify-end duration-200 hover:text-primaryColor cursor-pointer xl:w-[50%] lg:w-[60%] text-[18px]"
              >
                Quần
                <input
                  className="accent-primaryColor h-5 w-5 mr-3 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  type="checkbox"
                  id="CAT_PANTS"
                  name="CAT_PANTS"
                />
              </label>
            </div>
            <div className="">
              <label
                htmlFor="CAT_HAT"
                className="flex font-semibold flex-row-reverse items-center justify-end duration-200 hover:text-primaryColor cursor-pointer xl:w-[50%] lg:w-[60%] text-[18px]"
              >
                Nón
                <input
                  className="accent-primaryColor h-5 w-5 mr-3 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  type="checkbox"
                  id="CAT_HAT"
                  name="CAT_HAT"
                />
              </label>
            </div>
            <div className="">
              <label
                htmlFor="CAT_SHOE"
                className="flex font-semibold flex-row-reverse items-center justify-end duration-200 hover:text-primaryColor cursor-pointer xl:w-[50%] lg:w-[60%] text-[18px]"
              >
                Giầy
                <input
                  className="accent-primaryColor h-5 w-5 mr-3 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  type="checkbox"
                  id="CAT_SHOE"
                  name="CAT_SHOE"
                />
              </label>
            </div>
          </div>
          <div>
            <h3 className="text-secondColor py-[10px] opacity-80 text-left text-xl font-semibold">
              Theo Giới Tính
            </h3>
            <div className="">
              <label
                htmlFor="male"
                className="flex font-semibold flex-row-reverse items-center justify-end duration-200 hover:text-primaryColor cursor-pointer xl:w-[50%] lg:w-[60%] text-[18px]"
              >
                Nam
                <input
                  className="accent-primaryColor h-5 w-5 mr-3 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  type="checkbox"
                  id="male"
                  name="male"
                />
              </label>
            </div>
            <div className="">
              <label
                htmlFor="female"
                className="flex font-semibold flex-row-reverse items-center justify-end duration-200 hover:text-primaryColor cursor-pointer xl:w-[50%] lg:w-[60%] text-[18px]"
              >
                Nữ
                <input
                  className="accent-primaryColor h-5 w-5 mr-3 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  type="checkbox"
                  id="female"
                  name="female"
                />
              </label>
            </div>
            <div className="">
              <label
                htmlFor="unisex"
                className="flex font-semibold flex-row-reverse items-center justify-end duration-200 hover:text-primaryColor cursor-pointer xl:w-[50%] lg:w-[60%] text-[18px]"
              >
                Unisex
                <input
                  className="accent-primaryColor h-5 w-5 mr-3 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  type="checkbox"
                  id="unisex"
                  name="unisex"
                />
              </label>
            </div>
          </div>
          <div>
            <h3 className="text-secondColor py-[10px] opacity-80 text-left text-xl font-semibold">
              Theo Giá
            </h3>
            <div className="flex items-center mb-[10px] relative m-[10px_0_20px] bg-secondColor rounded-lg">
              <label htmlFor="rangeMin"></label>
              <input
                type="range"
                className="cursor-pointer absolute w-full h-[5px] top-0 pointer-events-none appearance-none bg-secondColor"
                name="rangeMin"
                min={0}
                max={3000000}
                defaultValue={0}
                step={100}
                onChange={(e) => {
                  setRange({
                    ...range,
                    min: e.target.value,
                  });
                }}
              />
              <label htmlFor="rangeMax"></label>
              <input
                type="range"
                className="cursor-pointer absolute w-full h-[5px] top-0 pointer-events-none appearance-none bg-secondColor"
                name="rangeMax"
                min={0}
                max={3000000}
                defaultValue={3000000}
                step={100}
                onChange={(e) => {
                  setRange({
                    ...range,
                    max: e.target.value,
                  });
                }}
              />
            </div>
            <div className="flex justify-between mt-[20px] font-semibold">
              <span>{range.min}</span>
              <span>{range.max}</span>
            </div>
          </div>

          <div className="flex gap-4 mt-[20px] flex-wrap">
            <button
              className="py-3 opacity-60 rounded-md bg-primaryColor text-while10Color duration-200 font-semibold hover:bg-secondColor lg:flex-1 flex-[1_1_100%]"
              type="reset"
              onClick={() => {
                setRange({
                  min: 0,
                  max: 3000000,
                });
              }}
            >
              Reset form
            </button>
            <button
              className="py-3 rounded-md bg-primaryColor text-while10Color duration-200 font-semibold hover:bg-secondColor lg:flex-1 flex-[1_1_100%]"
              type="submit"
            >
              Filter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
