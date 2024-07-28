import React from "react";
import PropertiesComp from "../components/Home Comp/PropertiesComp";

const Properties = ({ data }) => {
  return (
    <div>
      <div className="bg-[linear-gradient(90deg,_rgba(25,25,25,1)_0%,_rgba(13,13,13,1)_38%)] p-16 lg:p-36">
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
    </div>
  );
};

export default Properties;
