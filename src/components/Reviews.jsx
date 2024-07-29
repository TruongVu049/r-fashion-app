import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { LiaGrinStars } from "react-icons/lia";
import { BiSolidStar, BiStar } from "react-icons/bi";
import { FaRegUserCircle } from "react-icons/fa";
const Reviews = ({ productId }) => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let ignore = false;
    const url = `${process.env.REACT_APP_API_KEY}api/product_reviews/${productId}`;
    setIsLoading(true);
    axios
      .get(url)
      .then((res) => {
        if (!ignore) {
          setReviews(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
    return () => {
      ignore = true;
    };
  }, [productId]);
  return (
    <>
      {isLoading ? (
        <section className="mt-2">
          <div className="container mx-auto">
            <div className="animate-pulse">
              <div className="h-12  flex items-center justify-center mb-4 bg-gray-200 rounded-md "></div>
              <div className="h-12  flex items-center justify-center mb-4 bg-gray-200 rounded-md "></div>
            </div>
          </div>
        </section>
      ) : (
        <div className="mt-2">
          {reviews && reviews.length === 0 ? (
            <div className="text-gray-500 flex justify-center flex-col items-center">
              <LiaGrinStars className="sm:text-8xl text-6xl" />
              <span className="md:text-xl sm:text-lg text-base ">
                Chưa có đánh giá
              </span>
            </div>
          ) : (
            <div className="">
              {reviews.map((item) => {
                return (
                  <article className="p-6 pb-3 text-base bg-white border-t border-gray-200">
                    <footer className=" mb-2">
                      <div className="flex items-start">
                        <div className="mr-3 ">
                          <FaRegUserCircle className="md:text-5xl text-xl text-gray-400" />
                        </div>
                        <div className="flex flex-col">
                          <div className="">
                            <p className="text-sm text-gray-900  font-semibold">
                              {item.fullName}
                            </p>
                          </div>
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
                          <div>
                            <p className=" text-sm text-gray-600 ">
                              <time
                                pubdate=""
                                dateTime="2022-06-23"
                                title="2024-05-24 20:43:19"
                              >
                                {new Date(item.create_at).toLocaleString()}
                              </time>
                            </p>
                          </div>
                        </div>
                      </div>
                    </footer>
                    <p className="text-gray-500 dark:text-gray-400">
                      {item.content}
                    </p>
                    <div className="flex items-center mt-4 space-x-4"></div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Reviews;
