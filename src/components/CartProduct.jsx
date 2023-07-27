import React from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";

const CartProduct = ({ product_id, product_name, brand, price, Img }) => {
  return (
    <div
      className="rounded-lg cursor-pointer duration-200 transition-shadow ease-in-out
                hover:translate-y-[-0.125rem] hover:z-[1] hover:shadow-[0_0.0625rem_20px_0_rgba(0,0,0,.05)]
              bg-while10Color overflow-hidden relative"
    >
      <div className="">
        <img src={Img} alt="product" />
      </div>
      <div className="p-[10px_10px_20px_10px] text-center">
        <h4 className="text-secondColor leading-4 opacity-80 font-semibold text-[13px]">
          {brand}
        </h4>
        <h5 className="line-clamp-2 text-[13px] leading-4 p-[10px_4px_0_4px] text-secondColor font-semibolds">
          {product_name}
        </h5>
        <div className="flex justify-center pt-[10px]">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
        </div>
        <span className="pt-[10px] text-primaryColor text-[18px] font-semibold">
          <strong className="font-semibold">
            {(function format(x) {
              var parts = x.toString().split(".");
              parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
              return parts.join(",");
            })(price)}
          </strong>{" "}
          VNĐ
        </span>
        <div className="pt-[10px]">
          <button
            data-id={product_id}
            className="mx-auto relative z-20 p-[13px_26px] cursor-pointer border-[#212121] border-solid border-[1.5px] rounded-md duration-300 text-center leading-3 uppercase text-[13px] font-semibold text-[#212121] hover:bg-primaryColor hover:text-while10Color"
          >
            Thêm vào giỏ hàng
          </button>
        </div>
        <a href="#" />
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
