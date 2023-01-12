import React from "react";
// import components
import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Reservation from "./components/Reservation";
import Team from "./components/Team";
import Testimonial from "./components/Testimonial";

const App = () => {
  return (
    <div className="h-full bg-pattern bg-repeat  overflow-hidden">
      <Hero />
      <About />
      <Menu />
      <Team />
      <Testimonial />
      <Reservation />
      <Footer />
      <div className="h-[380px] md:h-[370px]"></div>
    </div>
  );
};

export default App;
