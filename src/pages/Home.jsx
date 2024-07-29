import React from "react";
import Hero from "../components/Home Comp/Hero";
import PropertiesComp from "../components/Home Comp/PropertiesComp";
import Testimonials from "../components/Home Comp/Testimonials";

import FAQ from "../components/Home Comp/FAQ";
const Home = ({ data, testData, faqData }) => {
  return (
    <div>
      <Hero />
      <PropertiesComp data={data} />
      <Testimonials testData={testData} />
      <FAQ faqData={faqData} />
    </div>
  );
};

export default Home;
