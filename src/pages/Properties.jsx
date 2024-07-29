import React from "react";
import PropertiesComp from "../components/Home Comp/PropertiesComp";

const Properties = ({ data }) => {
  return (
    <div>
      <div className="bg-[linear-gradient(90deg,_rgba(25,25,25,1)_0%,_rgba(13,13,13,1)_38%)] p-16 lg:p-36 ">
        <h1 className="font-semibold text-[3rem] mb-5">
          Find Your Dream Property
        </h1>
        <p className="font-medium text-[2rem]  text-grey-60 ">
          Welcome to Estatein, where your dream property awaits in every corner
          of our beautiful world. Explore our curated selection of properties,
          each offering a unique story and a chance to redefine your life. With
          categories to suit every dreamer, your journey
        </p>
      </div>
      <PropertiesComp data={data} />
      <div className="xl:w-[80%] xl:mx-auto mt-24">
        <div className="px-10 lg:px-0 lg:mb-16">
          <h1 className="font-semibold text-3xl lg:text-[3rem] mb-5 ">
            Find Your Dream Property
          </h1>
          <p className="font-medium lg:text-[2rem] text-[1.5rem] text-grey-60 ">
            Welcome to Estatein, where your dream property awaits in every
            corner of our beautiful world. Explore our curated selection of
            properties, each offering a unique story and a chance to redefine
            your life. With categories to suit every dreamer, your journey
          </p>
        </div>
        <div className="mt-14 lg:m-0 mx-10">
          <form className="border-solid border-[1px] border-grey-15 lg:p-28 p-10 rounded-2xl">
            <div className="grid lg:grid-cols-[1fr_1fr_1fr_1fr] lg:grid-rows-[1fr_1fr_1fr_auto] lg:gap-8">
              <div className="flex flex-col lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-2">
                <label className="text-2xl font-semibold p-[1.3rem] pl-0 ">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="Enter First Name"
                  required
                  className="text-2xl font-semibold p-[1.3rem] bg-grey-10 rounded-xl border-solid border-[1px] border-grey-15"
                />
              </div>
              <div className="flex flex-col lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2">
                <label className="text-2xl font-semibold p-[1.3rem] pl-0 ">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Enter Last Name"
                  required
                  className="text-2xl font-semibold p-[1.3rem] bg-grey-10 rounded-xl border-solid border-[1px] border-grey-15"
                />
              </div>
              <div className="flex flex-col lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2">
                <label className="text-2xl font-semibold p-[1.3rem] pl-0 ">
                  Email
                </label>
                <input
                  type="text"
                  name="Email"
                  placeholder="Enter Email"
                  required
                  className="text-2xl font-semibold p-[1.3rem] bg-grey-10 rounded-xl border-solid border-[1px] border-grey-15"
                />
              </div>
              <div className="flex flex-col lg:col-start-4 lg:col-end-5 lg:row-start-1 lg:row-end-2">
                <label className="text-2xl font-semibold p-[1.3rem] pl-0 ">
                  Phone
                </label>
                <input
                  type="text"
                  name="Phone"
                  placeholder="Phone"
                  required
                  className="text-2xl font-semibold p-[1.3rem] bg-grey-10 rounded-xl border-solid border-[1px] border-grey-15"
                />
              </div>
              <div className="flex flex-col lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-3">
                <label className="text-2xl font-semibold p-[1.3rem] pl-0">
                  Preferred Location
                </label>
                <select className="text-grey-60 text-2xl font-semibold p-[1.3rem] bg-grey-10 rounded-xl border-solid border-[1px] border-grey-15">
                  <option className="text-2xl font-semibold   bg-grey-10 rounded-xl border-solid border-[1px] border-grey-15">
                    Select Location
                  </option>
                  <option
                    className="text-2xl font-semibold bg-grey-10 rounded-xl border-solid border-[1px] border-grey-15"
                    value="New Jersey"
                  >
                    New Jersey
                  </option>
                  <option
                    className="text-2xl font-semibold  bg-grey-10 rounded-xl border-solid border-[1px] border-grey-15"
                    value="Tennessee"
                  >
                    Tennessee
                  </option>
                  <option
                    className="text-2xl font-semibold  bg-grey-10 rounded-xl border-solid border-[1px] border-grey-15"
                    value="Washington"
                  >
                    Washington
                  </option>
                  <option
                    className="text-2xl font-semibold  bg-grey-10 rounded-xl border-solid border-[1px] border-grey-15"
                    value="Minnesota"
                  >
                    Minnesota
                  </option>
                </select>
              </div>
              <div className="flex flex-col lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3">
                <label className="text-2xl font-semibold p-[1.3rem] pl-0">
                  Property Type
                </label>
                <select className=" text-grey-60 text-2xl font-semibold p-[1.3rem] bg-grey-10 rounded-xl border-solid border-[1px] border-grey-15">
                  <option className="text-2xl font-semibold  bg-grey-10 rounded-xl border-solid border-[1px] border-grey-15">
                    Select Property Type
                  </option>
                  <option
                    className="text-2xl font-semibold bg-grey-10 rounded-xl border-solid border-[1px] border-grey-15"
                    value="New Jersey"
                  >
                    villa
                  </option>
                  <option
                    className="text-2xl font-semibold  bg-grey-10 rounded-xl border-solid border-[1px] border-grey-15"
                    value="Tennessee"
                  >
                    house
                  </option>
                  <option
                    className="text-2xl font-semibold  bg-grey-10 rounded-xl border-solid border-[1px] border-grey-15"
                    value="Washington"
                  >
                    flat
                  </option>
                </select>
              </div>
              <div className="flex flex-col lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-3">
                <label className="text-2xl font-semibold p-[1.3rem] pl-0">
                  No. of Bathrooms
                </label>
                <select className="text-grey-60 text-2xl font-semibold p-[1.3rem] bg-grey-10 rounded-xl border-solid border-[1px] border-grey-15">
                  <option className="text-2xl font-semibold  bg-grey-10 rounded-xl border-solid border-[1px] border-grey-15">
                    Select no. of Bedrooms
                  </option>
                  <option
                    className="text-2xl font-semibold bg-grey-10 rounded-xl border-solid border-[1px] border-grey-15"
                    value="New Jersey"
                  >
                    1
                  </option>
                  <option
                    className="text-2xl font-semibold  bg-grey-10 rounded-xl border-solid border-[1px] border-grey-15"
                    value="Tennessee"
                  >
                    2
                  </option>
                  <option
                    className="text-2xl font-semibold  bg-grey-10 rounded-xl border-solid border-[1px] border-grey-15"
                    value="Washington"
                  >
                    3
                  </option>
                </select>
              </div>
              <div className="flex flex-col lg:col-start-4 lg:col-end-5 lg:row-start-2 lg:row-end-3">
                <label className="text-2xl font-semibold p-[1.3rem] pl-0">
                  No. of Bedrooms
                </label>
                <select className=" text-2xl font-semibold text-grey-60 p-[1.3rem] bg-grey-10 rounded-xl border-solid border-[1px] border-grey-15">
                  <option className="text-2xl font-semibold  bg-grey-10 rounded-xl border-solid border-[1px] border-grey-15">
                    Select no. of Bedrooms
                  </option>
                  <option
                    className="text-2xl font-semibold bg-grey-10 rounded-xl border-solid border-[1px] border-grey-15"
                    value="New Jersey"
                  >
                    1
                  </option>
                  <option
                    className="text-2xl font-semibold  bg-grey-10 rounded-xl border-solid border-[1px] border-grey-15"
                    value="Tennessee"
                  >
                    2
                  </option>
                  <option
                    className="text-2xl font-semibold  bg-grey-10 rounded-xl border-solid border-[1px] border-grey-15"
                    value="Washington"
                  >
                    3
                  </option>
                  <option
                    className="text-2xl font-semibold  bg-grey-10 rounded-xl border-solid border-[1px] border-grey-15"
                    value="Minnesota"
                  >
                    4
                  </option>
                </select>
              </div>
              <div className="flex flex-col lg:col-start-1 lg:col-end-3 lg:row-start-3 lg:row-end-4">
                <label className="text-2xl font-semibold p-[1.3rem] pl-0 ">
                  Property Name
                </label>
                <input
                  type="text"
                  name="propertyName"
                  placeholder="Enter Property Name"
                  required
                  className="text-2xl font-semibold p-[1.3rem] bg-grey-10 rounded-xl border-solid border-[1px] border-grey-15"
                />
              </div>
              <div className="flex flex-col lg:col-start-3 lg:col-end-5 lg:row-start-3 lg:row-end-4">
                <label className="text-2xl font-semibold p-[1.3rem] pl-0 ">
                  Budget
                </label>
                <input
                  type="text"
                  name="budget"
                  placeholder="Enter Budget"
                  required
                  className="text-2xl font-semibold p-[1.3rem] bg-grey-10 rounded-xl border-solid border-[1px] border-grey-15"
                />
              </div>
              <div className="flex flex-col lg:col-start-1 lg:col-end-5 lg:row-start-4 lg:row-end-5">
                <label className="text-2xl font-semibold p-[1.3rem] pl-0 ">
                  Description
                </label>
                <textarea
                  id="description"
                  className="text-2xl font-semibold p-[1.3rem] bg-grey-10 rounded-xl border-solid border-[1px] border-grey-15"
                  placeholder="Write Property description here"
                />
              </div>
            </div>
            <div className="flex lg:justify-between lg:items-center lg:mt-20 lg:flex-row flex-col">
              <div>
                <input
                  type="checkbox"
                  id="Terms"
                  name="Terms"
                  value="Terms"
                  className=" mt-8 lg:mt-0 p-[1.3rem] bg-grey-10 rounded-xl border-solid border-[1px] border-grey-15"
                ></input>
                <label className="text-2xl font-semibold p-[1.3rem] pl-0  ml-5">
                  I agree with Terms of Use and Privacy Policy
                </label>
              </div>

              <button className=" text-2xl mt-8 lg:mt-0  bg-purple-60 px-[1rem]  py-[1rem]  rounded-xl border-solid border-[1px] border-purple-70 hover:bg-purple-70 hover:border-purple-60 ">
                Create Property List
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Properties;
