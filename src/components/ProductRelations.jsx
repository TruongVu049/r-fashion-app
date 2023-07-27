import React from "react";
import useData from "../hooks/useData";
import CartProduct from "./CartProduct";
import { PiWarningOctagonLight } from "react-icons/pi";
import CartSkeleton from "./CartSkeleton";
const ProductRelations = ({ title, type }) => {
  let products = useData(`http://localhost:5050/products/${type}`);
  console.log(products);
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-semibold border-b border-gray-300">
        {title}
      </h2>
      {products && products.length > 0 ? (
        <div
          className=" 
      py-9 gap-4 grid lg:grid-cols-4 sm:grid-cols-4 grid-cols-2"
        >
          {products.map((product) => {
            return (
              <CartProduct
                key={product.SP_ID}
                SP_ID={product.SP_ID}
                Ten={product.Ten}
                TenTH={product.TenTH}
                GIA={product.Gia}
                Img={product.Img}
              />
            );
          })}
        </div>
      ) : (
        <div className="opacity-50 flex items-center justify-center py-10">
          <h2 className="capitalize sm:text-2xl text-lg pr-2">
            không tìm thấy sản phẩm
          </h2>
          <PiWarningOctagonLight className="sm:text-2xl text-lg" />
        </div>
      )}
    </div>
  );
};

export default ProductRelations;
