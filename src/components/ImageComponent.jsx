import { useEffect, useState } from "react";

const ImageComponent = ({ src, height, cusClass }) => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const image = new Image();
    image.onload = () => {
      setLoaded(true);
    };
    image.src = src;
  }, [src]);
  return !loaded ? (
    <div role="status" className="p-3 rounded animate-pulse ">
      <div
        className={`flex items-center justify-center ${height} bg-gray-200 rounded `}
      ></div>
    </div>
  ) : (
    <img className={`${cusClass}`} src={src} />
  );
};

export default ImageComponent;
