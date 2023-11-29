import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { LiaGrinStars } from "react-icons/lia";
import { BiSolidStar, BiStar } from "react-icons/bi";
import { FaRegUserCircle } from "react-icons/fa";
const Reviews = ({ productId }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    let ignore = false;
    const url = `${process.env.REACT_APP_API_KEY}api/product_reviews/${productId}`;
    // setStatus("loading");
    axios
      .get(url)
      .then((res) => {
        if (!ignore) {
          setReviews(res.data);
        }
      })
      // .then(() => {
      //   setStatus("success");
      // })
      .catch((err) => {
        console.log(err);
      });
    // .finally(() => {
    //   window.scrollTo(0, 0);
    // });
    return () => {
      ignore = true;
    };
  }, [productId]);
  console.log(reviews);
  return (
    <div className="border border-gray-300 pt-4 rounded-md">
      {reviews && reviews.length === 0 ? (
        <div className="text-gray-500 flex justify-center flex-col items-center">
          <LiaGrinStars className="sm:text-8xl text-6xl" />
          <span className="md:text-xl sm:text-lg text-base ">
            Chưa có đánh giá
          </span>
        </div>
      ) : (
        <div className="px-3">
          {reviews.map((item) => {
            return (
              <div className="border-b border-gray-300 py-3">
                <div className="flex items-center justify-start gap-2">
                  <div>
                    <FaRegUserCircle className="md:text-5xl text-3xl text-gray-400" />
                  </div>
                  <div>
                    <h6 className="text-gray-800 sm:text-lg text-base">
                      {item.fullName}
                    </h6>
                    <div className="flex items-center  pb-1.5">
                      {[...Array(5)].map((i, index) => {
                        if (item.star >= index + 1) {
                          return (
                            <BiSolidStar className="block h-4 w-4 align-middle text-yellow-500" />
                          );
                          // index = 3, product.avgstar = 2.4
                          // > 0 <= 0.5
                          // > 0.5
                        } else {
                          return (
                            <BiStar className="block h-4 w-4 align-middle text-yellow-500" />
                          );
                        }
                      })}
                    </div>
                    <span>{new Date(item.create_at).toLocaleString()}</span>
                  </div>
                </div>
                <p className="pt-4 pl-2 text-gray-800">{item.content}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Reviews;
