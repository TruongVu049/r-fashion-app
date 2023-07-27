import React from "react";
import CartSkeleton from "./CartSkeleton";
import none_product from "../assets/images/non-product.png";

import CartProduct from "./CartProduct";
const Product = ({ productList, status }) => {
  console.log("render product");
  return (
    <div>
      {productList.length === 0 && status === "success" && (
        <div className="h-full">
          <div className="2xl:mt-0 lg:mt-[20px] md:mt-[120px] ">
            <img className="w-[60%] mx-auto" src={none_product} alt="error" />
          </div>
          <h3 className="uppercase opacity-70 sm:text-[24px] text-[16px] text-center">
            Không tìm thấy sản phẩm
          </h3>
        </div>
      )}
      {status === "loading" && (
        <div className="grid md:grid-cols-3 grid-cols-2 gap-4 relative">
          <CartSkeleton />
          <CartSkeleton />
          <CartSkeleton />
          <CartSkeleton />
          <CartSkeleton />
          <CartSkeleton />
        </div>
      )}
      {productList.length != 0 && (
        <div className="grid md:grid-cols-3 grid-cols-2 gap-4 relative">
          {productList.map((item, index) => {
            return (
              <CartProduct
                key={item.product_id}
                product_id={item.product_id}
                product_name={item.product_name}
                brand={item.brand}
                price={item.price}
                Img={item["images"].split("@")[0]}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Product;
