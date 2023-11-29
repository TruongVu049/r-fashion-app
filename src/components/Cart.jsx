import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { BsCart2 } from "react-icons/bs";
import { FaXmark } from "react-icons/fa6";
import { AuthContext } from "../context/AuthContext";
import FormatPrice from "../Helpers/FormatPrice";
import { useCartContext } from "../context/CartContext";
import axios from "axios";
const Cart = () => {
  const { cart } = useCartContext();
  const [isShow, setIsShow] = useState(false);

  console.log(cart);

  function handleShow() {
    setIsShow(!isShow);
  }

  return (
    <div className="relative">
      <div
        onClick={handleShow}
        className="p-[10px] hover:text-primaryColor duration-300 relative
        "
      >
        <BsCart2 className="text-[20px]"></BsCart2>
        {cart.length != 0 && (
          <div className="absolute top-[-8px] text-center text-while10Color right-[-4px] h-6 w-6 rounded-[50%] bg-primaryColor">
            <span>{cart.length}</span>
          </div>
        )}
      </div>
      <div
        className={`z-50 fixed top-0 right-0 h-[100vh] w-full  duration-300 delay-0 ease-linear ${
          isShow ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="absolute w-full h-[100vh] inset-[0] opacity-60 bg-[#212121]"></div>
        <div
          className={`
          w-[450px] h-full bg-while10Color relative
          ease-linear delay-0 duration-[250ms] ml-auto p-[20px] text-center flex flex-col overflow-auto

          shadow-[-1px_0px_20px_-5px_#aaa]

          ${isShow ? "translate-x-[0]" : "translate-x-[100%]"}
          `}
        >
          <div>
            <FaXmark
              onClick={handleShow}
              className="float-right m-2 cursor-pointer text-[20px] hover:text-primaryColor hover:duration-400"
            />
          </div>
          <div className="flex flex-col h-full  text-left font-semibold capitalize overflow-y-auto">
            <h3 className="font-[600] text-[22px] text-secondColor">
              Giỏ Hàng{" "}
              <span className="text-gray-400 sm:text-base text-sm font-normal">
                (Sản phẩm đã thêm gần đây)
              </span>
            </h3>
            <div className="mt-8 clear-both">
              <div className="flow-root">
                <ul role="list" className="-my-6 divide-y divide-gray-200">
                  {cart &&
                    cart.map((item) => (
                      <li key={item.id} className="flex py-6 pr-2">
                        <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                          <img
                            src={`${item.image}`}
                            alt={"image"}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>

                        <div className="ml-4 flex flex-1 flex-col">
                          <div>
                            <div className="flex justify-between text-base font-medium text-gray-900">
                              <h3 className="line-clamp-2 sm:text-base text-xs">
                                <Link to={`/product/${item.product_id}`}>
                                  {item.name}
                                </Link>
                              </h3>
                              <p className="ml-4 whitespace-nowrap text-primaryColor">
                                {FormatPrice(item.price)}
                              </p>
                            </div>
                            <p className="mt-1 text-sm text-gray-500 opacity-60">
                              Phân loại: {item.color}, {item.size}
                            </p>
                          </div>
                          <div className="flex flex-1 items-end justify-between text-sm">
                            <p className="text-gray-500 opacity-60">
                              Số lượng: {item.quantity}
                            </p>

                            <div className="flex">
                              <button
                                type="button"
                                className="p-1 duration-150 hover:text-primaryColor font-medium text-indigo-600 hover:text-indigo-500"
                              ></button>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
          <div>
            <Link to="/shoppingCart" onClick={handleShow}>
              <button className="bg-secondColor py-3 w-full text-while10Color mt-4 duration-300 hover:bg-primaryColor hover:text-secondColor">
                Xem Giỏ Hàng
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
