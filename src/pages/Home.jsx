import React from "react";
import Hero from "../components/Home Comp/Hero";
import PropertiesComp from "../components/Home Comp/PropertiesComp";
import Testimonials from "../components/Home Comp/Testimonials";

import FAQ from "../components/Home Comp/FAQ";
const Home = ({ data, testData }) => {
  const faqData = [
    {
      title: "How do I search for properties on Estatein?",
      description:
        "Learn how to use our user-friendly search tools to find properties that match your criteria.",
    },
    {
      title: "What documents do I need to sell my property through Estatein?",
      description:
        "Find out about the necessary documentation for listing your property with us.",
    },
    {
      title: "How can I contact an Estatein agent?",
      description:
        "Discover the different ways you can get in touch with our experienced agents.",
    },
    {
      title: "How do I search for properties on Estatein?2",
      description:
        "Learn how to use our user-friendly search tools to find properties that match your criteria.",
    },
    {
      title: "What documents do I need to sell my property through Estatein?2",
      description:
        "Find out about the necessary documentation for listing your property with us.",
    },
    {
      title: "How can I contact an Estatein agent?2",
      description:
        "Discover the different ways you can get in touch with our experienced agents.",
    },
    {
      title: "How do I search for properties on Estatein?3",
      description:
        "Learn how to use our user-friendly search tools to find properties that match your criteria.",
    },
    {
      title: "What documents do I need to sell my property through Estatein?3",
      description:
        "Find out about the necessary documentation for listing your property with us.",
    },
    {
      title: "How can I contact an Estatein agent?3",
      description:
        "Discover the different ways you can get in touch with our experienced agents.",
    },
  ];
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
