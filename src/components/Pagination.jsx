import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const Pagination = ({ currentPage, params, data }) => {
  console.log("render pagination");
  return (
    <nav className="ml-auto">
      <ul className="flex items-center -space-x-px h-10 text-base">
        <li>
          <Link
            to={`/product
           ?page=${parseInt(currentPage) - 1}${params()}`.replace(/ /g, "")}
            className={
              parseInt(currentPage) - 1 < 1
                ? "pointer-events-none opacity-40  hover:text-white hover:bg-rose-500 flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg "
                : "hover:text-white hover:bg-rose-500 flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg "
            }
          >
            <span className="sr-only">Previous</span>
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 1 1 5l4 4"
              />
            </svg>
          </Link>
        </li>

        {Array(data.totalPage)
          .fill(0, 0)
          .map((item, index) => {
            return (
              <li key={item + index}>
                <Link
                  to={`/product
                  ?page=${index + 1}${params()}`.replace(/ /g, "")}
                  className={
                    index + 1 === parseInt(currentPage)
                      ? "text-white bg-rose-500 flex items-center justify-center px-4 h-10 leading-tight border border-gray-300 "
                      : "hover:text-white hover:bg-rose-500 flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300  "
                  }
                >
                  {index + 1}
                </Link>
              </li>
            );
          })}

        <li>
          <Link
            to={`/product
            ?page=${parseInt(currentPage) + 1}${params()}`.replace(/ /g, "")}
            className={
              parseInt(currentPage) + 1 > data.totalPage
                ? " pointer-events-none opacity-40 hover:text-white hover:bg-rose-500 flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg  "
                : "hover:text-white hover:bg-rose-500 flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg  "
            }
          >
            <span className="sr-only">Next</span>
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m1 9 4-4-4-4"
              />
            </svg>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
