import { useRef, useState, useEffect } from "react";
import axios from "axios";
import CartProduct from "./CartProduct";
const RecommendPD = ({ category_id }) => {
  const bottomRef = useRef(null);
  const [product, setProduct] = useState([]);
  useEffect(() => {
    let ignore = false;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const url = `${process.env.REACT_APP_API_KEY}api/products?page=1&filterType=${category_id}__&priceMin=0&priceMax=99999999`;
          axios
            .get(url)
            .then((res) => {
              if (!ignore) {
                setProduct(res.data.products);
              }
            })
            .catch((err) => {
              console.log(err);
            });
        }
      },
      {
        root: null, // null means it observes the viewport
        rootMargin: "0px",
        threshold: 0.1, // 10% of the target element is visible
      }
    );

    if (bottomRef.current) {
      observer.observe(bottomRef.current);
    }
    return () => {
      ignore = true;
      if (bottomRef.current) {
        observer.unobserve(bottomRef.current);
      }
    };
  }, []);

  return (
    <div className="mt-6">
      <h3
        ref={bottomRef}
        className=" p-2 text-gray-900 md:text-md text-base font-semibold mb-2"
      >
        CÁC SẢN PHẨM LIÊN QUAN
      </h3>
      <div className="grid xl:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 relative min-h-[100px]">
        {product &&
          product?.map((item, index) => {
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
                  "xl:h-[238px] lg:h-[213px] md:h-[156px] sm:h-[216px] h-[212px]"
                }
              />
            );
          })}
      </div>
    </div>
  );
};

export default RecommendPD;
