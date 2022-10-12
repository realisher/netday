import React from 'react';
import '../App.css';
import './Partners.css';
import Item from './Item';

function Partners() {
  return (
    <div id="partners" className='partners'>
       <h1 >Partners</h1>
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