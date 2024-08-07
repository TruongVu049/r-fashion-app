import React from "react";
import CardSkeleton from "./CardSkeleton";
import none_product from "../assets/images/non-product.png";

import CartProduct from "./CartProduct";
const Product = ({ productList, status, limit }) => {
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
      {status === "loading" ? (
        <div className="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 relative">
          {new Array(limit).fill(1, 1).map((item, index) => (
            <CardSkeleton key={index} />
          ))}
        </div>
      ) : (
        productList.length != 0 && (
          <div className="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 relative">
            {productList.map((item, index) => {
              return (
                <CartProduct
                  key={item.id}
                  product_id={item.id}
                  product_name={item.name}
                  brand={item.brand}
                  price={item.price}
                  Img={item.image}
                  avgStar={item.avgStar}
                  height={
                    "xl:h-[224px] lg:h-[213px] md:h-[156px] sm:h-[240px] h-[184px]"
                  }
                />
              );
            })}
          </div>
        )
      )}
    </div>
  );
};

export default Product;
