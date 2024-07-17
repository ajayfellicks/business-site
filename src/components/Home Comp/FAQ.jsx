import React, { useState } from "react";
import rightArrow from "../../assets/right-arrow.png";
import leftArrow from "../../assets/left-arrow.png";
import SubContainer from "../../assets/SubContainer.png";

const FAQ = ({ faqData }) => {
  const [page, setPage] = useState(1);
  return (
    <div className="xl:w-[80%] xl:mx-auto">
      <div className="mx-10 mt-40 mb-20">
        <h1 className="font-semibold text-[3rem] mb-5">
          Frequently Asked Questions
        </h1>
        <p className="font-medium text-[2rem]  text-grey-60 mb-10 lg:mb-20 ">
          Find answers to common questions about Estatein's services, property
          listings, and the real estate process. We're here to provide clarity
          and assist you every step of the way.
        </p>
      </div>
      {faqData.slice(page * 1 - 1, page * 1).map((element, index) => {
        return (
          <div
            key={index}
            className="p-10 border-solid border-[1px] border-grey-15 flex flex-col m-10 rounded-[2rem] lg:hidden"
          >
            <h1 className="font-semibold text-[2rem] mb-5">{element.title}</h1>
            <p className="font-medium text-[1.5rem]  text-grey-60 mb-10 lg:mb-20">
              {element.description}
            </p>
            <button className="bg-main  py-[1rem] lg:py-[1.5rem] lg:px-[1.5rem] rounded-xl border-solid border-[1px] border-grey-15 hover:bg-grey-8 hover:border-grey-20 text-2xl">
              Read More
            </button>
          </div>
        );
      })}
      <div className="hidden lg:grid lg:grid-cols-3">
        {faqData.slice(page * 3 - 3, page * 3).map((element, index) => {
          return (
            <div
              key={index}
              className="p-10 border-solid border-[1px] border-grey-15 m-10 rounded-[2rem] flex flex-col justify-between"
            >
              <h1 className="text-4xl font-semibold mb-20 mt-10">
                {element.title}
              </h1>
              <p className="text-3xl text-grey-60 font-medium mb-10 leading-[3.5rem]">
                {element.description}
              </p>
              <button className="hover:bg-main px-[4rem]  py-[2rem] lg:py-[1.5rem] lg:px-[1.5rem] rounded-xl border-solid border-[1px] hover:border-grey-15 bg-grey-8 border-grey-20 text-3xl">
                Read More
              </button>
            </div>
          );
        })}
      </div>

      <div className="mx-10 flex justify-between lg:hidden">
        <button className="bg-main px-[2rem]  py-[1rem] lg:py-[1.5rem] lg:px-[1.5rem] rounded-xl border-solid border-[1px] border-grey-15 hover:bg-grey-8 hover:border-grey-20 text-2xl">
          View All Properties
        </button>
        <div className="flex items-center gap-5">
          {page > 1 ? (
            <div
              onClick={() => {
                setPage((preval) => preval - 1);
              }}
              className="border-solid border-[1px] border-grey-15 p-[1rem] rounded-[50px] hover:bg-grey-8 hover:border-grey-20"
            >
              <img src={leftArrow} alt="rightArrow" />
            </div>
          ) : (
            <div className=" opacity-50  border-solid border-[1px] border-grey-15 p-[1rem] rounded-[50px] hover:bg-grey-8 hover:border-grey-20">
              <img src={leftArrow} alt="rightArrow" />
            </div>
          )}
          <div className="flex">
            <span className="text-3xl ">{page}&nbsp;</span>
            <span className="text-grey-60 text-3xl">to {faqData.length}</span>
          </div>
          {page < faqData.length ? (
            <div
              onClick={() => {
                setPage((preval) => preval + 1);
              }}
              className="border-solid border-[1px] border-grey-15 p-[1rem] rounded-[50px] hover:bg-grey-8 hover:border-grey-20"
            >
              <img src={rightArrow} alt="rightArrow" />
            </div>
          ) : (
            <div className="opacity-50 border-solid border-[1px] border-grey-15 p-[1rem] rounded-[50px] hover:bg-grey-8 hover:border-grey-20">
              <img src={rightArrow} alt="rightArrow" />
            </div>
          )}
        </div>
      </div>
      <div className="mx-10 hidden lg:flex lg:justify-between">
        <button className="bg-main px-[4rem]  py-[2rem] lg:py-[1.5rem] lg:px-[1.5rem] rounded-xl border-solid border-[1px] border-grey-15 hover:bg-grey-8 hover:border-grey-20 text-3xl">
          View All FAQ’s
        </button>
        <div className="flex items-center gap-5">
          {page > 1 ? (
            <div
              onClick={() => {
                setPage((preval) => preval - 1);
              }}
              className="border-solid border-[1px] border-grey-15 p-[1rem] rounded-[50px] hover:bg-grey-8 hover:border-grey-20"
            >
              <img src={leftArrow} alt="rightArrow" />
            </div>
          ) : (
            <div className=" opacity-50  border-solid border-[1px] border-grey-15 p-[1rem] rounded-[50px] hover:bg-grey-8 hover:border-grey-20">
              <img src={leftArrow} alt="rightArrow" />
            </div>
          )}
          <div className="flex">
            <span className="text-3xl">{page}&nbsp;</span>
            <span className="text-grey-60 text-3xl">
              to {Math.round(faqData.length / 3)}
            </span>
          </div>
          {page < Math.round(faqData.length / 3) ? (
            <div
              onClick={() => {
                setPage((preval) => preval + 1);
              }}
              className="border-solid border-[1px] border-grey-15 p-[1rem] rounded-[50px] hover:bg-grey-8 hover:border-grey-20"
            >
              <img src={rightArrow} alt="rightArrow" />
            </div>
          ) : (
            <div className="opacity-50 border-solid border-[1px] border-grey-15 p-[1rem] rounded-[50px] hover:bg-grey-8 hover:border-grey-20">
              <img src={rightArrow} alt="rightArrow" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
