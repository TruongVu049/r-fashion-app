import React from "react";

const CardSkeleton = () => {
  return (
    <div>
      <div
        role="status"
        className="bg-white max-w-sm p-3 rounded shadow animate-pulse "
      >
        <div className="flex items-center justify-center xl:h-48 lg:h-44 h-40 mb-4 bg-gray-200 rounded "></div>
        <div className="h-4 bg-gray-200 rounded-full  mb-2.5" />
        <div className="h-4 bg-gray-200 rounded-full  mb-2.5" />
        <div className="h-4 bg-gray-200 rounded-full " />
      </div>
    </div>
  );
};

export default CardSkeleton;
