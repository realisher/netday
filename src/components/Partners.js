import React from 'react';
import '../App.css';
import './Partners.css';
import Item from './Item';

import line from '../assets/images/hr-line.png'

function Partners() {
  return (
    <div id="partners" className='partners'>
       <h1 >PARTNERS</h1>
       <div className="flex justify-center">
                        <img src={line} alt="hr-line" className="w-1/3 mb-10"/>
                    </div>
        <div className='cards__conteiner'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <Item
                    src="images/part1.jpg"

                    />
                    <Item
                    src="images/part2.png"
                    
                    />
                    <Item
                    src="images/part3.png"
                    
                    />
                    <Item
                    src="images/part4.png"
                    
                    />
                    <Item
                    src="images/part5.jpg"
                   
                    />
                   
                </ul>
                
                
            </div>
        </div>
    </div>
  );
}

export default Partners;