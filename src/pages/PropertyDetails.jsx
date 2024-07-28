import React from "react";
import Testimonials from "../components/Home Comp/Testimonials";

const PropertyDetails = ({ testData }) => {
  return (
    <div>
      <Testimonials testData={testData} />
    </div>
  );
};

export default PropertyDetails;
