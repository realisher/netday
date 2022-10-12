import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div id="home" className='hero-container'>
        
      <h1>NETWORKING DAY</h1>
      <p>What are you waiting for?</p>
      <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
         Register Now
        </Button>
   
    </div>
  );
}

export default HeroSection; 