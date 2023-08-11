// import { useState, useEffect } from "react";
// import { Blurhash } from "react-blurhash";

// const ImageComponent = ({ src }) => {
//   const [imageLoaded, setImageLoaded] = useState(false);
//   useEffect(() => {
//     const image = new Image();
//     image.onload = () => {
//       setImageLoaded(true);
//     };
//     image.src = src;
//   }, [src]);
//   return (
//     <>
//       <div className={`${imageLoaded ? "hidden" : "inline"}`}>
//         <Blurhash
//           hash="LEHV6nWB2yk8pyo0adR*.7kCMdnj"
//           width={400}
//           height={300}
//           resolutionX={32}
//           resolutionY={32}
//           punch={1}
//         />
//       </div>
//       <img
//         src={src}
//         alt="image"
//         className={`${!imageLoaded ? "hidden" : "inline"}`}
//       />
//     </>
//   );
// };

// export default ImageComponent;

import { useEffect, useState } from "react";

const ImageComponent = ({ src }) => {
  const [loaded, setLoaded] = useState(false);
  console.log("render image");
  useEffect(() => {
    const image = new Image();
    image.onload = () => {
      setLoaded(true);
    };
    image.src = src;
  }, [src]);
  return !loaded ? (
    <div className="animate-pulse h-[100px] w-[150px]"></div>
  ) : (
    <img src={src} />
  );
};

export default ImageComponent;
