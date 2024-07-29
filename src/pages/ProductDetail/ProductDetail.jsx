import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { ProductOptions, RecommendPD } from "../../components";
import { BsTruck } from "react-icons/bs";
import { BiTaskX } from "react-icons/bi";
import { BiSolidStar, BiSolidStarHalf, BiStar } from "react-icons/bi";
import { Gallery, Reviews } from "../../components";
import { useState } from "react";
import axios from "axios";
import FormatPrice from "../../Helpers/FormatPrice";
import { Helmet } from "react-helmet";
const ProductDetail = () => {
  const { productId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    let ignore = false;
    const url = `${process.env.REACT_APP_API_KEY}api/product/${productId}`;
    setIsLoading(true);
    axios
      .get(url)
      .then((res) => {
        if (!ignore) {
          setProduct({ ...res.data.product, avgStar: res.data.avgStar });
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
    return () => {
      ignore = true;
    };
  }, [productId]);
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{product?.name ?? "Sản phẩm"}</title>
        <meta
          name="description"
          content={product?.desct ?? "FAF - Thời trang nam nữ"}
        />
      </Helmet>
      <div className="my-10 min-h-screen">
        {product.id && (
          <section className="pt-12 pb-8  sm:py-16">
            <div className="container mx-auto px-4">
              <nav className="flex">
                {isLoading ? (
                  <div className="max-w-xl overflow-hidden rounded-lg animate-pulse">
                    <div className="h-10 w-36 flex items-center justify-center  mb-4 bg-gray-200 rounded "></div>
                  </div>
                ) : (
                  <ol className="flex items-center">
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
                            {product.category_id}{" "}
                          </Link>
                        </div>
                      </div>
                    </li>
                  </ol>
                )}
              </nav>
              <div className="lg:col-gap-12 xl:col-gap-16 sm:mt-8 mt-4 grid grid-cols-1 sm:gap-8 gap-6 lg:mt-12 lg:grid-cols-5 lg:gap-16">
                <div className="lg:col-span-3 lg:row-end-1">
                  {isLoading ? (
                    <div className="lg:flex lg:items-start">
                      <div className="lg:order-2 lg:ml-5">
                        <div className="sm:h-[567px] sm:w-[567px] h-[522px] w-[522px] overflow-hidden rounded-lg animate-pulse">
                          <div className="w-full h-full flex items-center justify-center  mb-4 bg-gray-200 rounded "></div>
                        </div>
                      </div>
                      <div className="mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0">
                        <div className="flex flex-row items-start lg:flex-col lg:gap-0 gap-4 animate-pulse">
                          <div className="xl:h-[73px] xl:w-[73px] flex items-center justify-center mb-4 bg-gray-200 rounded "></div>
                          <div className="xl:h-[73px] xl:w-[73px] flex items-center justify-center mb-4 bg-gray-200 rounded "></div>
                          <div className="xl:h-[73px] xl:w-[73px] flex items-center justify-center mb-4 bg-gray-200 rounded "></div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Gallery images={product.Product_Images} />
                  )}
                </div>
                <div className="lg:col-span-2 lg:row-span-2 lg:row-end-2">
                  {isLoading ? (
                    <>
                      <div className="animate-pulse">
                        <div className="xl:h-[100px] w-full flex items-center justify-center mb-4 bg-gray-200 rounded "></div>
                      </div>
                      <div className="animate-pulse">
                        <div className="h-20  flex items-center justify-center mb-4 bg-gray-200 rounded "></div>
                      </div>
                      <div className="animate-pulse">
                        <div className="h-20  flex items-center justify-center mb-4 bg-gray-200 rounded "></div>
                      </div>

                      <ul className="mt-8 space-y-2">
                        <div className="animate-pulse">
                          <div className="h-20  flex items-center justify-center mb-4 bg-gray-200 rounded "></div>
                        </div>
                      </ul>
                    </>
                  ) : (
                    <>
                      <h1 className="sm: text-2xl font-bold text-gray-900 sm:text-3xl">
                        {product.name}
                      </h1>
                      <div className="sm:mt-5 mt-3 flex items-center">
                        <div className="flex items-center">
                          {product &&
                            [...Array(5)].map((item, index) => {
                              if (product.avgStar >= index + 1) {
                                return (
                                  <BiSolidStar
                                    key={index}
                                    className="block h-4 w-4 align-middle text-yellow-500"
                                  />
                                );
                                // index = 3, product.avgstar = 2.4
                                // > 0 <= 0.5
                                // > 0.5
                              } else if (
                                product.avgStar < index + 1 &&
                                Math.ceil(product.avgStar) === index + 1
                              ) {
                                return (
                                  <BiSolidStarHalf className="block h-4 w-4 align-middle text-yellow-500" />
                                );
                              } else {
                                return (
                                  <BiStar className="block h-4 w-4 align-middle text-yellow-500" />
                                );
                              }
                            })}
                        </div>
                        <p className="ml-2 text-sm font-medium text-gray-500"></p>
                      </div>
                      <div>
                        <span className="pt-[10px] text-primaryColor sm:text-3xl text-xl font-semibold">
                          <strong className="font-semibold">
                            {FormatPrice(product.price)}
                          </strong>{" "}
                        </span>
                      </div>
                      <ProductOptions product={product} />

                      <ul className="sm:mt-8 mt-5 space-y-2">
                        <li className="flex gap-x-3 items-center text-left text-sm font-medium text-gray-600">
                          <BsTruck />
                          Miễn phí vận chuyển
                        </li>
                        <li className="flex gap-x-3 items-center text-left text-sm font-medium text-gray-600">
                          <BiTaskX />
                          Đổi trả bất cứ lúc nào
                        </li>
                      </ul>
                    </>
                  )}
                </div>
                <div className="lg:col-span-3 product-ratings">
                  {isLoading ? (
                    <div className="animate-pulse">
                      <div className="xl:h-[100px]  flex items-center justify-center mb-4 bg-gray-200 rounded "></div>
                    </div>
                  ) : (
                    <>
                      <h3 className="bg-gray-100 p-2 text-gray-900 md:text-md text-base font-semibold">
                        MÔ TẢ SẢN PHẨM
                      </h3>
                      <p className="text-base text-gray-700 pl-2 sm:my-6 my-4">
                        {product.desct}
                      </p>
                      <h3 className="bg-gray-100 p-2 text-gray-900 md:text-md text-base font-semibold ">
                        ĐÁNH GIÁ SẢN PHẨM
                      </h3>
                      <section className=" bg-white ">
                        <Reviews productId={productId} />
                      </section>
                    </>
                  )}
                </div>
              </div>
              <RecommendPD category_id={product?.category_id} />
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
