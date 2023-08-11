import React from "react";
import { useCartContext } from "../context/CartContext";
import { useEffect } from "react";
import { BsTrash } from "react-icons/bs";
import FormatPrice from "../Helpers/FormatPrice";

const ProductTable = () => {
  const { cart, deleteCart, updateCart } = useCartContext();

  console.log("render product table", cart);
  return (
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-[#d1d5db] dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="p-1">
            <div className="flex items-center invisible"></div>
          </th>
          <th scope="col" className="px-6 py-3 text-center">
            Ảnh
          </th>
          <th scope="col" className="px-6 py-3">
            Tên Sản Phẩm
          </th>
          <th scope="col" className="px-3 py-3">
            Phân loại
          </th>
          <th scope="col" className="px-6 py-3">
            Giá
          </th>
          <th scope="col" className="px-6 py-3">
            Số Lượng
          </th>
          <th scope="col" className="px-6 py-3">
            Tổng
          </th>
          <th scope="col" className="px-6 py-3">
            Xóa
          </th>
        </tr>
      </thead>
      <tbody>
        {cart &&
          cart.map((item) => {
            return (
              <tr
                key={item.cart_id}
                className="cursor-pointer bg-white border-b border-[#d1d5db] dark:bg-gray-800 dark:border-gray-700 hover:bg-[#f3f4f6] dark:hover:bg-gray-600"
              >
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={item.packed || false}
                      onChange={(e) => {
                        updateCart({
                          ...item,
                          packed: e.target.checked,
                        });
                      }}
                      name={`${item.cart_id}`}
                      className="accent-primaryColor w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label htmlFor={`${item.cart_id}`} className="sr-only">
                      checkbox
                    </label>
                  </div>
                </td>
                <td className="px-6 py-1">
                  <img
                    className="w-40"
                    src={`${item.images.split("@")[0]}`}
                    alt="image"
                  />
                </td>
                <th
                  scope="row"
                  className=" 
          px-6 py-4 font-medium text-gray-900 dark:text-white"
                >
                  <h4 className="line-clamp-2 ">{item.product_name}</h4>
                </th>
                <td className="px-3 py-4">
                  <h6 className="text-xs opacity-70 whitespace-nowrap capitalize">
                    {item.color}, {item.size}
                  </h6>
                </td>
                <td className="px-6 py-4 text-primaryColor">
                  <span className="whitespace-nowrap">
                    {FormatPrice(item.price)}
                  </span>
                </td>
                <td className="px-6 py-4">{item.quantity}</td>
                <td className="px-6 py-4 text-center text-primaryColor">
                  <span className="whitespace-nowrap">
                    {FormatPrice(item.price * item.quantity)}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => {
                      deleteCart(item.cart_id);
                    }}
                    className="font-medium text-red-600 dark:text-red-500 hover:text-primaryColor"
                  >
                    <BsTrash className="text-xl" />
                  </button>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default ProductTable;
