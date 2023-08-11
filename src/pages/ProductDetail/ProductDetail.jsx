import { Link, json, useParams } from "react-router-dom";
import { useContext, useEffect, useMemo, useRef } from "react";
import {
  Breadcrumb,
  Notification,
  PopupModal,
  ProductOptions,
} from "../../components";
import { BsTruck } from "react-icons/bs";
import { BiTaskX } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import { AuthContext } from "../../context/AuthContext";
import {
  Accordion,
  ProductRelations,
  Gallery,
  Counter,
} from "../../components";
import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import axios from "axios";
import FormatPrice from "../../Helpers/FormatPrice";
import { useCartContext } from "../../context/CartContext";
const ProductDetail = () => {
  const notificationRef = useRef(null);
  const { isLogin } = useAuth();
  const [error, setError] = useState(false);
  const { productId } = useParams();
  const { user } = useContext(AuthContext);
  const { addCart } = useCartContext();
  const [product, setProduct] = useState({
    data: null,
    colors: [],
    sizes: [],
    options: null,
  });

  function removeDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
  }

  console.log("render productdetail");
  useEffect(() => {
    let ignore = false;
    axios
      .get(`http://localhost:5000/api/product/${productId}`)
      .then((res) => {
        if (!ignore) {
          console.log(res);
          const colors = res.data.options.map((item) => {
            return item.color;
          });
          const sizes = res.data.options.map((item) => {
            return item.size;
          });
          setProduct({
            data: res.data["data"],
            colors: removeDuplicates(colors),
            sizes: removeDuplicates(sizes),
            options: res.data["options"],
          });
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        window.scrollTo(0, 0);
      });
    return () => {
      ignore = true;
    };
  }, [productId]);

  function handleSubmit(e) {
    e.preventDefault();
    if (isLogin()) {
      const form = e.target;
      const formData = new FormData(form);
      const formJson = Object.fromEntries(formData.entries());
      // const optionId = product.options.find((option) => {
      //   if (option.color === formJson.color && option.size === formJson.size)
      //     return option.product_option_id;
      // });
      addCart(productId, formJson);
    } else {
      window.location.href = "/login";
    }
  }

  // if (res.status === 200) {
  //   notificationRef.current.show(
  //     true,
  //     "Sản phẩm đã được thêm vào Giỏ hàng"
  //   );
  // } else {
  //   notificationRef.current.show(
  //     false,

  //     "Sản phẩm chưa được thêm vào Giỏ hàng"
  //   );
  // }

  console.log("render productDetail");

  return (
    <div>
      <Breadcrumb title={"Thông tin sản phẩm"} namePage={"sản phẩm"} />
      <div>
        {product.data && (
          <section className="py-12 sm:py-16">
            <div className="container mx-auto px-4">
              <nav className="flex">
                <ol role="list" className="flex items-center">
                  <li className="text-left">
                    <div className="-m-1">
                      <Link
                        to="/"
                        className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"
                      >
                        {" "}
                        Trang Chủ{" "}
                      </Link>
                    </div>
                  </li>
                  <li className="text-left">
                    <div className="flex items-center">
                      <span className="mx-2 text-gray-400">/</span>
                      <div className="-m-1">
                        <Link
                          to="/sanpham"
                          className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"
                        >
                          {" "}
                          Sản Phẩm{" "}
                        </Link>
                      </div>
                    </div>
                  </li>
                  <li className="text-left">
                    <div className="flex items-center">
                      <span className="mx-2 text-gray-400">/</span>
                      <div className="-m-1">
                        <Link
                          to="#"
                          className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"
                          aria-current="page"
                        >
                          {" "}
                          {product.data.cat_id}{" "}
                        </Link>
                      </div>
                    </div>
                  </li>
                </ol>
              </nav>
              <div className="lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16">
                <div className="lg:col-span-3 lg:row-end-1">
                  <Gallery urlImg={product.data.images.split("@")} />
                </div>
                <div className="lg:col-span-2 lg:row-span-2 lg:row-end-2">
                  <h1 className="sm: text-2xl font-bold text-gray-900 sm:text-3xl">
                    {product.data.product_name}
                  </h1>
                  <div className="mt-5 flex items-center">
                    <div className="flex items-center">
                      <AiFillStar className="block h-4 w-4 align-middle text-yellow-500" />
                      <AiFillStar className="block h-4 w-4 align-middle text-yellow-500" />
                      <AiFillStar className="block h-4 w-4 align-middle text-yellow-500" />
                      <AiFillStar className="block h-4 w-4 align-middle text-yellow-500" />
                      <AiFillStar className="block h-4 w-4 align-middle text-yellow-500" />
                    </div>
                    <p className="ml-2 text-sm font-medium text-gray-500">
                      {product.data.views}
                    </p>
                  </div>
                  <div>
                    <span className="pt-[10px] text-primaryColor sm:text-3xl text-xl font-semibold">
                      <strong className="font-semibold">
                        {FormatPrice(product.data.price)}
                      </strong>{" "}
                    </span>
                  </div>
                  <form onSubmit={handleSubmit}>
                    <ProductOptions
                      listColor={product.colors}
                      listSize={product.sizes}
                      options={product.options}
                    />
                    <div className="mt-10">
                      {error && (
                        <p className="mt-2 text-lg text-[#dc2626]">
                          Vui lòng chọn size và màu sắc
                        </p>
                      )}
                    </div>
                    <div className=" flex gap-x-8 items-center  justify-between border-t border-b py-4 sm:flex-row sm:space-y-0">
                      <button
                        type="submit"
                        className="py-3  rounded-md bg-secondColor text-while10Color duration-200 font-semibold hover:bg-primaryColor w-[50%]  "
                      >
                        Thêm vào giỏ hàng
                      </button>
                      <button className="py-3  rounded-md bg-secondColor text-while10Color duration-200 font-semibold hover:bg-primaryColor w-[50%]  ">
                        Mua ngay
                      </button>
                    </div>
                  </form>

                  <ul className="mt-8 space-y-2">
                    <li className="flex gap-x-3 items-center text-left text-sm font-medium text-gray-600">
                      <BsTruck />
                      Miễn phí vận chuyển
                    </li>
                    <li className="flex gap-x-3 items-center text-left text-sm font-medium text-gray-600">
                      <BiTaskX />
                      Đổi trả bất cứ lúc nào
                    </li>
                  </ul>
                </div>
                <Accordion />
              </div>
            </div>
          </section>
        )}
      </div>
      {/* <ProductRelations
        title={"Có thể bạn sẻ thích"}
        url={
          product.data &&
          `brand/${product.data.brand}?productId=${product.data.product_id}`
        }
      />
      <ProductRelations
        title={"Sản phẩm liên quan"}
        url={
          product.data &&
          `category/${product.data.cat_id}?productId=${product.data.product_id}`
        }
      /> */}
      {/* <Notification ref={notificationRef} /> */}
    </div>
  );
};

export default ProductDetail;
