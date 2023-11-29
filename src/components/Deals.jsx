import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import CardSkeleton from "./CardSkeleton";
import CartProduct from "./CartProduct";
const Deals = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState([]);
  useEffect(() => {
    let ignore = false;
    setIsLoading(true);
    let clActionName = "";
    if (activeIndex === 0) {
      clActionName = "products/newproduct/newproduct";
    } else if (activeIndex === 1) {
      clActionName = "products/newproduct/newproduct1";
    } else {
      clActionName = "products/newproduct/newproduct";
    }
    axios
      .get(`${process.env.REACT_APP_API_KEY}api/${clActionName}`)
      .then((res) => {
        if (res.status === 200) {
          setProduct(res.data);
        }
      })
      .then(() => {
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
    return () => (ignore = true);
  }, [activeIndex]);

  return (
    <div className="container mx-auto px-4">
      <div className="border-b border-gray-300">
        <div>
          <div className="flex gap-x-4 justify-center items-center">
            <button
              className={`${
                activeIndex == 0 && "text-primaryColor"
              } py-6 px-3 mx-1  duration-300 relative 
                    after:content-[''] after:absolute after:left-0 after:bottom-[10px] after:h-[2.5px] after:ease-linear
                    after:w-full after:bg-primaryColor after:scale-x-0 after:duration-300 after:origin-bottom-left
                     hover:text-primaryColor hover:after:scale-x-[1]`}
              onClick={() => setActiveIndex(0)}
            >
              Mới ra
            </button>
            <button
              className={`${
                activeIndex == 1 && "text-primaryColor"
              } py-6 px-3 mx-1  duration-300 relative 
                    after:content-[''] after:absolute after:left-0 after:bottom-[10px] after:h-[2.5px] after:ease-linear
                    after:w-full after:bg-primaryColor after:scale-x-0 after:duration-300 after:origin-bottom-left
                     hover:text-primaryColor hover:after:scale-x-[1]`}
              onClick={() => setActiveIndex(1)}
            >
              Mua nhiều
            </button>
            <button
              className={`${
                activeIndex == 2 && "text-primaryColor"
              } py-6 px-3 mx-1  duration-300 relative 
                    after:content-[''] after:absolute after:left-0 after:bottom-[10px] after:h-[2.5px] after:ease-linear
                    after:w-full after:bg-primaryColor after:scale-x-0 after:duration-300 after:origin-bottom-left
                     hover:text-primaryColor hover:after:scale-x-[1]`}
              onClick={() => setActiveIndex(2)}
            >
              Sale
            </button>
          </div>
        </div>
      </div>
      <div className="py-6">
        {isLoading ? (
          <div className="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 relative">
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
          </div>
        ) : (
          product && (
            <div className="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 relative">
              {product.map((item, index) => {
                return (
                  <div className="border border-gray-100  rounded-md relative">
                    {activeIndex == 0 && (
                      <span className="absolute top-0 right-0 bg-blue-100 text-blue-800 sm:text-base text-sm font-medium me-2 px-2.5 py-0.5 rounded-full z-50 mt-2 ">
                        Mới
                      </span>
                    )}
                    <CartProduct
                      key={item.id}
                      product_id={item.id}
                      product_name={item.name}
                      brand={item.brand}
                      price={item.price}
                      Img={item.image}
                    />
                  </div>
                );
              })}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Deals;
