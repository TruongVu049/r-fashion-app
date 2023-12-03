import React from "react";
import { BsTrash } from "react-icons/bs";
import FormatPrice from "../Helpers/FormatPrice";

const ProductTable = ({
  cart,
  onchangeAddSelectedProduct,
  onchangeRemoveSelectedProduct,
  onchangeRemoveCart,
}) => {
  function handleSubmit(e) {
    e.preventDefault();
    const cart_item = [];
    document
      .querySelectorAll("input[name='checkbox']")
      .forEach((item, index) => {
        if (item.checked) {
          cart_item.push(cart.find((i) => i.id == item.value));
        }
      });
    console.log(cart_item);
  }

  return (
    <>
      <div className="relative p-4 bg-white overflow-x-auto shadow-sm rounded-md">
        <form>
          <table className="w-full text-sm text-left text-gray-500 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-100  ">
              <tr>
                <th scope="col" className="p-1">
                  <div className="flex items-center invisible"></div>
                </th>
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
                <th scope="col" className="px-6 py-3 whitespace-nowrap"></th>
              </tr>
            </thead>
            <tbody>
              {cart &&
                cart.map((item) => {
                  return (
                    <tr key={item.id} className="bg-white border-b ">
                      <td className="w-4 p-4">
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            name={"checkbox"}
                            value={item.id}
                            onChange={(e) => {
                              e.target.checked
                                ? onchangeAddSelectedProduct(item)
                                : onchangeRemoveSelectedProduct(item.id);
                            }}
                            className="accent-rose-500 w-6 h-6  bg-gray-100 border-gray-300 rounded  focus:ring-2 "
                          />
                          <label htmlFor={`${item.id}`} className="sr-only">
                            checkbox
                          </label>
                        </div>
                      </td>
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
                      <td className="group  px-6 py-4 sm:text-lg text-base cursor-pointer">
                        <div
                          onClick={() => {
                            onchangeRemoveSelectedProduct(item.id);
                            onchangeRemoveCart(item.id);
                          }}
                        >
                          <BsTrash className="group-hover:text-rose-500" />
                        </div>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </form>
      </div>
    </>
  );
};

export default ProductTable;
