import React from 'react';
import '../../App.css';
import About from '../About';
import Awards from '../Awards';
import HeroSection from '../HeroSection';
import Partners from '../Partners';
import EventInformation from '../eventInformation';
import Places from '../Places';
import RegistrationForm from '../registrationForm';



function Home() {
  return (
    <>
      <HeroSection /> 
      <About/>
      <EventInformation/>
      <Awards/>
      <Places/>
      <RegistrationForm/>
      <Partners/>

    </>
  );
}

export default Home;