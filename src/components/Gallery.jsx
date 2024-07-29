import React, { useState } from "react";
import ImageComponent from "./ImageComponent";
const Gallery = ({ images }) => {
  const [activeShow, setActiveShow] = useState(images[0]);

  return (
    <div className="lg:flex lg:items-start">
      <div className="lg:order-2 lg:ml-5">
        <div className="max-w-xl overflow-hidden rounded-lg flex items-center justify-center">
          <ImageComponent
            src={activeShow.image}
            height={"h-96 w-96"}
            cusClass={"h-full w-full max-w-full object-cover"}
          />
        </div>
      </div>
      <div className="mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0">
        <div className="flex flex-row items-start lg:flex-col lg:gap-0 gap-4">
          {images.map((img, index) => {
            return (
              <button
                key={img.id}
                onClick={() => setActiveShow(img)}
                type="button"
                className={`${
                  img.id === activeShow.id && "border-primaryColor border-4"
                }
                flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-[#dee2e6] border-solid text-center`}
              >
                <img
                  className="h-full w-full object-cover"
                  src={`${img.image}`}
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
