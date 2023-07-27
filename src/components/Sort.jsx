import { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";

const Sort = ({ onSortChange }) => {
  console.log("render sort");
  return (
    <div className="flex justify-between items-center flex-wrap">
      <FaBars className="md:invisible text-2xl duration-150 hover:text-primaryColor cursor-pointer" />
      <div>
        <label className="text-[18px]">
          Sắp Xếp: {"   "}
          <select
            name="selectedFruit"
            className="border rounded border-secondColor border-solid p-1"
            onChange={(e) => {
              onSortChange(e.target.value);
            }}
          >
            <option value="">Mặc định</option>
            <option value="ASC">Tăng dần theo giá</option>
            <option value="DESC">Giảm dần theo giá</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default Sort;
