import { Link } from "react-router-dom";
import { Breadcrumb } from "../../components";
import { BsTrash } from "react-icons/bs";
const ShoppingCart = () => {
  return (
    <div>
      <Breadcrumb title={"Giỏ Hàng"} namePage={"Giỏ hàng"} />
      <div className="container mx-auto px-4">
        <div className="mt-20 mb-10 relative overflow-x-auto shadow-xl sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-[#d1d5db] dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="p-4">
                  <div className="flex items-center invisible">
                    <input
                      id="checkbox-all-search"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label htmlFor="checkbox-all-search" className="sr-only">
                      checkbox
                    </label>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Ảnh
                </th>
                <th scope="col" className="px-6 py-3">
                  Tên Sản Phẩm
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
              <tr className="bg-white border-b border-[#d1d5db] dark:bg-gray-800 dark:border-gray-700 hover:bg-[#f3f4f6] dark:hover:bg-gray-600">
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-search-1"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="checkbox-table-search-1"
                      className="sr-only"
                    >
                      checkbox
                    </label>
                  </div>
                </td>
                <td className="px-6 py-1">
                  <img
                    className="w-40"
                    src="https://truongvu049.github.io/n2-fashion/assets/image/img_040-1.jfif"
                    alt="image"
                  />
                </td>
                <th
                  scope="row"
                  className="
                  px-6 py-4 font-medium text-gray-900 dark:text-white"
                >
                  <h4 className=" line-clamp-2">
                    CONVERSE - Giày sneakers cổ cao unisex Chuck Taylor All Star
                    1970s 162053C-0000_NUDE
                  </h4>
                </th>
                <td className="px-6 py-4">
                  <span>{"111" + " VNĐ"}</span>
                </td>
                <td className="px-6 py-4">
                  <div>Counter</div>
                </td>
                <td className="px-6 py-4 text-center">
                  <span>{"111" + " VNĐ"}</span>
                </td>
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-red-600 dark:text-red-500 hover:text-primaryColor"
                  >
                    <BsTrash className="text-xl" />
                  </a>
                </td>
              </tr>
              <tr className="bg-white border-b border-[#d1d5db] dark:bg-gray-800 dark:border-gray-700 hover:bg-[#f3f4f6] dark:hover:bg-gray-600">
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-search-1"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="checkbox-table-search-1"
                      className="sr-only"
                    >
                      checkbox
                    </label>
                  </div>
                </td>
                <td className="px-6 py-1">
                  <img
                    className="w-40"
                    src="https://truongvu049.github.io/n2-fashion/assets/image/img_041-1.jfif"
                    alt="image"
                  />
                </td>
                <th
                  scope="row"
                  className="
                  px-6 py-4 font-medium text-gray-900 dark:text-white"
                >
                  <h4 className=" line-clamp-2">
                    CONVERSE - Giày sneakers cổ cao unisex Chuck Taylor All Star
                    1970s 162053C-0000_NUDE
                  </h4>
                </th>
                <td className="px-6 py-4">
                  <span>{"111" + " VNĐ"}</span>
                </td>
                <td className="px-6 py-4">
                  <div>Counter</div>
                </td>
                <td className="px-6 py-4 text-center">
                  <span>{"111" + " VNĐ"}</span>
                </td>
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-red-600 dark:text-red-500 hover:text-primaryColor"
                  >
                    <BsTrash className="text-xl" />
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <div className="sm:float-right md:w-[50%] sm:w-[60%] w-full overflow-hidden shadow-xl sm:rounded-lg text-xs text-gray-700 uppercase">
            <div className="bg-[#d1d5db]">
              <h2 className="p-6 text-xl font-semibold">Tổng sản phẩm</h2>
            </div>
            <ul>
              <li className="flex gap-5 p-5 items-center  border-b border-[#d1d5db]">
                <div className=" w-[70%]">
                  <h6 className="line-clamp-2">
                    CONVERSE - Giày sneakers cổ cao unisex Chuck Taylor All Star
                    1970s 162053C-0000_NUDE
                  </h6>
                </div>
                <strong className="w-[30%] text-lg text-right">
                  {"2000000 VNĐ"}
                </strong>
              </li>
              <li className="flex gap-5 p-5 items-center  border-b border-[#d1d5db]">
                <div className=" w-[70%]">
                  <h6 className="line-clamp-2">
                    CONVERSE - Giày sneakers cổ cao unisex Chuck Taylor All Star
                    1970s 162053C-0000_NUDE
                  </h6>
                </div>
                <strong className="w-[30%] text-lg text-right">
                  {"2000000 VNĐ"}
                </strong>
              </li>
              <li className="flex gap-5 p-5 items-center  border-b border-[#d1d5db]">
                <div className=" w-[70%]">
                  <h6 className="line-clamp-2">
                    CONVERSE - Giày sneakers cổ cao unisex Chuck Taylor All Star
                    1970s 162053C-0000_NUDE
                  </h6>
                </div>
                <strong className="w-[30%] text-lg text-right">
                  {"2000000 VNĐ"}
                </strong>
              </li>
            </ul>
            <div className="">
              <div className="flex justify-between px-5 py-2">
                <h3 className="text-lg font-semibold ">Tổng Tiền</h3>
                <strong className="text-lg font-semibold  text-primaryColor">
                  {"11111" + " VNĐ"}
                </strong>
              </div>
              <button className="px-5 w-full pb-5">
                <Link
                  to="/checkout"
                  className="bg-secondColor font-semibold text-base py-3 rounded-lg duration-200 hover:bg-primaryColor text-while10Color  px-5"
                >
                  Mua Hàng
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="clear-both mb-20"></div>
      </div>
    </div>
  );
};

export default ShoppingCart;
