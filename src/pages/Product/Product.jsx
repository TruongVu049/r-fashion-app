import { useState, useEffect } from "react";
import {
  Breadcrumb,
  Product,
  Filter,
  Sort,
  Pagination,
} from "../../components";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

const limit = 8;
const SanPham = () => {
  const [isShowFilter, setIsShowFilter] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [status, setStatus] = useState("");
  const [data, setData] = useState({
    products: [],
    totalPage: null,
    totalProduct: null,
  });
  const search = searchParams.get("search");
  const params = () => {
    const searchParam = search;
    const sortParam = searchParams.get("sort");
    const filterTypeParam = searchParams.get("filterType");
    const filterGenderParam = searchParams.get("filterGender");
    const priceMinParam = searchParams.get("priceMin");
    const priceMaxParam = searchParams.get("priceMax");
    return `${searchParam ? "&search=" + searchParam : ""}
    ${sortParam ? "&sort=" + sortParam : ""}
    ${filterTypeParam ? "&filterType=" + filterTypeParam : ""}
    ${filterGenderParam ? "&filterGender=" + filterGenderParam : ""}
    ${priceMinParam ? "&priceMin=" + priceMinParam : ""}
    ${priceMaxParam ? "&priceMax=" + priceMaxParam : ""}`;
  };

  function handleChangeSearch(values) {
    let updatedSearchParams = new URLSearchParams(searchParams.toString());
    values = Object.entries(values);
    values.forEach((item) => {
      updatedSearchParams.set(item[0], item[1]);
    });
    setSearchParams(updatedSearchParams.toString());
  }

  useEffect(() => {
    let ignore = false;
    const url = `${process.env.REACT_APP_API_KEY}api/products
    ?page=${searchParams.get("page") ?? 1}${params()}`.replace(/ /g, "");
    setStatus("loading");
    axios
      .get(url)
      .then((res) => {
        if (!ignore) {
          setData({
            products: res.data.products,
            totalProduct: res.data.totalProduct,
            totalPage: res.data.totalPage,
          });
          setStatus("success");
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        window.scrollTo(0, 0);
      });
    return () => (ignore = true);
  }, [searchParams]);

  return (
    <div>
      <Breadcrumb title={"tất cả sản phẩm"} namePage={"sản phẩm"} />
      <section className="bg-gray-100">
        <div className="xl:container mx-auto lg:container sm:container">
          {search && (
            <div className="gap-y-4 grid px-5 md:pt-0 pt-2">
              <div className="flex gap-4">
                <div className="rounded-lg   xl:flex-[1_1_25%] flex-[1_1_30%] md:block hidden"></div>
                <div className=" xl:flex-[1_1_75%] flex-[1_1_70%]">
                  <h4 className="lg:text-xl md:text-lg text-base">
                    Kết quả tìm kiếm cho từ khóa '
                    <strong className="text-red-500">{search}</strong>'
                  </h4>
                </div>
              </div>
            </div>
          )}
          <div className="gap-y-4 grid md:p-4 p-3">
            <div className="flex gap-4">
              <div className="rounded-lg bg-while10Color shadow-[0_0.0625rem_20px_0_rgba(0,0,0,.05)] p-5 xl:flex-[1_1_25%] flex-[1_1_30%] md:block hidden">
                <h2 className="uppercase bg-while10Color font-semibold text-xl">
                  bộ lộc tìm kiếm
                </h2>
              </div>
              <div className="rounded-lg bg-while10Color shadow-[0_0.0625rem_20px_0_rgba(0,0,0,.05)] p-5 xl:flex-[1_1_75%] flex-[1_1_70%]">
                <Sort
                  onchangeShowFilter={setIsShowFilter}
                  onChangeSearch={handleChangeSearch}
                />
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <Filter
                isShowFilter={isShowFilter}
                onchangeShowFilter={setIsShowFilter}
                onChangeSearch={handleChangeSearch}
              />
              <div className="xl:flex-[1_1_75%] flex-[1_1_70%]">
                <Product
                  productList={data.products}
                  status={status}
                  limit={limit}
                />
              </div>
            </div>
            <Pagination
              currentPage={searchParams.get("page") ?? 1}
              params={params}
              data={data}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SanPham;
