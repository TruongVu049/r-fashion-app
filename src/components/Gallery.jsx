import React, { useState } from "react";

const Gallery = ({ urlImg }) => {
  const [activeShow, setActiveShow] = useState(urlImg[0]);

  return (
    <div className="lg:flex lg:items-start">
      <div className="lg:order-2 lg:ml-5">
        <div className="max-w-xl overflow-hidden rounded-lg">
          <img
            className="h-full w-full max-w-full object-cover"
            src={`${activeShow}`}
            alt="image"
          />
        </div>
      </div>
      <div className="mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0">
        <div className="flex flex-row items-start lg:flex-col">
          {urlImg.map((img, index) => {
            return (
              <button
                key={img + index}
                onClick={() => setActiveShow(img)}
                type="button"
                className={`${
                  img === activeShow && "border-primaryColor border-4"
                }
                flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-[#dee2e6] border-solid text-center`}
              >
                <img
                  className="h-full w-full object-cover"
                  src={`${img}`}
                  alt=""
                />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
