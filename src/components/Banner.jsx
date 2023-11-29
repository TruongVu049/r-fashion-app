// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../index.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import ImageComponent from "./ImageComponent";
import Banner1 from "../assets/images/banner_bg-4.webp";
import Banner2 from "../assets/images/banner_bg-5.webp";
import Banner3 from "../assets/images/banner_bg-6.webp";
import ImgQC1 from "../assets/images/img_1.webp";
import ImgQC3 from "../assets/images/img_2.webp";
import ImgQC2 from "../assets/images/img_3.webp";

let imgBanner = [Banner1, Banner2, Banner3];
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
        className="mySwiper cursor-pointer mt-[89px]  "
      >
        {imgBanner.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <ImageComponent
                src={item}
                height={
                  "lg:h-80 md:h-72 sm:h-64 h-52 animate-animationFadeLeft z-0"
                }
                cusClass={""}
                alt="Banner Image"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 my-20">
          <div className="relative rounded-2xl overflow-hidden ">
            <ImageComponent
              src={ImgQC1}
              height={" sm:h-52 h-80 animate-animationFadeLeft z-0"}
              cusClass={""}
              alt="Banner Image"
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
                  to="/product"
                >
                  Mua Ngay
                </Link>
              </button>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden ">
            <ImageComponent
              src={ImgQC2}
              height={" sm:h-52 h-80 animate-animationFadeLeft z-0"}
              cusClass={""}
              alt="Banner Image"
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
                  to="/product"
                >
                  Mua Ngay
                </Link>
              </button>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden">
            <ImageComponent
              src={ImgQC3}
              height={"sm:h-52 h-80 animate-animationFadeLeft z-0"}
              cusClass={""}
              alt="Banner Image"
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
                  to="/product"
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
