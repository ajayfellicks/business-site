import React from "react";
import DreamHouse from "./../assets/DreamHouseIcon.png";
import ProperityValue from "./../assets/ProperityValueIcon.png";
import ProperityManagement from "./../assets/ProperityManagementIcon.png";
import SmartInvestments from "./../assets/SmartInvestmentsIcon.png";
import upRightArrow from "./../assets/arrow-up-right.png";
import ValueIcon from "../assets/ValueIcon.png";
import StrategicIcon from "../assets/StrategicIcon.png";
import NegotiationIcon from "../assets/NegotiationIcon.png";
import ClosingIcon from "../assets/ClosingIcon.png";
import FAQ from "../components/Home Comp/FAQ";

const Services = ({ faqData }) => {
  return (
    <div>
      <div className="bg-[linear-gradient(90deg,_rgba(25,25,25,1)_0%,_rgba(13,13,13,1)_38%)] p-16 lg:p-36">
        <h1 className="font-semibold text-[3rem] mb-5">
          Elevate Your Real Estate Experience
        </h1>
        <p className="font-medium text-[2rem]  text-grey-60 ">
          Welcome to Estatein, where your real estate aspirations meet expert
          guidance. Explore our comprehensive range of services, each designed
          to cater to your unique <br /> needs and dreams.
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
      <div className="lg:mt-20 xl:w-[80%] xl:mx-auto">
        <div className="mx-8">
          <h1 className="font-semibold text-[3rem] mb-5">
            Unlock Property Value
          </h1>
          <p className="font-medium text-[2rem]  text-grey-60 mb-10 lg:mb-20 hidden lg:block">
            Selling your property should be a rewarding experience, and at
            Estatein, we make sure it is. Our Property Selling Service is
            designed to maximize the value of your property, ensuring you get
            the best deal possible. Explore the categories below to see how we
            can help you at every step of your selling journey.
          </p>
          <p className="font-medium text-[1.6rem]  text-grey-60 mb-10 lg:mb-20 lg:hidden ">
            Selling your property should be a rewarding experience, and at
            Estatein, we make sure it is.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 lg:grid-rows-2 lg:gap-8 gap-y-8 mx-8">
          <div className="rounded-xl border-solid border-[1px] border-grey-15 p-12 ">
            <div className="flex mb-5">
              <img
                src={ValueIcon}
                alt="ValueIcon"
                className="justify-self-center mr-5  w-[6rem]"
              />
              <h1 className="text-2xl font-semibold self-center">
                Valuation Mastery
              </h1>
            </div>
            <div>
              <p className="text-2xl text-grey-60">
                Discover the true worth of your property with our expert
                valuation services.
              </p>
            </div>
          </div>
          <div className="rounded-xl border-solid border-[1px] border-grey-15 p-12 ">
            <div className="flex mb-5">
              <img
                src={StrategicIcon}
                alt="StrategicIcon"
                className="justify-self-center mr-5  w-[6rem]"
              />
              <h1 className="text-2xl font-semibold self-center">
                Valuation Mastery
              </h1>
            </div>
            <div>
              <p className="text-2xl text-grey-60">
                Selling a property requires more than just a listing; it demands
                a strategic marketing approach.
              </p>
            </div>
          </div>
          <div className="rounded-xl border-solid border-[1px] border-grey-15 p-12 ">
            <div className="flex mb-5">
              <img
                src={NegotiationIcon}
                alt="NegotiationIcon"
                className="justify-self-center mr-5  w-[6rem]"
              />
              <h1 className="text-2xl font-semibold self-center">
                Valuation Mastery
              </h1>
            </div>
            <div>
              <p className="text-2xl text-grey-60">
                Negotiating the best deal is an art, and our negotiation experts
                are masters of it.
              </p>
            </div>
          </div>
          <div className="rounded-xl border-solid border-[1px] border-grey-15 p-12 ">
            <div className="flex mb-5">
              <img
                src={ClosingIcon}
                alt="ClosingIcon"
                className="justify-self-center mr-5  w-[6rem]"
              />
              <h1 className="text-2xl font-semibold self-center">
                Valuation Mastery
              </h1>
            </div>
            <div>
              <p className="text-2xl text-grey-60">
                A successful sale is not complete until the closing. We guide
                you through the intricate closing process.
              </p>
            </div>
          </div>

          <div className="bg-grey-10 lg:col-start-2 p-12 lg:col-end-4 lg:row-start-2 lg:row-end-3 rounded-xl border-solid border-[1px] border-grey-15 items-center">
            <div className="lg:flex lg:items-center lg:justify-between grid">
              <h1 className="text-3xl font-semibold mb-6 leading-[3rem]">
                Unlock the Value of Your Property Today
              </h1>
              <button className="text-2xl bg-main p-5 rounded-xl  border-solid border-[1px] border-grey-15 mb-6">
                Learn More
              </button>
            </div>
            <div>
              <p className="text-2xl text-grey-60  lg:mt-6">
                Ready to unlock the true value of your property? Explore our
                Property Selling Service categories and let us help you achieve
                the best deal possible for your valuable asset.
              </p>
            </div>
          </div>
        </div>
      </div>
      <FAQ faqData={faqData} />
    </div>
  );
};

export default Services;
