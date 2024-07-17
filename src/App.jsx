import React from "react";
import NavigationBar from "./components/NavigationBar";
import { Route, Routes } from "react-router-dom";
import Home from "../src/pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import PropertyDetails from "./pages/PropertyDetails";
import Properties from "./pages/Properties";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-main 4xl:mx-auto 4xl:w-[75%]">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/properties" element={<Properties />} />
        <Route
          path="/properties/propertyDetails"
          element={<PropertyDetails />}
        />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
