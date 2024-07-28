import React, { useState } from "react";
import bed from "../../assets/Bed-Icon.png";
import bath from "../../assets/Bath-Icon.png";
import villa from "../../assets/Villa-icon.png";
import rightArrow from "../../assets/right-arrow.png";
import leftArrow from "../../assets/left-arrow.png";

const PropertiesComp = ({ data }) => {
  const [page, setPage] = useState(1);

  return (
    <div className="xl:w-[80%] xl:mx-auto">
      <div className="mx-10 mt-20 mb-20">
        <h1 className="font-semibold text-[3rem] mb-5">Featured Properties</h1>
        <p className="font-medium text-[2rem]  text-grey-60 mb-10 lg:mb-20 ">
          Explore our handpicked selection of featured properties. Each listing
          offers a glimpse into exceptional homes and investments available
          through Estatein.
        </p>
      </div>
      {data.slice(page * 1 - 1, page * 1).map((element, index) => {
        return (
          <div
            key={index}
            className="p-10 border-solid border-[1px] border-grey-15 flex flex-col m-10 rounded-[1rem] lg:hidden"
          >
            <img src={element.image} alt="FeaturedImage" className="mb-8" />
            <h1 className="font-semibold text-[2rem] mb-5">{element.title}</h1>
            <p className="mb-8">
              <span className="font-medium text-[1.5rem]  text-grey-60 mb-10 lg:mb-20 ">
                {element.about}...
              </span>
              <a className="text-[1.5rem] font-medium underline cursor-pointer ">
                Read More
              </a>
            </p>
            <div className="grid grid-cols-[auto_auto]  gap-5 mb-8">
              <div className="flex items-center justify-center bg-grey-10 border-solid border-[1px] border-grey-15  py-5 rounded-[50px]">
                <img src={bed} alt="bed" className="mr-4 w-5" />
                <p className="text-[1.5rem] font-medium">4-Bedroom</p>
              </div>
              <div className="flex items-center justify-center bg-grey-10 border-solid border-[1px] border-grey-15 py-5 rounded-[50px]">
                <img src={bath} alt="bath" className="mr-4 w-5" />
                <p className="text-[1.5rem] font-medium">3-Bathroom</p>
              </div>
              <div className="flex items-center justify-center bg-grey-10 border-solid border-[1px] border-grey-15 py-5 rounded-[50px]">
                <img src={villa} alt="villa" className="mr-4 w-5" />
                <p className="text-[1.5rem] font-medium">Villa</p>
              </div>
            </div>
            <div className="flex justify-between">
              <div>
                <p className="text-2xl text-grey-60 font-medium mb-2">Price</p>
                <h1 className="text-4xl font-semibold">$550,000</h1>
              </div>
              <button className="bg-purple-60 px-[2rem] py-[1rem]  rounded-2xl border-solid border-[1px] border-purple-70 hover:bg-purple-70 hover:border-purple-60 text-2xl">
                View Property Details
              </button>
            </div>
          </div>
        );
      })}
      <div className="hidden lg:grid lg:grid-cols-3">
        {data.slice(page * 3 - 3, page * 3).map((element, index) => {
          return (
            <div
              key={index}
              className="p-10 border-solid border-[1px] border-grey-15 m-10 rounded-[2rem] flex flex-col"
            >
              <img src={element.image} alt="FeaturedImage" className="mb-8" />
              <h1 className="text-4xl font-semibold mb-8">{element.title}</h1>
              <p className="mb-8">
                <span className="text-2xl font-medium text-grey-60 ">
                  {element.about}...
                </span>
                <a className="text-2xl font-medium underline cursor-pointer">
                  Read More
                </a>
              </p>

              <div className="grid grid-cols-[auto_auto_auto]  gap-5 mb-8">
                <div className="flex items-center justify-center bg-grey-10 border-solid border-[1px] border-grey-15  py-5 rounded-[50px]">
                  <img src={bed} alt="bed" className="mr-4 w-5" />
                  <p className="text-2xl font-medium">4-Bedroom</p>
                </div>
                <div className="flex items-center justify-center bg-grey-10 border-solid border-[1px] border-grey-15 py-5 rounded-[50px]">
                  <img src={bath} alt="bath" className="mr-4 w-5" />
                  <p className="text-2xl font-medium">3-Bathroom</p>
                </div>
                <div className="flex items-center justify-center bg-grey-10 border-solid border-[1px] border-grey-15 py-5 rounded-[50px]">
                  <img src={villa} alt="villa" className="mr-4 w-5" />
                  <p className="text-2xl font-medium">Villa</p>
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <p className="text-2xl text-grey-60 font-medium mb-2">
                    Price
                  </p>
                  <h1 className="text-4xl font-semibold">$550,000</h1>
                </div>
                <button className="bg-purple-60 px-[3rem] py-[1.5rem]  rounded-2xl border-solid border-[1px] border-purple-70 hover:bg-purple-70 hover:border-purple-60 text-2xl">
                  View Property Details
                </button>
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
            <span className="text-grey-60 text-3xl">to {data.length}</span>
          </div>
          {page < data.length ? (
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
          View All Properties
        </button>
        <div className="flex items-center gap-5">
          {page > 1 ? (
            <div
              onClick={() => {
                setPage((preval) => preval - 1);
              }}
              className="border-solid border-[1px] border-grey-15 p-[1rem] rounded-[50px] hover:bg-grey-8 hover:border-grey-20 "
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
              to {Math.round(data.length / 3)}
            </span>
          </div>
          {page < Math.round(data.length / 3) ? (
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

export default PropertiesComp;
