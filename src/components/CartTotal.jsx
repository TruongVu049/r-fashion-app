import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import FormatPrice from "../Helpers/FormatPrice";
const CartTotal = () => {
  const { cart } = useCartContext();

  const totalPrice = cart
    .filter((t) => t.packed)
    .reduce((prev, cur) => prev + cur.price * cur.quantity, 0);
  console.log("total price", totalPrice);
  return (
    <div>
      <div className="sm:float-right md:w-[50%] sm:w-[60%] w-full overflow-hidden shadow-xl sm:rounded-lg text-xs text-gray-700 uppercase">
        <div className="bg-[#d1d5db]">
          <h2 className="p-6 text-xl font-semibold">Tổng sản phẩm</h2>
        </div>
        <ul>
          {cart &&
            cart.map((item) => {
              if (item.packed) {
                return (
                  <li
                    key={item.cart_id}
                    className="flex gap-5 p-5 items-center  border-b border-[#d1d5db]"
                  >
                    <div className=" w-[70%]">
                      <h6 className="line-clamp-2">{item.product_name}</h6>
                    </div>
                    <strong className="w-[30%] text-lg text-right">
                      {FormatPrice(item.price * item.quantity)}
                    </strong>
                  </li>
                );
              }
            })}
        </ul>
        <div className="">
          <div className="flex justify-between px-5 py-2">
            <h3 className="text-lg font-semibold ">Tổng Tiền</h3>
            <strong className="text-lg font-semibold  text-primaryColor">
              {FormatPrice(totalPrice)}
            </strong>
          </div>
          <div className="px-5 pb-5 ">
            <button
              type="submit"
              className=" w-full bg-secondColor font-semibold text-base py-3 rounded-lg duration-200 hover:bg-primaryColor text-while10Color  px-5"
            >
              <Link to={"/checkout"}>Mua Hàng</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
