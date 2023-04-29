import React from "react";
import Hero from "../components/Hero";
import Testimonial from "../components/Testimonial";
import Concept from "../components/Concept";
import Science from "../components/Science";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <Concept />
      <Science />
      <Testimonial />
    </main>
  );
};

export default HomePage;
