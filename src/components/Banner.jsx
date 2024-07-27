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
const deals = [
  {
    id: 1,
    title: "Nón",
    content: "Giảm giá 20%",
    href: "/product",
    img: ImgQC1,
  },
  {
    id: 2,
    title: "Áo",
    content: "Giảm giá 20%",
    href: "/product",
    img: ImgQC3,
  },
  {
    id: 2,
    title: "Quần",
    content: "Giảm giá 20%",
    href: "/product",
    img: ImgQC2,
  },
];

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
        className="mySwiper cursor-pointer mt-[73px]  "
      >
        {imgBanner.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <ImageComponent
                src={item}
                height={"lg:h-80 md:h-72 sm:h-64 h-52  z-0"}
                cusClass={""}
                alt="Banner Image"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-10 gap-4 md:my-10 sm:my-6 my-4">
          {deals?.map((item) => (
            <div
              key={item.id}
              className="relative rounded-2xl overflow-hidden "
            >
              <ImageComponent
                src={item.img}
                height={"sm:h-52 h-80 z-0"}
                cusClass={""}
                alt="Banner Image"
              />
              <div className="absolute top-[50%] translate-y-[-50%] left-0 pl-8">
                <h5 className="lg:text-lg text-base font-semibold opacity-70 ">
                  {item.title}
                </h5>
                <h3 className="lg:text-2xl text-xl py-2 font-semibold ">
                  {item.content}
                </h3>
                <button>
                  <Link
                    className="bg-primaryColor text-while10Color duration-200 rounded-lg hover:bg-secondColor lg:text-lg md:text-base text-sm  py-3 px-6"
                    to={item.href}
                  >
                    Mua Ngay
                  </Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
