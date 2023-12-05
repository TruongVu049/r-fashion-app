import React from "react";
import { useState } from "react";
import FormatPrice from "../Helpers/FormatPrice";
import ProductReviews from "./ProductReviews";
import noneOrder from "../assets/images/kh_co_don_hang.png";
import { Link } from "react-router-dom";
const OrderItems = ({ items, status, onchaneOrderItemsRating }) => {
  console.log("item", items);
  const [reviews, setReviews] = useState({
    id: null,
    order_details_id: null,
    product_id: null,
    user_id: null,
    product_name: null,
    image: null,
    status: false,
  });
  function combineArr(Order_Items) {
    const result = [];
    Order_Items.forEach((itemOrder, index) => {
      if (result.length === 0) {
        result.push([itemOrder]);
      } else {
        let checkItemResult = false;
        let indexItemResult = 0;
        result.forEach((itemResult, indexResult) => {
          const existing = itemResult.find((t) => {
            return t.product_id === itemOrder.product_id;
          });
          if (existing) {
            indexItemResult = indexResult;
            checkItemResult = true;
          }
        });
        if (checkItemResult && indexItemResult !== 0) {
          result[indexItemResult].push(itemOrder);
        } else {
          result.push([itemOrder]);
        }
      }
    });
    return result;
  }

  function handleChangeReviews(newReviews) {
    setReviews(newReviews);
  }
  return (
    <>
      <div className="flex flex-col gap-5">
        {items?.length != 0 ? (
          items.map((item) => {
            const result = combineArr(item.Order_Items);
            console.log(result);
            return result.map((i, index) => {
              return (
                <div key={`${item.id}_${index}`}>
                  <div
                    className={`bg-white p-4 shadow-lg ${
                      status === "Đã hủy" && "opacity-70"
                    }`}
                  >
                    <div className="flex items-center justify-between ">
                      <h4 className="text-blue-500 md:text-lg sm:text-base text-sm">
                        Mã đơn hàng: {item.id} |{" "}
                        <span className="text-gray-900">
                          {status === "Chờ xác nhận"
                            ? new Date(item.create_at).toLocaleString()
                            : new Date(item.modified_at).toLocaleString()}
                        </span>
                      </h4>
                      <h4 className="whitespace-nowrap uppercase md:text-lg sm:text-base text-sm float-right p-2 text-rose-500">
                        {item.status}
                      </h4>
                    </div>
                    {i.map((x) => {
                      return (
                        <div
                          key={`${x.id}_${x.product_options_id}_${x.product_images_id}`}
                          className="clear-both gap-1 flex justify-between py-2 items-center border-y border-gray-200 border-solid"
                        >
                          <div className="flex items-center gap-1">
                            <img className="h-20 w-20" src={x.info[0].image} />
                            <div>
                              <h4 className="sm:line-clamp-none line-clamp-1 sm:text-base text-sm">
                                {x.info[0].name}
                              </h4>
                              <span className="text-gray-500 sm:text-base text-sm">
                                Phân loại hàng:{" "}
                                {`${x.info[0].color}, ${x.info[0].size}`}
                              </span>
                              <span className="block sm:text-base text-sm">
                                Số lượng: {x.quantity}
                              </span>
                            </div>
                          </div>
                          <strong className="whitespace-nowrap">
                            {FormatPrice(x.total)}
                          </strong>
                        </div>
                      );
                    })}
                    <div className="flex justify-end flex-col items-end">
                      <div className="pt-4 pb-4">
                        Thành tiền:{" "}
                        <strong className="sm:text-2xl text-lg text-rose-500">
                          {FormatPrice(
                            i.reduce((prev, cur) => prev + cur.total, 0)
                          )}
                        </strong>
                      </div>
                      {status == "Chờ xác nhận" ? (
                        <button className="border-rose-500 border-2 border-solid text-rose-500 px-10 py-2  ">
                          Đang xử lý
                        </button>
                      ) : (
                        status == "Giao hàng thành công" && (
                          <div className="flex items-center gap-4">
                            <button
                              onClick={() => {
                                handleChangeReviews({
                                  id: item.id,
                                  order_details_id: i.map((item) => item.id),
                                  product_id: i[0].product_id,
                                  user_id: item.user_id,
                                  product_name: i[0].info[0].name,
                                  image: i[0].info[0].image,
                                  status: true,
                                });
                              }}
                              disabled={i[0].isRating ? true : false}
                              className={`${
                                i[0].isRating
                                  ? "focus:outline-none opacity-50 outline-none"
                                  : "hover:bg-rose-400  "
                              } border-rose-500 border-2 border-solid px-10 py-2 bg-rose-500 text-white`}
                            >
                              {i[0].isRating ? "Đã đánh giá" : "Đánh giá"}
                            </button>
                            <button className="border-rose-500 border-2 border-solid text-rose-500 px-10 py-2 hover:bg-rose-500 hover:text-white">
                              <Link to={`/product/${i[0].product_id}`}>
                                Mua lại
                              </Link>
                            </button>
                          </div>
                        )
                      )}
                    </div>
                    <div className="clear-both"></div>
                  </div>
                </div>
              );
            });
          })
        ) : (
          <div className="h-80 flex items-center justify-center py-10 bg-white">
            <div className="flex flex-col items-center gap-4">
              <img className="aspect-square" src={noneOrder} alt="image" />
              <span className="text-gray-900">Chưa có đơn hàng</span>
            </div>
          </div>
        )}
      </div>
      {reviews?.status != false && (
        <ProductReviews
          reviews={reviews}
          onChangeReviews={handleChangeReviews}
          onchaneOrderItemsRating={onchaneOrderItemsRating}
        />
      )}
    </>
  );
};

export default OrderItems;
