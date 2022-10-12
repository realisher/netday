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
                    src="images/part78.jpg"

                    />
                    <Item
                    src="images/part11.png"
                    
                    />
                    <Item
                    src="images/part77.png"
                    
                    />
                    <Item
                    src="images/part44.png"
                    
                    />
                    <Item
                    src="images/part32.jpg"
                   
                    />
                   
                </ul>
                
                
            </div>
        </div>
    </div>
  );
}

export default Partners;