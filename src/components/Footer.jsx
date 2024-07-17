import React from "react";
import FooterDesignT from "../assets/FooterDesignT.png";
import FooterDesignB from "../assets/FooterDesignB.png";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import mail from "../assets/mail.png";
import send from "../assets/send.png";
import fb from "../assets/fb.png";
import insta from "../assets/insta.png";
import x from "../assets/x.png";
import yt from "../assets/yt.png";
const Footer = () => {
  return (
    <div>
      <div className="flex flex-col relative mt-20 overflow-hidden pb-10 xl:mt-28">
        <img
          src={FooterDesignT}
          alt=""
          className="top-0 left-0 absolute opacity-50"
        />
        <div className=" grid px-10 lg:grid-cols-[3fr_1fr]">
          <div className="z-20 ">
            <h1 className="text-5xl font-semibold mt-20 mb-10 leading-[4rem]">
              Start Your Real Estate Journey Today
            </h1>
            <p className="text-2xl text-grey-60 font-medium leading-[3rem]">
              Your dream property is just a click away. Whether you're looking
              for a new home, a strategic investment, or expert real estate
              advice, Estatein is here to assist you every step of the way. Take
              the first step towards your real estate goals and explore our
              available properties or get in touch with our team for
              personalized assistance.
            </p>
          </div>
          <div className="z-20 lg:flex lg:justify-center lg:items-center grid mb-20">
            <button className=" text-2xl lg:px-5 bg-purple-60  py-[1rem] mt-20 mx-8 rounded-2xl border-solid border-[1px] border-purple-70 hover:bg-purple-70 hover:border-purple-60 ">
              Explore Properties
            </button>
          </div>
        </div>
        <img
          src={FooterDesignB}
          className=" bottom-0 right-0 absolute opacity-50"
          alt=""
        />
      </div>
      <div className="grid grid-cols-2 grid-rows-[1fr_auto_auto_auto] mt-20 pb-20 lg:grid-cols-[500px_1fr_1fr_1fr_1fr_1fr] lg:grid-rows-1">
        <div className="mx-10 col-start-1 col-end-3 row-start-1 row-end-2 mb-20 lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-2 lg:ml-20">
          <div className="flex items-center mb-10">
            <img src={logo} alt="Estatein Logo" className="w-[3rem]" />
            <Link
              to="/"
              className="text-white100 text-2xl font-semibold mx-[0.8rem]"
            >
              Estatein
            </Link>
          </div>
          <div className="bg-grey-8 border-solid border-[1px] border-grey-15 flex  rounded-xl pt-5 pb-5 justify-between">
            <div className="flex items-center ">
              <img src={mail} alt="" className="mr-5 ml-5 h-7 " />
              <input
                type="text"
                placeholder="Enter Your Email"
                className="bg-grey-8 text-2xl outline-none"
              />
            </div>
            <img src={send} alt="" className="mr-5 h-7" />
          </div>
        </div>
        <div
          className="col-start-1 col-end-2 row-start-2 row-end-3 mx-10 pb-10 border-b-[1px] lg:border-none border-grey-50
        lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2 lg:justify-self-center"
        >
          <p className="text-2xl text-grey-60 mb-10">Home</p>
          <ul>
            <li className="text-2xl mb-7">Hero Section</li>
            <li className="text-2xl mb-7">Features</li>
            <li className="text-2xl mb-7">Properties</li>
            <li className="text-2xl mb-7">Testimonials</li>
            <li className="text-2xl ">FAQ’s</li>
          </ul>
        </div>
        <div className="col-start-2 col-end-3 row-start-2 row-end-3 mx-10 pb-10 lg:justify-self-center  border-b-[1px] lg:border-none border-grey-50 lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2 ">
          <p className="text-2xl text-grey-60 mb-10">About Us</p>
          <ul>
            <li className="text-2xl mb-7">Our Story</li>
            <li className="text-2xl mb-7">Our Works</li>
            <li className="text-2xl mb-7">How It Works</li>
            <li className="text-2xl mb-7">Our Team</li>
            <li className="text-2xl ">Our Clients</li>
          </ul>
        </div>
        <div className="col-start-1 col-end-2 row-start-3 row-end-4 mx-10 pb-10 lg:justify-self-center pt-10 border-b-[1px] lg:pt-0 lg:border-none border-grey-50 lg:col-start-4 lg:col-end-5 lg:row-start-1 lg:row-end-2">
          <p className="text-2xl text-grey-60 mb-10">Properties</p>
          <ul>
            <li className="text-2xl mb-7">Portfolio</li>
            <li className="text-2xl ">Categories</li>
          </ul>
        </div>
        <div className="col-start-2 col-end-3 row-start-3 row-end-5 mx-10 pb-10 pt-10 lg:justify-self-center border-b-[1px] lg:pt-0 lg:border-none border-grey-50 lg:col-start-5 lg:col-end-6 lg:row-start-1 lg:row-end-2 ">
          <p className="text-2xl text-grey-60 mb-10">Services</p>
          <ul>
            <li className="text-2xl mb-7">Valuation Mastery</li>
            <li className="text-2xl mb-7">Strategic Marketing</li>
            <li className="text-2xl mb-7">Negotiation Wizardry</li>
            <li className="text-2xl mb-7">Closing Success</li>
            <li className="text-2xl leading-10 ">Property Management</li>
          </ul>
        </div>
        <div className="col-start-1 col-end-2 row-start-4 row-end-5 mx-10 pb-10 lg:justify-self-center pt-10 border-b-[1px] border-grey-50 lg:border-none lg:pt-0 lg:col-start-6 lg:col-end-7 lg:row-start-1 lg:row-end-2">
          <p className="text-2xl text-grey-60 mb-10">Contact Us</p>
          <ul>
            <li className="text-2xl mb-7">Contact Form</li>
            <li className="text-2xl ">Our Offices</li>
          </ul>
        </div>
      </div>
      <div className="bg-grey-10 py-10 lg:hidden">
        <div className="flex justify-center gap-x-5 mb-10">
          <img src={fb} alt="" className="w-[5rem]" />
          <img src={insta} alt="" className="w-[5rem]" />
          <img src={x} alt="" className="w-[5rem]" />
          <img src={yt} alt="" className="w-[5rem]" />
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-2xl mb-4">
            @2023 Estatein. All Rights Reserved.
          </h1>
          <p className="text-2xl">Terms & Conditions</p>
        </div>
      </div>
      <div className="bg-grey-10 py-12 hidden lg:flex justify-between px-20">
        <div className="flex gap-x-10 items-center">
          <h1 className="text-3xl ">@2023 Estatein. All Rights Reserved.</h1>
          <p className="text-3xl">Terms & Conditions</p>
        </div>
        <div className="flex gap-x-5">
          <img src={fb} alt="" />
          <img src={insta} alt="" />
          <img src={x} alt="" />
          <img src={yt} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
