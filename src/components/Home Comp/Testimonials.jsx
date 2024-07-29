import React, { useState } from "react";
import rightArrow from "../../assets/right-arrow.png";
import leftArrow from "../../assets/left-arrow.png";
import SubContainer from "../../assets/SubContainer.png";

const Testimonials = ({ testData }) => {
  const [page, setPage] = useState(1);
  return (
    <div className="xl:w-[80%] xl:mx-auto">
      <div className="mx-10 mt-20 mb-20">
        <h1 className="font-semibold text-[3rem] mb-5">What Our Clients Say</h1>
        <p className="font-medium text-[2rem]  text-grey-60 mb-10 lg:mb-20">
          Read the success stories and heartfelt testimonials from our valued
          clients. Discover why they chose Estatein for their real estate needs.
        </p>
      </div>
      {testData.slice(page * 1 - 1, page * 1).map((element, index) => {
        return (
          <div
            key={index}
            className="p-10 border-solid border-[1px] border-grey-15 flex flex-col m-10 rounded-[2rem] lg:hidden"
          >
            <div className="flex gap-x-6 mb-10">
              <img src={SubContainer} alt="" />
              <img src={SubContainer} alt="" />
              <img src={SubContainer} alt="" />
              <img src={SubContainer} alt="" />
              <img src={SubContainer} alt="" />
            </div>
            <h1 className="font-semibold text-[2.5rem] mb-5">
              {element.title}
            </h1>
            <p className="font-medium text-[1.5rem]  mb-10 lg:mb-20">
              {element.description}
            </p>
            <div className="flex items-center">
              <img
                className="w-[5rem] h-[5rem] mr-5"
                src={element.profilePic}
                alt="profilePic"
              />
              <div className="flex flex-col gap-y-2">
                <p className="text-2xl font-medium ">{element.profileName}</p>
                <p className="text-2xl text-grey-60 font-medium ">
                  {element.profileAdd}
                </p>
              </div>
            </div>
          </div>
        );
      })}
      <div className="hidden lg:grid lg:grid-cols-3">
        {testData.slice(page * 3 - 3, page * 3).map((element, index) => {
          return (
            <div
              key={index}
              className="p-10 border-solid border-[1px] border-grey-15 m-10 rounded-[2rem] flex flex-col"
            >
              <div className="flex gap-x-6 mb-10">
                <img src={SubContainer} alt="" />
                <img src={SubContainer} alt="" />
                <img src={SubContainer} alt="" />
                <img src={SubContainer} alt="" />
                <img src={SubContainer} alt="" />
              </div>
              <h1 className="text-4xl font-semibold mb-8">{element.title}</h1>
              <p className="text-3xl font-medium mb-8 leading-[3.5rem]">
                {element.description}
              </p>
              <div className="flex items-center">
                <img
                  className="w-[7rem] h-[7rem] mr-5"
                  src={element.profilePic}
                  alt="profilePic"
                />
                <div className="flex flex-col gap-y-2">
                  <p className="text-3xl font-medium ">{element.profileName}</p>
                  <p className="text-3xl text-grey-60 font-medium ">
                    {element.profileAdd}
                  </p>
                </div>
              </div>
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
            <span className="text-grey-60 text-3xl">to {testData.length}</span>
          </div>
          {page < testData.length ? (
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
          View All Testimonials
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
              to {Math.round(testData.length / 3)}
            </span>
          </div>
          {page < Math.round(testData.length / 3) ? (
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

export default Testimonials;
