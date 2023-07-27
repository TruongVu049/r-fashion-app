import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
const Pagination = ({ searchParam, pageParam, totalProduct }) => {
  console.log("render pagination");
  pageParam = parseInt(pageParam);
  let dividePage = Math.ceil(parseInt(totalProduct) / 6);
  let pages = Array(dividePage).fill(0, 0);
  //auto scroll top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [searchParam, pageParam]);
  return (
    <div>
      <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
        <div className="flex flex-1 justify-between sm:hidden">
          <Link
            to={`/sanpham?search=${searchParam}&page=${pageParam - 1}`}
            className={` ${
              pageParam == 0
                ? "pointer-events-none cursor-default opacity-20"
                : ""
            }
            relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-primaryColor hover:text-while10Color`}
          >
            Previous
          </Link>
          <Link
            to={`/sanpham?search=${searchParam}&page=${pageParam + 1}`}
            className={`${
              pageParam == pages.length - 1
                ? "pointer-events-none cursor-default opacity-20"
                : ""
            }
            relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-primaryColor hover:text-while10Color`}
          >
            Next
          </Link>
        </div>
        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700">
              Showing <span className="font-medium">{pageParam + 1}</span> to{" "}
              <span className="font-medium">{pages.length}</span> of{" "}
              <span className="font-medium">{totalProduct}</span> results
            </p>
          </div>
          <div>
            <nav
              className="isolate inline-flex -space-x-px rounded-md shadow-sm"
              aria-label="Pagination"
            >
              <Link
                to={`/sanpham?search=${searchParam}&page=${pageParam - 1}`}
                className={`${
                  pageParam == 0
                    ? "pointer-events-none cursor-default opacity-20"
                    : ""
                }
                relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-[#878b8e] hover:bg-primaryColor hover:text-while10Color focus:z-20 focus:outline-offset-0`}
              >
                <span className="sr-only">Previous</span>
                <AiOutlineDoubleLeft className="h-5 w-5" aria-hidden="true" />
              </Link>
              {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-[#878b8e] hover:bg-primaryColor hover:text-while10Color focus:outline-offset-0" */}
              {pages.map((page, index) => {
                return (
                  <Link
                    key={page + index}
                    className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-[#878b8e] hover:bg-primaryColor hover:text-while10Color focus:z-20 focus:outline-offset-0
                        ${
                          index == pageParam
                            ? "bg-primaryColor text-while10Color"
                            : ""
                        }
                        `}
                    to={`/sanpham?search=${searchParam}&page=${index}`}
                  >
                    {index + 1}
                  </Link>
                );
              })}
              <Link
                to={`/sanpham?search=${searchParam}&page=${pageParam + 1}`}
                className={`
                ${
                  pageParam == pages.length - 1
                    ? "pointer-events-none cursor-default opacity-20"
                    : ""
                }
                relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-[#878b8e] hover:bg-primaryColor hover:text-while10Color focus:z-20 focus:outline-offset-0`}
              >
                <span className="sr-only">Next</span>
                <AiOutlineDoubleRight className="h-5 w-5" aria-hidden="true" />
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
