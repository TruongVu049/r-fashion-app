import { useState, useEffect } from "react";
import axios from "axios";
import CardSkeleton from "./CardSkeleton";
import CartProduct from "./CartProduct";
const tabTitle = [
  { id: 0, title: "Mới ra" },
  { id: 1, title: "Mua nhiều" },
  { id: 2, title: "Giảm giá" },
];
const litmitP = 8;
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
            {tabTitle?.map((item) => (
              <button
                key={item.id}
                className={` py-6 px-3 mx-1  duration-300 relative 
                    after:content-[''] after:absolute after:left-0 after:bottom-[10px] after:h-[2.5px] after:ease-linear
                    after:w-full after:bg-primaryColor after:scale-x-0 after:duration-300 after:origin-bottom-left
                     hover:text-primaryColor
                     ${
                       activeIndex === item.id
                         ? "text-primaryColor after:scale-x-[1]"
                         : " hover:after:scale-x-[1]"
                     }
                    `}
                onClick={() => setActiveIndex(item.id)}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="py-6">
        {isLoading ? (
          <div className="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 relative">
            {new Array(litmitP).fill(1, 1).map((item) => (
              <CardSkeleton height={"lg:h-72 md:h-64 sm:h-56 h-52"} />
            ))}
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
                      height={"lg:h-72 md:h-64 sm:h-56 h-52"}
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
