import React from "react";
import { OrderItems } from "../../components";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { Helmet } from "react-helmet";
const Order = () => {
  const { user } = useContext(AuthContext);
  const [tabs, setTabs] = useState({
    index: 1,
    status: "Chờ xác nhận",
  });
  const [orderItems, setOrderItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let ignore = false;
    setIsLoading(true);
    axios
      .get(
        `${process.env.REACT_APP_API_KEY}api/order/getorder?id=${user.id}&status=${tabs.status}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + user.toKen,
          },
        }
      )
      .then((res) => {
        setOrderItems(res.data);
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
  }, [tabs]);

  function handleChangeTab(index, status) {
    setTabs({
      index: index,
      status: status,
    });
  }
  function handleChangeOrderItemsRating(order_id, order_items_id, status) {
    const newOrderItem = orderItems.map((item) => {
      if (item.id === order_id) {
        const newOrder_detail = item.Order_Items.map((i) => {
          if (i.id === order_items_id) {
            return { ...i, isRating: status };
          } else {
            return i;
          }
        });
        return { ...item, Order_Items: newOrder_detail };
      } else {
        return item;
      }
    });
    setOrderItems(newOrderItem);
  }

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Đơn hàng của tôi</title>
        <meta name="description" content="FAF - Thời trang nam nữ" />
      </Helmet>
      <div className="bg-gray-100 mt-[89px]">
        <div className="xl:container mx-auto lg:container sm:container py-10  ">
          <div className="border-b border-gray-200 bg-white shadow-sm">
            <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-700 ">
              <li className="mr-2">
                <a
                  onClick={() => handleChangeTab(1, "Chờ xác nhận")}
                  className={`${
                    tabs.index === 1
                      ? "border-b-2    text-rose-500  border-rose-500  rounded-t-lg active  "
                      : " border-b-2 border-transparent rounded-t-lg hover:text-rose-500 hover:border-rose-500 "
                  } inline-flex  p-4 items-center justify-center group cursor-pointer`}
                  aria-current="page"
                >
                  Chờ xác nhận
                </a>
              </li>
              <li className="mr-2">
                <a
                  onClick={() => handleChangeTab(2, "Đang vận chuyển")}
                  className={`${
                    tabs.index === 2
                      ? "border-b-2    text-rose-500  border-rose-500  rounded-t-lg active  "
                      : " border-b-2 border-transparent rounded-t-lg hover:text-rose-500 hover:border-rose-500 "
                  } inline-flex  p-4 items-center justify-center group cursor-pointer`}
                  aria-current="page"
                >
                  Đang vận chuyển
                </a>
              </li>
              <li className="mr-2">
                <a
                  onClick={() => handleChangeTab(3, "Giao hàng thành công")}
                  className={`${
                    tabs.index === 3
                      ? "border-b-2   text-rose-500  border-rose-500  rounded-t-lg active  "
                      : " border-b-2 border-transparent rounded-t-lg hover:text-rose-500 hover:border-rose-500 "
                  } inline-flex  p-4 items-center justify-center group cursor-pointer `}
                  aria-current="page"
                >
                  Hoàn thành
                </a>
              </li>
              <li className="mr-2">
                <a
                  onClick={() => handleChangeTab(4, "Đã hủy")}
                  className={`${
                    tabs.index === 4
                      ? "border-b-2   text-rose-500  border-rose-500  rounded-t-lg active  "
                      : " border-b-2 border-transparent rounded-t-lg hover:text-rose-500 hover:border-rose-500 "
                  } inline-flex  p-4 items-center justify-center group cursor-pointer `}
                  aria-current="page"
                >
                  Đã hủy
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-6">
            <OrderItems
              items={orderItems}
              status={tabs.status}
              onchaneOrderItemsRating={handleChangeOrderItemsRating}
              isLoading={isLoading}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
