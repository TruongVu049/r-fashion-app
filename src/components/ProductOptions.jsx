import React, { useState } from "react";
import OptionName from "./OptionName";
import Counter from "./Counter";
import { useMemo } from "react";
const ProductOptions = ({ listColor, listSize, options }) => {
  const [option, setOption] = useState({
    color: null,
    size: null,
  });
  const totalQuantity = useMemo(() => {
    const { color, size } = option;
    if (!color || !size) {
      return options.reduce((prev, cur) => {
        return prev + cur.quantity;
      }, 0);
    }
    if (color && size) {
      return options
        .filter(function (option) {
          return option.color == color && option.size === size;
        })
        .reduce(function (a, b) {
          return a + parseInt(b.quantity);
        }, 0);
    }
  }, [option]);

  function handleChangeInput(type, data) {
    setOption({
      ...option,
      [type]: data,
    });
  }

  console.log("option", option);

  return (
    <>
      <OptionName
        listData={listColor}
        title={"Color"}
        type={"color"}
        onchangeInput={handleChangeInput}
      />
      <OptionName
        listData={listSize}
        title={"Size"}
        type={"size"}
        onchangeInput={handleChangeInput}
      />
      <h2 className="mt-8 text-base text-gray-900 ">Số lượng</h2>
      <div className="mt-3 select-none flex items-center gap-4">
        <Counter key={Math.random()} limit={totalQuantity} />
        <span>{`${totalQuantity} sản phẩm có sẵn`}</span>
      </div>
    </>
  );
};

export default ProductOptions;
