import React, { useState } from "react";
import CartProduct from "./CartProduct";
import { useEffect } from "react";
import axios from "axios";
import { PiWarningOctagonLight } from "react-icons/pi";
const ProductRelations = ({ title, url }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let ignore = false;

    axios
      .get(`${process.env.REACT_APP_API_KEY}/api/product/${url}`)
      .then((res) => {
        if (!ignore) {
          setProducts(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    return () => {
      ignore = true;
    };
  }, [url]);

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
          {products.map((item) => {
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
