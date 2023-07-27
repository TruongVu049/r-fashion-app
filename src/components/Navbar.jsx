import { useEffect, useState } from "react";

import { Link, NavLink } from "react-router-dom";

import Logo from "../assets/images/logo.png";
import { links } from "../constants";
import { FaBars, FaXmark } from "react-icons/fa6";

import SearchBar from "./SearchBar";
import Cart from "./Cart";
import User from "./User";

const Navbar = () => {
  const [isShow, setIsShow] = useState(false);

  function handleShow() {
    setIsShow(!isShow);
  }

  return (
    <header>
      <nav
        className={`shadow-lg
        bg-while10Color fixed z-[200] top-0  w-full duration-500 ease-linear delay-0 animate-animationFadeIn border-solid border-b border-[#ececec]
      }`}
      >
        <div
          className={`xl:container mx-auto lg:container sm:container 
      
      `}
        >
          <div className="flex sm:items-center justify-between items-center">
            <div className="py-6 px-3 mx-1">
              <NavLink to="/">
                <img
                  className="sm:h-10 sm:w-10 h-8 w-8"
                  src={Logo}
                  alt="logo"
                />
              </NavLink>
            </div>
            <ul className="md:flex hidden">
              {links.map(({ id, name, path }) => {
                return (
                  <li className="text-secondColor font-semibold " key={id}>
                    <NavLink
                      style={({ isActive, isPending }) => {
                        return {
                          color: isActive ? "#ff4545" : "",
                        };
                      }}
                      className=" py-6 px-3 mx-1  duration-300 relative 
                    after:content-[''] after:absolute after:left-0 after:bottom-[10px] after:h-[2.5px] after:ease-linear
                    after:w-full after:bg-primaryColor after:scale-x-0 after:duration-300 after:origin-bottom-left
                     hover:text-primaryColor hover:after:scale-x-[1]"
                      to={path}
                    >
                      {name}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
            <div className="flex items-center cursor-pointer">
              <SearchBar />

              <User />
              <Cart />
              <div
                onClick={handleShow}
                className="hover:text-primaryColor duration-300 py-6 px-3  mx-1 md:hidden"
              >
                <FaBars />
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div
        className={`z-[999] fixed top-0 right-0 h-[100vh] w-full  duration-300 delay-0 ease-linear ${
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
                    <NavLink
                      onClick={handleShow}
                      to={path}
                      style={({ isActive, isPending }) => {
                        return {
                          color: isActive ? "#ff4545" : "",
                        };
                      }}
                      className="block p-[22px] border-t-2 border-solid border-[#eeeeee] duration-300 hover:text-primaryColor"
                    >
                      {name}
                    </NavLink>
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
