import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { Breadcrumb } from "../../components";
import { BsTruck } from "react-icons/bs";
import { BiTaskX } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import { Accordion, ProductRelations, Gallery } from "../../components";
import { useState } from "react";
import axios from "axios";
const ProductDetail = () => {
  const [error, setError] = useState(false);
  const { productId } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    let ignore = false;
    axios
      .get(`http://localhost:5000/api/product/${productId}`)
      .then((res) => {
        if (!ignore) {
          setProduct(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    return () => {
      ignore = true;
    };
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    // const form = e.target;
    // const formData = new FormData(form);
    // const formJson = Object.fromEntries(formData.entries());
    // if (Object.keys(formJson).length == 0) {
    //   setError(true);
    // } else {
    //   setError(false);
    //   alert(JSON.stringify(formJson));
    // }
  }
  useEffect(() => {
    console.log("useEffect");
    window.scrollTo(0, 0);
  }, [productId]);

  return (
    <div>
      <Breadcrumb title={"Thông tin sản phẩm"} namePage={"sản phẩm"} />
      <div>
        {product.length && (
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
                          {product[0].cat_id}{" "}
                        </Link>
                      </div>
                    </div>
                  </li>
                </ol>
              </nav>
              <div className="lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16">
                <div className="lg:col-span-3 lg:row-end-1">
                  <Gallery urlImg={product[0].images.split("@")} />
                </div>
                <div className="lg:col-span-2 lg:row-span-2 lg:row-end-2">
                  <h1 className="sm: text-2xl font-bold text-gray-900 sm:text-3xl">
                    {product[0].product_name}
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
                      1,209 Reviews
                    </p>
                  </div>
                  <div>
                    <span className="pt-[10px] text-primaryColor sm:text-3xl text-xl font-semibold">
                      <strong className="font-semibold">
                        {(function format(x) {
                          var parts = x.toString().split(".");
                          parts[0] = parts[0].replace(
                            /\B(?=(\d{3})+(?!\d))/g,
                            "."
                          );
                          return parts.join(",");
                        })(product[0].price)}
                      </strong>{" "}
                      VNĐ
                    </span>
                  </div>
                  <form onSubmit={handleSubmit}>
                    <h2 className="mt-8 text-base text-gray-900 ">Size</h2>
                    <div className="mt-3 flex select-none flex-wrap items-center gap-1">
                      {product[0].sizes.split("@").map((item, index) => {
                        return (
                          <label key={item + index} className="cursor-pointer">
                            <input
                              type="radio"
                              name="size"
                              defaultValue={item}
                              className="peer sr-only"
                              defaultChecked=""
                            />
                            <p className="capitalize peer-checked:bg-secondColor peer-checked:text-while10Color rounded-lg border border-black px-6 py-2 font-bold">
                              {item}
                            </p>
                          </label>
                        );
                      })}
                    </div>
                    <h2 className="mt-8 text-base text-gray-900">
                      {"Màu Sắc"}
                    </h2>
                    <div className="mt-3 flex select-none flex-wrap items-center gap-1">
                      {product[0].colors.split("@").map((item, index) => {
                        return (
                          <label className="cursor-pointer">
                            <input
                              type="radio"
                              name="color"
                              defaultValue={item}
                              className="peer sr-only"
                            />
                            <p className="capitalize peer-checked:bg-secondColor peer-checked:text-while10Color rounded-lg border border-black px-6 py-2 font-bold">
                              {item}
                            </p>
                          </label>
                        );
                      })}
                    </div>
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
        type={product && `name/${product[0].TH_ID}/${product[0].SP_ID}`}
      />
      <ProductRelations
        title={"Sản phẩm liên quan"}
        type={product && `type/${product[0].LOAI_ID}/${product[0].SP_ID}`}
      /> */}
    </div>
  );
};

export default ProductDetail;
