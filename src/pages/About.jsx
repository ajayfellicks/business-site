import React from "react";
import AboutImage from "../assets/About-Image.png";
import SubContainer from "../assets/Sub-Container.png";

const About = () => {
  const experienceData = [
    {
      step: "Step 01",
      title: "Discover a World of Possibilities",
      discription:
        "Your journey begins with exploring our carefully curated property listings. Use our intuitive search tools to filter properties based on your preferences, including location, type, size, and budget.",
    },
    {
      step: "Step 02",
      title: "Narrowing Down Your Choices",
      discription:
        "Once you've found properties that catch your eye, save them to your account or make a shortlist. This allows you to compare and revisit your favorites as you make your decision.",
    },
    {
      step: "Step 03",
      title: "Personalized Guidance",
      discription:
        "Have questions about a property or need more information? Our dedicated team of real estate experts is just a call or message away.",
    },
    {
      step: "Step 04",
      title: "See It for Yourself",
      discription:
        "Arrange viewings of the properties you're interested in. We'll coordinate with the property owners and accompany you to ensure you get a firsthand look at your potential new home.",
    },
    {
      step: "Step 05",
      title: "Making Informed Decisions",
      discription:
        "Before making an offer, our team will assist you with due diligence, including property inspections, legal checks, and market analysis. We want you to be fully informed and confident in your choice.",
    },
    {
      step: "Step 06",
      title: "Getting the Best Deal",
      discription:
        "We'll help you negotiate the best terms and prepare your offer. Our goal is to secure the property at the right price and on favorable terms.",
    },
  ];
  return (
    <div className="lg:mt-20 ">
      <div className="grid lg:grid-cols-[1fr_auto] ">
        <div className="py-20 px-10 lg:p-0 lg:col-start-2 lg:col-end-3 relative">
          <img
            src={AboutImage}
            alt="building"
            className=" rounded-2xl  lg:w-[90rem] lg:mr-20"
          />
        </div>
        <div className="  px-10 lg:px-20   lg:flex lg:flex-col lg:justify-center lg:row-start-1 lg:row-end-2  ">
          <h1 className="font-semibold text-[3rem] mb-5">Our Journey</h1>
          <p className="font-medium text-[2rem]  text-grey-60 mb-10 lg:pr-72">
            Our story is one of continuous growth and evolution. We started as a
            small team with big dreams, determined to create a real estate
            platform that transcended the ordinary. Over the years, we've
            expanded our reach, forged valuable partnerships, and gained the
            trust of countless clients
          </p>
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
      <div className="mx-10 mt-40 mb-20 xl:w-[80%] xl:mx-auto">
        <h1 className="font-semibold text-[3rem] mb-5">
          Navigating the Estatein Experience
        </h1>
        <p className="font-medium text-[2rem]  text-grey-60 mb-10 lg:mb-20">
          At Estatein, we've designed a straightforward process to help you find
          and purchase your dream property with ease. Here's a step-by-step
          guide to how it all works.
        </p>
      </div>
      <div className="xl:grid xl:grid-cols-3 xl:grid-rows-[1fr_1fr] xl:gap-14 xl:w-[80%] xl:mx-auto">
        {experienceData.map((element, index) => {
          return (
            <div
              key={index}
              className="mx-10 flex flex-col mb-10 xl:p-0 xl:m-0"
            >
              <div className="text-2xl py-7 pl-10 border-l-[2px] border-purple-60">
                {element.step}
              </div>
              <dir className=" xl:h-[18rem] bg-[linear-gradient(140deg,_rgba(112,59,247,1)_0%,_rgba(38,38,38,1)_30%)] p-1 rounded-2xl rounded-tl-none">
                <div className=" xl:h-[17.4rem] flex flex-col items-center justify-center bg-[linear-gradient(140deg,_rgba(130,84,248,0)_0%,_rgba(13,13,13,1)_15%)] p-10 rounded-2xl rounded-tl-none">
                  <div className="text-2xl mb-7 self-start">
                    {element.title}
                  </div>
                  <dir className="text-2xl text-grey-60">
                    {element.discription}
                  </dir>
                </div>
              </dir>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;
