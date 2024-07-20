import React, { useState } from "react";
import logo from "../assets/logo.png";
import menu from "../assets/menu.png";
import xmark from "../assets/x-mark.png";
import { Link, NavLink } from "react-router-dom";

const NavigationBar = () => {
  const [menuBtn, setMenuBtn] = useState(true);

  return (
    <>
      <div className=" bg-grey-10 ">
        <div className="flex items-center justify-between h-[6.4rem] w-11/12 mx-auto">
          <div className="flex items-center">
            <img src={logo} alt="Estatein Logo" className="w-[3rem]" />
            <Link
              to="/"
              className="text-white100 text-2xl font-semibold mx-[0.8rem]"
            >
              Estatein
            </Link>
          </div>
          <div className="hidden lg:block">
            <ul className="flex">
              <li>
                <NavLink
                  to="/"
                  className="text-white100 text-2xl  px-[2rem] py-[1.4rem]"
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/about"
                  className="text-white100 text-2xl  px-[2rem] py-[1.4rem]"
                >
                  About Us
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/properties"
                  className="text-white100 text-2xl px-[2rem] py-[1.4rem]"
                >
                  Properties
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/services"
                  className="text-white100 text-2xl px-[2rem] py-[1.4rem]"
                >
                  Services
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="hidden lg:block">
            <button className="bg-grey-8 px-[2rem] py-[1.4rem] rounded-xl border-solid border-[1px] border-grey-15 hover:bg-grey-10 hover:border-grey-30 ">
              <Link to="/contact" className="text-white100 text-2xl ">
                Contact Us
              </Link>
            </button>
          </div>
          <div className="block lg:hidden">
            {menuBtn ? (
              <img
                onClick={() => {
                  setMenuBtn(false);
                }}
                src={menu}
                alt="menu"
                className="cursor-pointer"
              />
            ) : (
              <img
                onClick={() => {
                  setMenuBtn(true);
                }}
                src={xmark}
                alt="menu"
                className="cursor-pointer"
              />
            )}
          </div>
        </div>
      </div>
      <div className=" block lg:hidden bg-grey-10">
        {!menuBtn && (
          <ul className="mx-10">
            <Link to="/">
              <li className="py-10 hover:bg-grey-15 pl-5 text-white100 text-2xl">
                Home
              </li>
            </Link>

            <hr />

            <Link to="/about">
              <li className="py-10 hover:bg-grey-15 pl-5 text-white100 text-2xl ">
                About Us
              </li>
            </Link>
            <hr />
            <Link to="/properties">
              <li className="py-10 hover:bg-grey-15 pl-5 text-white100 text-2xl">
                Properties
              </li>
            </Link>
            <hr />

            <Link to="/services">
              <li className="py-10 hover:bg-grey-15 pl-5 text-white100 text-2xl">
                Services
              </li>
            </Link>
            <hr />

            <button className="py-10 pl-5 font-bold">
              <Link to="/contact" className="text-white100 text-2xl ">
                Contact Us
              </Link>
            </button>
          </ul>
        )}
      </div>
    </>
  );
};

export default NavigationBar;
