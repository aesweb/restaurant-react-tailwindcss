<<<<<<< HEAD
import React from 'react';

import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Team from './components/Team';
import Testimonial from './components/Testimonial';
import Reservation from './components/Reservation';
import Footer from './components/Footer';
=======
import React from "react";
// import components
import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Reservation from "./components/Reservation";
import Team from "./components/Team";
import Testimonial from "./components/Testimonial";
>>>>>>> 843f3815c048e3bde61404b9cd2b6118891695ec

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
