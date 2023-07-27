// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { bannerImg } from "../constants";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../index.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

let imgs = bannerImg;
export default function Banner() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper cursor-pointer mt-[89px]"
      >
        {imgs.map(({ id, url }, index) => {
          return (
            <SwiperSlide key={id}>
              <img
                className={`animate-animationFadeLeft z-0 `}
                src={url}
                alt="Banner Image"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 my-20">
          <div className="relative rounded-2xl overflow-hidden">
            <img
              className=""
              src="https://truongvu049.github.io/n2-fashion/assets/image/banner/img_1.webp"
            />
            <div className="absolute top-[50%] translate-y-[-50%] left-0 pl-8">
              <h5 className="lg:text-xl text-xl font-semibold opacity-70 ">
                Nón
              </h5>
              <h3 className="lg:text-3xl text-3xl py-2 font-semibold ">
                Giảm giá 20%
              </h3>
              <button>
                <Link
                  className="bg-primaryColor text-while10Color duration-200 rounded-lg hover:bg-secondColor text-lg font-semibold py-3 px-6"
                  to="/sanpham"
                >
                  Mua Ngay
                </Link>
              </button>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden">
            <img
              className=""
              src="https://truongvu049.github.io/n2-fashion/assets/image/banner/img_2.webp"
            />
            <div className="absolute top-[50%] translate-y-[-50%] left-0 pl-8">
              <h5 className="lg:text-xl text-xl font-semibold opacity-70 ">
                Nón
              </h5>
              <h3 className="lg:text-3xl text-3xl py-2 font-semibold ">
                Giảm giá 20%
              </h3>
              <button>
                <Link
                  className="bg-primaryColor text-while10Color duration-200 rounded-lg hover:bg-secondColor text-lg font-semibold py-3 px-6"
                  to="/sanpham"
                >
                  Mua Ngay
                </Link>
              </button>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden">
            <img
              className=""
              src="https://truongvu049.github.io/n2-fashion/assets/image/banner/img_3.webp"
            />
            <div className="absolute top-[50%] translate-y-[-50%] left-0 pl-8">
              <h5 className="lg:text-xl text-xl font-semibold opacity-70 ">
                Nón
              </h5>
              <h3 className="lg:text-3xl text-3xl py-2 font-semibold ">
                Giảm giá 20%
              </h3>
              <button>
                <Link
                  className="bg-primaryColor text-while10Color duration-200 rounded-lg hover:bg-secondColor text-lg font-semibold py-3 px-6"
                  to="/sanpham"
                >
                  Mua Ngay
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
