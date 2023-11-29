import { useEffect, useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import axios from "axios";
export default function Filter({
  isShowFilter,
  onchangeShowFilter,
  onChangeSearch,
}) {
  const [category, setCategory] = useState([]);
  const [range, setRange] = useState({
    min: 0,
    max: 3000000,
  });
  function handleSubmit(e) {
    e.preventDefault();
    let filterType = "";
    document
      .querySelectorAll("input[name='filterType']")
      .forEach((item, index) => {
        if (item.checked) {
          filterType += item.value + "__";
        }
      });
    let filterGender = "";
    document
      .querySelectorAll("input[name='filterGender']")
      .forEach((item, index) => {
        if (item.checked) {
          filterGender += item.value + "__";
        }
      });
    onChangeSearch({
      filterGender: filterGender,
      filterType: filterType,
      priceMin: range.min,
      priceMax: range.max,
      page: 1,
    });
  }

  useEffect(() => {
    let ignore = false;
    const url = `${process.env.REACT_APP_API_KEY}api/category`;
    axios
      .get(url)
      .then((res) => {
        if (!ignore) {
          setCategory(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    return () => (ignore = true);
  }, []);

  return (
    <div
      className={`
      md:rounded-lg md:bg-white md:shadow-[0_0.0625rem_20px_0_rgba(0,0,0,.05)] md:p-5 xl:flex-[1_1_25%] md:flex-[1_1_30%] 
      md:block md:relative  fixed inset-0
      bottom-0 md:z-[10] z-[999]
      ${isShowFilter ? "" : "hidden"}
      `}
    >
      <div className="md:relative md:hidden block absolute w-full h-[100vh] inset-[0] opacity-60 bg-[#212121]"></div>
      <div
        className={`
        relative md:w-full sm:w-[50%] inset-0 w-[80%]  bg-white md:p-0 p-5 h-full
        md:translate-x-[0]
        md:shadow-none shadow-[-1px_0px_20px_-5px_#aaa] ease-linear delay-0 duration-[300ms]
       
        `}
      >
        <div className="md:hidden block pb-[40px]">
          <div
            onClick={() => {
              onchangeShowFilter((prev) => !prev);
            }}
          >
            <FaXmark className="float-right m-2 cursor-pointer text-[20px] hover:text-primaryColor hover:duration-400" />
          </div>
        </div>
        <form method="post" onSubmit={handleSubmit}>
          <div>
            <h3 className="text-secondColor py-[10px] opacity-80 text-left text-xl font-semibold">
              Theo Danh Mục
            </h3>
            {category.map((item) => {
              return (
                <div key={item.id}>
                  <label
                    htmlFor={item.id}
                    className="flex font-semibold flex-row-reverse items-center justify-end duration-200 hover:text-primaryColor cursor-pointer xl:w-[50%] lg:w-[60%] text-[18px]"
                  >
                    {item.name}
                    <input
                      className="accent-primaryColor h-5 w-5 mr-3 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      type="checkbox"
                      id={item.id}
                      value={item.id}
                      name="filterType"
                    />
                  </label>
                </div>
              );
            })}
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
                  value="male"
                  name="filterGender"
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
                  value="female"
                  name="filterGender"
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
                  name="filterGender"
                  value="unisex"
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
