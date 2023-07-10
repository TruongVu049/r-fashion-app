import { useState } from "react";

import { Link } from "react-router-dom";

import Logo from "../assets/images/logo.png";
import { links } from "../constants";
import { FaBars, FaXmark, FaUserLarge } from "react-icons/fa6";
import { AiOutlineSearch } from "react-icons/ai";
import { BsCart2 } from "react-icons/bs";
const Navbar = () => {
  const [isShow, setIsShow] = useState(false);

  function handleShow() {
    setIsShow(!isShow);
  }
  return (
    <header>
      <nav className="xl:container mx-auto lg:container sm:container ">
        <div className="flex sm:items-center justify-between items-center">
          <div className="py-6 px-3 mx-1">
            <img className="sm:h-10 sm:w-10 h-6 w-6" src={Logo} alt="logo" />
          </div>
          <ul className="md:flex hidden">
            {links.map(({ id, name, path }) => {
              return (
                <li className="text-secondColor font-semibold " key={id}>
                  <Link
                    className=" py-6 px-3 mx-1  duration-300 relative 
                    after:content-[''] after:absolute after:left-0 after:bottom-[10px] after:h-[2.5px] after:ease-linear
                    after:w-full after:bg-primaryColor after:scale-x-0 after:duration-300 after:origin-bottom-left
                     hover:text-primaryColor hover:after:scale-x-[1]"
                    to={path}
                  >
                    {name}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="flex items-center cursor-pointer">
            <div className="hover:text-primaryColor duration-300 py-6 px-3 mx-1 font-semibold">
              <AiOutlineSearch className="text-[20px]" />
            </div>
            <div className="hover:text-primaryColor duration-300 py-6 px-3  mx-1">
              <FaUserLarge className="text-[20px]" />
            </div>
            <div className="hover:text-primaryColor duration-300 py-6 px-3  mx-1">
              <BsCart2 className="text-[20px]" />
            </div>
            <div
              onClick={handleShow}
              className="hover:text-primaryColor duration-300 py-6 px-3  mx-1"
            >
              <FaBars className="md:hidden " />
            </div>
          </div>
        </div>
      </nav>
      <div
        className={`fixed top-0 right-0 h-[100vh] w-full  duration-300 delay-0 ease-linear ${
          isShow ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="absolute w-full h-[100vh] inset-[0] opacity-60 bg-[#212121]"></div>
        <div
          className={`
          w-[350px] h-full bg-while10Color relative 
          ease-linear delay-0 duration-[250ms] ml-auto p-[20px] text-center flex flex-col overflow-auto

          shadow-[-1px_0px_20px_-5px_#aaa]

          ${isShow ? "translate-x-[0]" : "translate-x-[100%]"}
          `}
        >
          <div className="pb-[40px]">
            <FaXmark
              onClick={handleShow}
              className="float-right m-2 cursor-pointer text-[20px] hover:text-primaryColor hover:duration-400"
            />
          </div>
          <div className="text-left font-semibold capitalize m-[-20px]">
            <ul className=" clear-both">
              {links.map(({ id, name, path }) => {
                return (
                  <li key={id}>
                    <Link
                      to={path}
                      className="block p-[22px] border-t-2 border-solid border-[#eeeeee] duration-300 hover:text-primaryColor"
                    >
                      {name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
