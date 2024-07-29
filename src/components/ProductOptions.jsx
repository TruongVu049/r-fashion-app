import React, { useState, useContext } from "react";
import Counter from "./Counter";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { AiOutlineCheckCircle } from "react-icons/ai";
import axios from "axios";
import { useCartContext } from "../context/CartContext";
import Loading from "./Loading";
const ProductOptions = ({ product }) => {
  const { refreshCart } = useCartContext();
  const navigate = new useNavigate();
  const { user } = useContext(AuthContext);
  const [color, setColor] = useState(product.Product_Images[0]);
  const [options, setOptions] = useState([]);
  const [size, setSize] = useState({});
  const [err, setErr] = useState(false);
  const [status, setStatus] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  function handleChangeColor(item) {
    setColor(item);
    const url = `${process.env.REACT_APP_API_KEY}api/product_option/${item.id}/${color.product_id}`;
    setIsLoading(true);
    axios
      .get(url)
      .then((res) => {
        setOptions(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleChangeSize(item) {
    setSize(item);
  }

  function handleAddToCart(quantity) {
    if (user.toKen) {
      const Cart_Items = {
        quantity: quantity,
        product_options_id: size.id,
        product_images_id: color.id,
        product_id: product.id,
        user_id: user.id,
      };
      setIsLoading(true);
      axios
        .post(`${process.env.REACT_APP_API_KEY}api/cart/create`, Cart_Items, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + user.toKen,
          },
        })
        .then(async (res) => {
          setStatus(true);
          await setTimeout(() => {
            setStatus(false);
          }, 1000);
          refreshCart();
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      navigate("/login");
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    const buttonType = window.event.submitter.name;
    const form = e.target;
    const formData = new FormData(form);
    if (!color.id || !size.id) {
      setErr(true);
    } else {
      if (buttonType === "addCart") {
        handleAddToCart(formData.get("quantity"));
      } else {
        navigate("/checkout", {
          state: [
            {
              product_id: product.id,
              name: product.name,
              price: product.price,
              product_images_id: color.id,
              color: color.color,
              image: color.image,
              product_options_id: size.id,
              size: size.size,
              quantity: formData.get("quantity"),
            },
          ],
        });
      }
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2 className="sm:mt-8 mt-5 text-base text-gray-900">Màu sắc</h2>
        <div className="mt-3 flex select-none flex-wrap items-center gap-1">
          {product.Product_Images.map((item, index) => {
            return (
              <label key={item.id} className="cursor-pointer">
                <input
                  type="radio"
                  value={item.id}
                  name="color"
                  className="peer sr-only"
                  onChange={() => {
                    handleChangeColor(item);
                    setErr(false);
                  }}
                />
                <p className="capitalize peer-checked:bg-secondColor peer-checked:text-while10Color rounded-lg border border-black px-6 py-2 font-bold">
                  {item.color}
                </p>
              </label>
            );
          })}
        </div>
        {options && (
          <>
            <h2 className="sm:mt-8 mt-5 text-base text-gray-900">Size</h2>
            <div className="mt-3 flex select-none flex-wrap items-center gap-1">
              {options.map((item, index) => {
                return (
                  <label key={item.id} className="cursor-pointer">
                    <input
                      type="radio"
                      value={item.id}
                      name="size"
                      className="peer sr-only"
                      onChange={() => {
                        handleChangeSize(item);
                        setErr(false);
                      }}
                    />
                    <p className="capitalize peer-checked:bg-secondColor peer-checked:text-while10Color rounded-lg border border-black px-6 py-2 font-bold">
                      {item.size}
                    </p>
                  </label>
                );
              })}
            </div>
          </>
        )}
        {size.id && (
          <>
            <h2 className="mt-8 text-base text-gray-900 ">Số lượng</h2>
            <div className="mt-3 select-none flex items-center gap-4">
              <Counter key={Math.random()} limit={size.quantity} />
              <span>{`${size.quantity} sản phẩm có sẵn`}</span>
            </div>
          </>
        )}
        <div className="sm:mt-10 mt-6">
          {err && (
            <p className="mt-2 text-lg text-[#dc2626]">
              Vui lòng chọn size và màu sắc
            </p>
          )}
        </div>
        <div className=" flex gap-x-8 items-center  justify-between border-t border-b py-4 sm:flex-row sm:space-y-0">
          <button
            type="submit"
            name="addCart"
            className="py-3  rounded-md bg-secondColor text-while10Color duration-200 font-semibold hover:bg-primaryColor w-[50%]  "
          >
            Thêm vào giỏ hàng
          </button>
          <button
            type="submit"
            name="addOrder"
            className="py-3  rounded-md bg-secondColor text-while10Color duration-200 font-semibold hover:bg-primaryColor w-[50%]  "
          >
            Mua ngay
          </button>
        </div>
      </form>
      {status ? (
        <div
          className={`
    fixed top-0 left-0 bottom-0 right-0 z-[999]  w-full   p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full`}
        >
          <div className="rounded-lg relative p-3 z-[999] w-full max-w-md max-h-full bg-[rgba(0,0,0,0.6)] top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]">
            <div className="relative  p-4 rounded-lg">
              <div className="flex flex-col gap-3 items-center justify-center text-lg p-4">
                <span className="md:text-8xl sm:text-7xl text-5xl text-white">
                  <AiOutlineCheckCircle className="bg-green-600 rounded-[50%]" />
                </span>
                <h2 className="text-white sm:text-lg text-base">
                  Sản phẩm đã được thêm vào Giỏ hàng
                </h2>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      {isLoading && <Loading />}
    </>
  );
};

export default ProductOptions;
