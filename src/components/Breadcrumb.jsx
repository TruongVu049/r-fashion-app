import { NavLink } from "react-router-dom";

const Breadcrumb = ({ title, namePage }) => {
  return (
    <section>
      <div className="bg-[#e8e8e8] sm:py-[54px] py-10 text-center text-secondColor mt-[89px]">
        <h2 className="sm:text-3xl text-2xl  leading-7 font-semibold uppercase">
          {title}
        </h2>
        <ul className="flex justify-center">
          <li
            className="relative  
          after:absolute after:content-[''] after:h-[20px] after:w-[2px] after:top-[10px] after:right-0 after:bg-while05Color after:rotate-12"
          >
            <NavLink
              className="text-[15px] leading-5 to-while05Color font-semibold p-[10px] hover:text-primaryColor duration-200"
              to="/"
            >
              Trang Chủ
            </NavLink>
          </li>
          <li>
            <NavLink className="capitalize text-[15px] leading-5 to-while05Color font-semibold p-[10px] hover:text-primaryColor duration-200">
              {namePage}
            </NavLink>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Breadcrumb;
