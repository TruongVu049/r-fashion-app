import React, { useState, useContext } from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
const ProductReviews = ({
  reviews,
  onChangeReviews,
  onchaneOrderItemsRating,
}) => {
  const { user } = useContext(AuthContext);
  const [rating, setRating] = useState(5);
  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = {
      order_details_id: reviews.order_details_id,
      product_id: reviews.product_id,
      user_id: reviews.user_id,
      star: rating,
      content: formData.get("mes"),
    };

    axios
      .post(`${process.env.REACT_APP_API_KEY}api/product/rating`, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + user.toKen,
        },
      })
      .then((res) => {
        if (res.status == 200)
          onChangeReviews({
            id: null,
            order_details_id: null,
            order_items_id: null,
            product_id: null,
            user_id: null,
            product_name: null,
            image: null,
            status: false,
          });
        onchaneOrderItemsRating(reviews.id, data.order_details_id[0], true);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-600 bg-opacity-40 transition-opacity" />
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full justify-center p-4 text-center items-center sm:p-0">
          <form
            onSubmit={handleSubmit}
            method="post"
            action="#"
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-[70%] w-[90%]"
          >
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <h4 className="capitalize md:text-2xl sm:text-xl text-lg">
                Đánh giá sản phẩm
              </h4>
              <div className="flex items-start gap-2 py-4">
                <div>
                  <img className="h-20 w-20" src={reviews.image} />
                </div>
                <div>
                  <h4 className="sm:line-clamp-none line-clamp-1 sm:text-base text-sm">
                    {reviews.product_name}
                  </h4>
                </div>
              </div>
              <div className="flex items-center md:text-lg sm:text-base text-sm gap-2 flex-wrap">
                <h6 className="sm:mr-8">Chất lượng sản phẩm</h6>
                <div className="flex items-center ">
                  {[...Array(5)].map((star, index) => {
                    const currentRating = index + 1;
                    return (
                      <label key={index} className="cursor-pointer">
                        <input
                          type="radio"
                          name="rating"
                          className="peer sr-only"
                          value={currentRating}
                          onClick={() => setRating(currentRating)}
                        />
                        {currentRating <= rating ? (
                          <AiFillStar size={40} className="text-yellow-500" />
                        ) : (
                          <AiOutlineStar
                            size={40}
                            className="text-yellow-500"
                          />
                        )}
                      </label>
                    );
                  })}
                </div>
                <span>
                  {rating >= 5
                    ? "Tuyêt vời"
                    : rating >= 4
                    ? "Hài lòng"
                    : rating >= 3
                    ? "Bình thường"
                    : rating >= 2
                    ? "Không hài lòng"
                    : "Tệ"}
                </span>
              </div>
              <div>
                <label
                  htmlFor="mes"
                  className="block py-4 font-medium md:text-lg sm:text-base text-sm"
                >
                  Nội dung đánh giá
                </label>
                <textarea
                  id="mes"
                  name="mes"
                  rows="4"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-rose-500 focus:border-rose-500 "
                  placeholder=""
                ></textarea>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-4 flex sm:flex-nowrap flex-wrap flex-row-reverse sm:px-6 gap-4">
              <button
                type="submit"
                className="border-rose-500 border-2 border-solid px-10 py-2 bg-rose-500 hover:bg-rose-400  text-white"
              >
                Hoàn thành
              </button>
              <button
                type="button"
                onClick={() =>
                  onChangeReviews({
                    order_details_id: null,
                    order_items_id: null,
                    product_id: null,
                    user_id: null,
                    product_name: null,
                    image: null,
                    status: false,
                  })
                }
                className="border-rose-500 border-2 border-solid text-rose-500 px-10 py-2 hover:bg-rose-500 hover:text-white"
              >
                Trở lại
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductReviews;
