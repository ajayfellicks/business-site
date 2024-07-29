import React from "react";
import mailIcon from "./../assets/mailIcon.png";
import callIcon from "./../assets/callIcon.png";
import LocationIcon from "./../assets/LocationIcon.png";
import EstateinIcon from "./../assets/EstateinIcon.png";
import upRightArrow from "./../assets/arrow-up-right.png";
import C1 from "./../assets/C1.png";
import C2 from "./../assets/C2.png";
import C3 from "./../assets/C3.png";
import C4 from "./../assets/C4.png";
import C5 from "./../assets/C5.png";
import C6 from "./../assets/C6.png";

const Contact = () => {
  return (
    <div>
      <div className="bg-[linear-gradient(90deg,_rgba(25,25,25,1)_0%,_rgba(13,13,13,1)_38%)] p-16 lg:p-36">
        <h1 className="font-semibold text-[3rem] mb-5">
          Get in Touch with Estatein
        </h1>
        <p className="font-medium text-[2rem]  text-grey-60 ">
          Welcome to Estatein's Contact Us page. We're here to assist you with
          any inquiries, requests, or feedback you may have. Whether you're
          looking to buy or sell a property, explore <br /> investment
          opportunities, or simply want to connect, we're just a message away.
          Reach out to us, and let's start a conversation.
        </p>
      </div>
      <div className="border-solid border-[1px] border-grey-15 p-8 m-10">
        <div className="grid lg:grid-flow-col grid-cols-6 grid-rows-2 lg:grid-rows-1 lg:grid-cols-12 gap-8">
          <div className=" relative py-10  grid row-start-1 row-end-2 col-start-1 col-end-4 lg:row-start-1 lg:row-end-2 lg:col-start-1 lg:col-end-4 bg-grey-10 rounded-xl border-solid border-[1px] border-grey-15">
            <img
              src={upRightArrow}
              alt="upRightArrow"
              className="absolute top-4 right-4 opacity-50 w-[2rem]"
            />
            <img
              className="justify-self-center mb-5 w-[6rem]"
              src={mailIcon}
              alt="DreamHouse"
            />
            <p className="text-2xl text-center">info@estatein.com</p>
          </div>
          <div className="relative py-10 grid row-start-1 row-end-2 col-start-4 col-end-7 lg:row-start-1 lg:row-end-2 lg:col-start-4 lg:col-end-7  bg-grey-10 rounded-xl border-solid border-[1px] border-grey-15">
            <img
              src={upRightArrow}
              alt="upRightArrow"
              className="absolute top-4 right-4 opacity-50 w-[2rem]"
            />
            <img
              className="justify-self-center mb-5 w-[6rem]"
              src={callIcon}
              alt="callIcon"
            />
            <p className="text-2xl text-center">+1 (123) 456-7890</p>
          </div>
          <div className="relative py-10  grid row-start-2 row-end-3 col-start-1 col-end-4 lg:row-start-1 lg:row-end-2 lg:col-start-7  lg:col-end-10 bg-grey-10 rounded-xl border-solid border-[1px] border-grey-15">
            <img
              src={upRightArrow}
              alt="upRightArrow"
              className="absolute top-4 right-4 opacity-50 w-[2rem]"
            />
            <img
              className="justify-self-center mb-5 w-[6rem]"
              src={LocationIcon}
              alt="LocationIcon"
            />
            <p className="text-2xl text-center">Main Headquarters</p>
          </div>
          <div className="relative py-10 grid row-start-2 row-end-3 col-start-4 col-end-7 lg:row-start-1 lg:row-end-2 lg:col-start-10 lg:col-end-13 bg-grey-10 rounded-xl border-solid border-[1px] border-grey-15">
            <img
              src={upRightArrow}
              alt="upRightArrow"
              className="absolute top-4 right-4 opacity-50 w-[2rem]"
            />
            <img
              className="justify-self-center mb-5 w-[6rem]"
              src={EstateinIcon}
              alt="EstateinIcon"
            />
            <p className="text-2xl text-center">Instagram LinkedIn Facebook</p>
          </div>
        </div>
      </div>
      <div className="xl:w-[80%] xl:mx-auto ">
        <div className="lg:p-24 bg-grey-10 rounded-2xl p-10 mx-10">
          <div className="grid lg:grid-cols-[1fr_1fr_1fr_1fr] lg:grid-rows-[auto_auto_auto] gap-y-4 lg:gap-8 ">
            <div className="lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-2 ">
              <img src={C1} alt="" />
            </div>
            <div className="lg:col-start-3 lg:col-end-5 lg:row-start-1 lg:row-end-2 ">
              <img src={C2} alt="" />
            </div>
            <div className="lg:col-start-1 lg:col-end-3 lg:row-start-2 lg:row-end-3 ">
              <img src={C3} alt="" />
            </div>
            <div className="lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-3 ">
              <img src={C4} alt="" />
            </div>
            <div className="lg:col-start-4 lg:col-end-5 lg:row-start-2 lg:row-end-3 ">
              <img src={C5} alt="" />
            </div>
            <div className="lg:col-start-3 lg:col-end-5 lg:row-start-3 lg:row-end-4 ">
              <img src={C6} alt="" />
            </div>
            <div className="mt-10 lg:mt-0 lg:col-start-1 lg:col-end-3 lg:row-start-3 lg:row-end-4 lg:justify-self-center lg:self-center ">
              <h1 className="text-5xl font-semibold leading-[4rem]">
                Explore Estatein's World
              </h1>
              <p className="text-2xl text-grey-60 font-medium leading-[3rem]">
                Step inside the world of Estatein, where professionalism meets
                warmth, and expertise <br /> meets passion. Our gallery offers a
                glimpse into our team and workspaces, inviting you <br /> to get
                to know us better.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
