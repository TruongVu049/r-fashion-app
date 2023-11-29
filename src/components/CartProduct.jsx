import React from "react";
import { BiSolidStar, BiSolidStarHalf, BiStar } from "react-icons/bi";
import { Link } from "react-router-dom";
import { ImageComponent } from "../components";
import FormatPrice from "../Helpers/FormatPrice";

const CartProduct = ({
  product_id,
  product_name,
  brand,
  price,
  Img,
  avgStar,
}) => {
  return (
    <div
      className="rounded-lg cursor-pointer duration-200 transition-shadow ease-in-out
                hover:translate-y-[-0.125rem] hover:z-[1] hover:shadow-[0_0.0625rem_20px_0_rgba(0,0,0,.05)]
              bg-while10Color overflow-hidden relative"
    >
      <div className="">
        <ImageComponent src={Img} height={"h-40"} cusClass={""} />
      </div>
      <div className="p-[10px_10px_20px_10px] text-center">
        <h4 className="text-secondColor leading-4 opacity-80 font-semibold text-[13px]">
          {brand}
        </h4>
        <h5 className="line-clamp-2 text-[13px] leading-4 p-[10px_4px_0_4px] text-secondColor font-semibolds">
          {product_name}
        </h5>
        <div className="flex justify-center pt-[10px]">
          {[...Array(5)].map((item, index) => {
            if (avgStar >= index + 1) {
              return (
                <BiSolidStar
                  key={index}
                  className="block h-4 w-4 align-middle text-yellow-500"
                />
              );
              // index = 3, avgstar = 2.4
              // > 0 <= 0.5
              // > 0.5
            } else if (
              avgStar < index + 1 &&
              Math.ceil(avgStar) === index + 1
            ) {
              return (
                <BiSolidStarHalf className="block h-4 w-4 align-middle text-yellow-500" />
              );
            } else {
              return (
                <BiStar className="block h-4 w-4 align-middle text-yellow-500" />
              );
            }
          })}
        </div>
        <span className="pt-[10px] text-primaryColor text-[18px] font-semibold">
          <strong className="font-semibold">{FormatPrice(price)}</strong>
        </span>
      </div>
      <Link
        preventScrollReset={true}
        className="absolute top-0 left-0 bottom-0 right-0"
        to={`/product/${product_id}`}
      ></Link>
    </div>
  );
};

export default CartProduct;
