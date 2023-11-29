import FormatPrice from "../Helpers/FormatPrice";
import { useNavigate } from "react-router-dom";
const CartTotal = ({ selectedProduct }) => {
  const navigate = new useNavigate();

  const totalPrice = selectedProduct.reduce(
    (prev, cur) => prev + cur.price * cur.quantity,
    0
  );

  function handleButton() {
    if (selectedProduct != null && selectedProduct.length != 0) {
      navigate("/checkout", {
        state: selectedProduct,
      });
    }
  }

  return (
    <div>
      <div className="sm:float-right md:w-[50%] sm:w-[60%] w-full overflow-hidden shadow-xl sm:rounded-lg text-xs text-gray-700 uppercase">
        <div className="bg-[#d1d5db]">
          <h2 className="p-6 text-xl font-semibold">Tổng sản phẩm</h2>
        </div>
        <ul>
          {selectedProduct &&
            selectedProduct.map((item) => {
              return (
                <li
                  key={item.id}
                  className="flex gap-5 p-5 items-center  border-b border-[#d1d5db]"
                >
                  <div className=" w-[70%]">
                    <h6 className="line-clamp-2">{item.name}</h6>
                  </div>
                  <strong className="w-[30%] text-lg text-right">
                    {FormatPrice(item.price * item.quantity)}
                  </strong>
                </li>
              );
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
              type="button"
              onClick={handleButton}
              className=" w-full bg-secondColor font-semibold text-base py-3 rounded-lg duration-200 hover:bg-primaryColor text-while10Color  px-5"
            >
              Mua Hàng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
