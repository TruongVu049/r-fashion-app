import React from "react";

const OptionName = ({ listData, title, type, onchangeInput }) => {
  return (
    <>
      <h2 className="mt-8 text-base text-gray-900">{title}</h2>
      <div className="mt-3 flex select-none flex-wrap items-center gap-1">
        {listData.map((item, index) => {
          return (
            <label key={item + index} className="cursor-pointer">
              <input
                type="radio"
                name={type}
                defaultValue={item}
                className="peer sr-only"
                onChange={() => {
                  onchangeInput(type, item);
                }}
              />
              <p className="capitalize peer-checked:bg-secondColor peer-checked:text-while10Color rounded-lg border border-black px-6 py-2 font-bold">
                {item}
              </p>
            </label>
          );
        })}
      </div>
    </>
  );
};

export default OptionName;
