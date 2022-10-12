import React from 'react';
import '../../App.css';
import About from '../About';
import Awards from '../Awards';
import HeroSection from '../HeroSection';
import Partners from '../Partners';



function Home() {
  return (
    <>
      <HeroSection /> 
      <About/>
      <Awards/>
      <Partners/>

    </>
  );
}

export default Home;