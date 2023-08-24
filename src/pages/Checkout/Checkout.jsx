import { Link } from "react-router-dom";
import FormatPrice from "../../Helpers/FormatPrice";
import { useCartContext } from "../../context/CartContext";
const Checkout = () => {
  const { cart } = useCartContext();
  return (
    <div className="container mx-auto px-4 mt-[149px] mb-[60px]">
      <div className="grid md:grid-cols-3 grid-cols-1 gap-7">
        <div className="md:col-span-2">
          <ul className="grid gap-7">
            {cart &&
              cart.map((item) => {
                if (item.packed) {
                  return (
                    <li
                      key={item.cart_id}
                      className="flex p-4 border border-solid border-[#d1d5db] rounded-sm"
                    >
                      <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md ">
                        <img
                          src={`https://firebasestorage.googleapis.com/v0/b/fashion-app-84f9f.appspot.com/o/images%2Fimg_021-1.jfif4b800a62-ee1b-4ce6-9c16-35ad640231b0?alt=media&token=dac5d983-ac65-431f-ba2b-3d23517dc923`}
                          alt={"iamge"}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>

                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3 className="line-clamp-2 sm:text-base text-xs">
                              <Link to={`/product/${item.product_id}`}>
                                {item.product_name}
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
                        <div className="flex flex1 itemsend justify-between text-sm">
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
                  );
                }
              })}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold">Thanh Toán</h2>
          <div>
            <h4 className="text-lg font-semibold">Địa Chỉ</h4>
            asdasdasd
          </div>
          <div>
            <h4 className="text-lg font-semibold">Mã giảm giá</h4>
            <label className="flex gap-x-2">
              <input
                type="text"
                className="border border-titleSMColor rounded-sm"
              />
              <button className="bg-secondColor text-while10Color text-sm whitespace-nowrap px-2 py-1 rounded-sm duration-200 hover:bg-primaryColor">
                Áp dụng
              </button>
            </label>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Phí vận chuyển</h4>đ 101010
          </div>
          <div>
            <h4 className="text-lg font-semibold">Tổng thanh toán</h4>
          </div>
          <div>
            <Link to="/shoppingCart">
              <button className="rounded-sm bg-secondColor py-3 w-full text-while10Color mt-4 duration-300 hover:bg-primaryColor ">
                Đặt hàng
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
