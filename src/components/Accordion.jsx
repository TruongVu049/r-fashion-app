import { useState } from "react";
import Description from "./Description";
import Reviews from "./Reviews";
const Accordion = ({ productId, desc }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="lg:col-span-3">
      <div className="border-b border-gray-300">
        <div>
          <div className="flex gap-x-4">
            <button
              className={`${
                activeIndex == 0 && "text-primaryColor"
              } duration-200 hover:text-primaryColor`}
              onClick={() => setActiveIndex(0)}
            >
              Mô tả
            </button>
            <button
              className={`${
                activeIndex == 1 && "text-primaryColor"
              } duration-200 hover:text-primaryColor`}
              onClick={() => setActiveIndex(1)}
            >
              Đánh giá
            </button>
          </div>
        </div>
      </div>
      <div className="mt-6 flow-root sm:mt-12">
        {activeIndex == 0 ? (
          <Description desc={desc} />
        ) : (
          <Reviews productId={productId} />
        )}
      </div>
    </div>
  );
};

export default Accordion;
