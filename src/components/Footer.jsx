import { BsInstagram, BsTwitter } from "react-icons/bs";
import { LiaYoutube } from "react-icons/lia";
import { policy } from "../constants";
const Footer = () => {
  return (
    <>
      <div className="w-full mx-auto">
        <div className="flex flex-wrap">
          {policy.map((item, index) => {
            return (
              <div
                key={item.id}
                className={`bg-secondColor text-while10Color md:flex-[1_1_25%] flex-[1_1_50%] text-center ${
                  index === policy.length - 1
                    ? "py-[24px]"
                    : "border-r  py-[24px]"
                } border-while10Color border-solid`}
              >
                <div>
                  <img
                    className="h-[30px] w-[30px] align-middle mx-auto"
                    src={item.url}
                    alt="image"
                  />
                </div>
                <h4 className="md:text-[18px] text-[14px] p-3 uppercase">
                  {item.name}
                </h4>
                <p className="md:text-[16px] text-[13px]">{item.title}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="xl:container mx-auto lg:container sm:container ">
        <div className="flex py-9 flex-wrap md:px-0 px-4 md:gap-y-0 gap-y-4">
          <div className="md:flex-[1_1_25%] flex-[1_1_50%] pr-6 ">
            <h4 className="font-bold text-[20px] text-secondColor mb-[20px]">
              Về TLA
            </h4>
            <p className="tracking-[1px] text-titleMColorr">
              Luôn đi theo tiêu chí giúp các nàng cảm thấy thoải mái và tự tin
              khi diện. Thật tuyệt vời nếu mỗi ngày đều xinh đẹp! TLA cảm ơn quý
              khách đã tin yêu sản phẩm. Chúc bạn có ngày mua sắm thật thoải
              mái.
            </p>
          </div>
          <div className="md:flex-[1_1_25%] flex-[1_1_50%] pr-6">
            <h4 className="font-bold text-[20px] text-secondColor mb-[20px]">
              Thông tin liên hệ
            </h4>
            <ul>
              <li className="text-titleMColor text-[15px] mb-[10px]">
                <strong>Địa chỉ: </strong>
                140 Lê Trọng Tấn, Tây Thạnh, Tân Phú, Thành phố Hồ Chí Minh,
                Việt Nam
              </li>
              <li className="text-titleMColor text-[15px] mb-[10px]">
                <strong>Điện thoại: </strong>090 789 3879
              </li>
              <li className="text-titleMColor text-[15px] mb-[10px]">
                <strong>THời gian làm việc: </strong>08h00 - 22h00
              </li>
              <li className="text-titleMColor text-[15px] mb-[10px]">
                <strong>Email: </strong>tla@gmail.com
              </li>
            </ul>
          </div>
          <div className="md:flex-[1_1_25%] flex-[1_1_50%] pr-6">
            <h4 className="font-bold text-[20px] text-secondColor mb-[20px]">
              Chính sách mua hàng
            </h4>
            <ul>
              <li className="text-titleMColor text-[15px] mb-[10px]">
                Đổi trả hàng lỗi trong vòng 7 ngày
              </li>
              <li className="text-titleMColor text-[15px] mb-[10px]">
                Ship COD toàn quốc
              </li>
              <li className="text-titleMColor text-[15px] mb-[10px]">
                Hỗ trợ 24/7 với các kênh chat, email &amp; phone
              </li>
            </ul>
          </div>
          <div className="md:flex-[1_1_25%] flex-[1_1_50%] pr-6">
            <h4 className="font-bold text-[20px] text-secondColor mb-[20px]">
              Kết nối với chúng tôi
            </h4>
            <div className="flex gap-x-[10px]">
              <div className=" group/item cursor-pointer hover:border-[#ff4545] duration-500 p-3 rounded-xl border-solid border-2 border-[#999999]">
                <BsInstagram className="group-hover/item:text-primaryColor text-xl duration-500" />
              </div>
              <div className=" group/item cursor-pointer hover:border-[#ff4545] duration-500 p-3 rounded-xl border-solid border-2 border-[#999999]">
                <LiaYoutube className="group-hover/item:text-primaryColor text-xl duration-500" />
              </div>
              <div className=" group/item cursor-pointer hover:border-[#ff4545] duration-500 p-3 rounded-xl border-solid border-2 border-[#999999]">
                <BsTwitter className="group-hover/item:text-primaryColor text-xl duration-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#e7e8e8] text-center">
        <div className="xl:container mx-auto lg:container sm:container">
          <p className="text-[15px] text-titleMColor p-5">© 2023 by VU.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
