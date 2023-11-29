import { Link } from "react-router-dom";
import FormatPrice from "../../Helpers/FormatPrice";
import { useLocation } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidDiscount } from "react-icons/bi";
import axios from "axios";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
const Checkout = () => {
  const navigate = new useNavigate();
  const { user } = useContext(AuthContext);
  const { state } = useLocation();
  const [info, setInfo] = useState({});
  console.log(state);
  let totalPrice = state.reduce(function (prev, cur) {
    return prev + cur.price * parseInt(cur.quantity);
  }, 0);

  useEffect(() => {
    let ignore = false;
    if (user.toKen && user.id) {
      axios
        .get(`http://localhost:60462/api/account/info/${user.id}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + user.toKen,
          },
        })
        .then((res) => {
          if (res.status === 200) {
            setInfo(res.data);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
    return () => (ignore = true);
  }, []);

  function handleCreateOrder() {
    const url = `${process.env.REACT_APP_API_KEY}api/order/create`;
    const Order_Items = [];
    state.forEach((item) => {
      Order_Items.push({
        quantity: item.quantity,
        product_options_id: item.product_options_id,
        product_id: item.product_id,
        product_images_id: item.product_images_id,
        unitPrice: item.price,
        total: parseFloat(item.price * item.quantity),
      });
    });
    const data = {
      user_id: user.id,
      total: totalPrice,
      Order_Items: Order_Items,
    };
    console.log(url, user.toKen, data);
    axios
      .post("http://localhost:60462/api/order/create", data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + user.toKen,
        },
      })
      .then((res) => {
        if (res.status == 200) {
          navigate("/order");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="bg-gray-100 px-4 pt-[149px] pb-[60px]">
      <div className="container mx-auto ">
        <div className="flex flex-col gap-5">
          <div className="p-4 bg-white shadow-sm rounded-md">
            <h2 className="text-rose-500 md:text-xl text-lg capitalize flex items-center gap-3">
              <FaLocationDot />
              Địa Chỉ Nhận Hàng
            </h2>
            <div className="mt-2 flex md:flex-row flex-col md:items-center md:justify-between gap-2">
              <div className=" md:text-lg text-base flex flex-col">
                {info.fullName}
                <strong>{info.phoneNumber}</strong>
              </div>
              <div>
                <p>{info.address}</p>
              </div>
              <div></div>
            </div>
          </div>
          <div className="relative p-4 bg-white overflow-x-auto shadow-sm rounded-md">
            <table className="w-full text-sm text-left text-gray-500 ">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 whitespace-nowrap font-semibold "
                  >
                    Sản Phẩm
                  </th>
                  <th scope="col" className="px-6 py-3 whitespace-nowrap"></th>
                  <th scope="col" className="px-6 py-3 whitespace-nowrap"></th>
                  <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    Đơn Giá
                  </th>
                  <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    Số Lượng
                  </th>
                  <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    Thành Tiền
                  </th>
                </tr>
              </thead>
              <tbody>
                {state &&
                  state.map((item) => {
                    return (
                      <tr
                        key={
                          item.id +
                          "_" +
                          item.product_images_id +
                          "_" +
                          item.product_options_id
                        }
                        className="bg-white border-b "
                      >
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                        >
                          <img className="h-12 w-12" src={item.image} />
                        </th>
                        <td className="px-6 py-4 ">
                          <h4 className="line-clamp-1 md:text-base text-sm">
                            {item.name}
                          </h4>
                        </td>
                        <td className="px-6 py-4 capitalize">
                          <h6 className="line-clamp-2 md:text-sm text-xs">
                            {"Loại: " + item.color + ", " + item.size}
                          </h6>
                        </td>
                        <td className="px-6 py-4 font-semibold whitespace-nowrap">
                          {FormatPrice(item.price)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {item.quantity}
                        </td>
                        <td className="px-6 py-4 font-semibold text-rose-500 whitespace-nowrap">
                          {FormatPrice(item.price * parseInt(item.quantity))}
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>

          <div className="p-4 bg-white shadow-sm rounded-md">
            <div className="flex items-center justify-between">
              <h2 className="md:text-xl text-lg capitalize flex items-center gap-3">
                Phương Thức Thanh Toán
              </h2>
              <button className="md:p-2 pl-0 text-blue-600 hover:text-blue-500 cursor-pointer">
                Thanh toán khi nhận hàng
              </button>
            </div>
          </div>

          <div className="p-4 bg-white shadow-sm rounded-md border border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="md:text-xl text-lg capitalize flex items-center gap-3">
                <BiSolidDiscount className="text-rose-500"></BiSolidDiscount>
                Voucher
              </h2>
            </div>
            <div className="mt-2 flex md:flex-row flex-col md:items-center md:justify-between gap-2"></div>

            <div className="lg:w-80 md:w-72  md:float-right">
              <h4 className="md:text-base text-sm flex justify-between items-center pb-2">
                Tổng tiền hàng:
                <span>{FormatPrice(totalPrice)}</span>
              </h4>
              <h4 className="md:text-base text-sm flex justify-between items-center pb-2">
                Phí vận chuyển:
                <span>đ 0 </span>
              </h4>
              <h4 className="md:text-lg text-base flex justify-between items-center pb-2">
                Tổng thanh toán:
                <strong className="text-rose-500 md:text-2xl text-lg">
                  {FormatPrice(totalPrice)}
                </strong>
              </h4>
            </div>
            <div className="clear-both"></div>
            <div className="md:mt-8 mt-4   flex md:items-center md:flex-row flex-col md:gap-0 gap-2 md:justify-between">
              <p>
                Nhấn "Đặt hàng" đồng nghĩa với việc bạn đồng ý tuân theo{" "}
                <Link className="text-blue-600 hover:text-blue-500" to={"#"}>
                  Điều khoản Shop
                </Link>
              </p>
              <button
                onClick={handleCreateOrder}
                className="px-6 rounded-s py-3 bg-rose-500 hover:bg-rose-400 text-white"
              >
                Dặt hàng
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
