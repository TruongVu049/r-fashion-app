import React from "react";

const CardSkeleton = ({ height }) => {
  return (
    <div>
      <div
        role="status"
        className="bg-white max-w-sm rounded shadow animate-pulse "
      >
        <div
          className={`${
            height ? height : "xl:h-56 lg:h-44 h-40"
          } flex items-center justify-center  mb-4 bg-gray-200 rounded`}
        ></div>
        <div className="px-3 pb-3">
          <div className="h-4 bg-gray-200 rounded-full  mb-2.5" />
          <div className="h-4 bg-gray-200 rounded-full  mb-2.5" />
          <div className="h-4 bg-gray-200 rounded-full " />
        </div>
      </div>
    </div>
  );
};

export default CardSkeleton;
