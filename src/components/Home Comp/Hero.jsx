import React from "react";
import HeroImage from "../../assets/Hero-Image.png";
import SubContainer from "../../assets/Sub-Container.png";
import DreamHouse from "../../assets/DreamHouseIcon.png";
import ProperityValue from "../../assets/ProperityValueIcon.png";
import ProperityManagement from "../../assets/ProperityManagementIcon.png";
import SmartInvestments from "../../assets/SmartInvestmentsIcon.png";
import upRightArrow from "../../assets/arrow-up-right.png";

const Hero = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-[1fr_auto] ">
        <div className="py-20 px-10 lg:p-0 lg:col-start-2 lg:col-end-3 relative">
          <img
            src={HeroImage}
            alt="building"
            className=" rounded-2xl  lg:rounded-none "
          />
          <div>
            <img
              src={SubContainer}
              alt=""
              className="absolute top-[45rem] right-[43rem] lg:top-[10rem] lg:right-[83rem] hidden 2xl:block"
            />
          </div>
        </div>

        <div className=" px-10 lg:px-20   lg:flex lg:flex-col lg:justify-center lg:row-start-1 lg:row-end-2  ">
          <h1 className="font-semibold text-[3rem] mb-5">
            Discover Your Dream Property with Estatein
          </h1>
          <p className="font-medium text-[2rem]  text-grey-60 mb-10 lg:mb-20">
            Your journey to finding the perfect property begins here. Explore
            our listings to find the home that matches your dreams.
          </p>
          <div className="grid gap-y-5 lg:flex lg:gap-x-5 ">
            <button className="bg-main  py-[1rem] lg:py-[1.5rem] lg:px-[1.5rem] rounded-xl border-solid border-[1px] border-grey-15 hover:bg-grey-8 hover:border-grey-20 text-2xl">
              Learn More
            </button>
            <button className="bg-purple-60  py-[1rem] lg:py-[1.5rem] lg:px-[1.5rem] rounded-xl border-solid border-[1px] border-purple-70 hover:bg-purple-70 hover:border-purple-60 text-2xl">
              Browse Properties
            </button>
          </div>
          <div className="grid grid-cols-2 grid-rows-[auto_auto] gap-6 my-16 lg:grid-cols-3 lg:grid-rows-none">
            <div className="text-center self-center p-[2rem] bg-grey-10 rounded-xl border-solid border-[1px] border-grey-15">
              <h1 className="text-5xl lg:text-4xl font-bold mb-4">200+</h1>
              <p className="text-2xl lg:text-2xl font-medium text-grey-60">
                Happy Customers
              </p>
            </div>
            <div className="text-center self-center p-[2rem] bg-grey-10 rounded-xl border-solid border-[1px] border-grey-15">
              <h1 className="text-5xl lg:text-4xl font-bold mb-4">10k+</h1>
              <p className="text-2xl lg:text-2xl font-medium text-grey-60">
                Clients
              </p>
            </div>
            <div className="text-center self-center col-span-2 lg:col-span-1 py-[2rem] bg-grey-10 rounded-xl border-solid border-[1px] border-grey-15">
              <h1 className="text-5xl lg:text-4xl font-bold mb-4">16+</h1>
              <p className="text-2xl lg:text-2xl font-medium text-grey-60">
                Years of Experience
              </p>
            </div>
          </div>
        </div>
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
              src={DreamHouse}
              alt="DreamHouse"
            />
            <p className="text-2xl text-center">Find Your Dream Home</p>
          </div>
          <div className="relative py-10 grid row-start-1 row-end-2 col-start-4 col-end-7 lg:row-start-1 lg:row-end-2 lg:col-start-4 lg:col-end-7  bg-grey-10 rounded-xl border-solid border-[1px] border-grey-15">
            <img
              src={upRightArrow}
              alt="upRightArrow"
              className="absolute top-4 right-4 opacity-50 w-[2rem]"
            />
            <img
              className="justify-self-center mb-5 w-[6rem]"
              src={ProperityValue}
              alt="ProperityValue"
            />
            <p className="text-2xl text-center">Unlock Property Value</p>
          </div>
          <div className="relative py-10  grid row-start-2 row-end-3 col-start-1 col-end-4 lg:row-start-1 lg:row-end-2 lg:col-start-7  lg:col-end-10 bg-grey-10 rounded-xl border-solid border-[1px] border-grey-15">
            <img
              src={upRightArrow}
              alt="upRightArrow"
              className="absolute top-4 right-4 opacity-50 w-[2rem]"
            />
            <img
              className="justify-self-center mb-5 w-[6rem]"
              src={ProperityManagement}
              alt="ProperityManagement"
            />
            <p className="text-2xl text-center">
              Effortless Property Management
            </p>
          </div>
          <div className="relative py-10 grid row-start-2 row-end-3 col-start-4 col-end-7 lg:row-start-1 lg:row-end-2 lg:col-start-10 lg:col-end-13 bg-grey-10 rounded-xl border-solid border-[1px] border-grey-15">
            <img
              src={upRightArrow}
              alt="upRightArrow"
              className="absolute top-4 right-4 opacity-50 w-[2rem]"
            />
            <img
              className="justify-self-center mb-5 w-[6rem]"
              src={SmartInvestments}
              alt="SmartInvestments"
            />
            <p className="text-2xl text-center">
              Smart Investments, Informed Decisions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
