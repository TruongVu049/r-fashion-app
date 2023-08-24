import { useState, useEffect } from "react";
import {
  Breadcrumb,
  Product,
  Filter,
  Sort,
  Pagination,
} from "../../components";
import axios from "axios";
import { useParams, useSearchParams } from "react-router-dom";

//

const SanPham = () => {
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState("");
  const [productList, setProductList] = useState([]);
  const [filter, setFilter] = useState({
    filter: {},
    sort: "",
  });

  useEffect(() => {
    let ignore = false;
    const filterParams = encodeURIComponent(JSON.stringify(filter));
    const url = `${
      process.env.REACT_APP_API_KEY
    }/api/product/filter/${filterParams}?search=${searchParams.get(
      "search"
    )}&page=${searchParams.get("page") ?? 0}`;
    console.log("url", url);
    setStatus("loading");
    axios
      .get(url)
      .then((res) => {
        if (!ignore) {
          setProductList(res.data);
          setStatus("success");
        }
      })
      .catch((err) => {
        console.log(err);
      });
    return () => (ignore = true);
  }, [filter, searchParams]);

  function handleSortChange(typeSort) {
    setFilter({
      ...filter,
      sort: typeSort,
    });
  }
  function handleFilterChange(filter) {
    setFilter({
      ...filter,
      filter: filter,
    });
  }

  console.log(productList);

  return (
    <div>
      <Breadcrumb title={"tất cả sản phẩm"} namePage={"sản phẩm"} />
      <section className="bg-[#f5f5f5]">
        <div className="xl:container mx-auto lg:container sm:container">
          <div className="gap-y-4 grid py-5 px-5">
            <div className="flex gap-4">
              <div className="rounded-lg bg-while10Color shadow-[0_0.0625rem_20px_0_rgba(0,0,0,.05)] p-5 flex-[1_1_30%] md:block hidden">
                <h2 className="uppercase bg-while10Color font-semibold text-xl">
                  bộ lộc tìm kiếm
                </h2>
              </div>
              <div className="rounded-lg bg-while10Color shadow-[0_0.0625rem_20px_0_rgba(0,0,0,.05)] p-5 flex-[1_1_70%]">
                <Sort onSortChange={handleSortChange} />
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <Filter
                searchParams={searchParams}
                onFilterChange={handleFilterChange}
              />
              <div className="flex-[1_1_70%]">
                <Product productList={productList} status={status} />
              </div>
            </div>
            <Pagination
              searchParam={searchParams.get("search")}
              pageParam={searchParams.get("page") ?? 0}
              totalProduct={productList.length && productList[0].total}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SanPham;
