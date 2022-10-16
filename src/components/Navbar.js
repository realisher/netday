import React, {useState, useEffect} from 'react'
import { HashLink } from 'react-router-hash-link'
import { Button } from './Button';
import './Navbar.css'

function Navbar() {
  const [click, setClick] = useState(false);

  const [button, setButton] = useState(true)

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth<=960){
      setButton(false)
    } else{
      setButton(true)
    }
  };

  useEffect(() => {
    showButton();
  },[]);

  const scrollWithOffsetPartners = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -250; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
}

const scrollWithOffsetSchedule= (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -80; 
  window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
}

  window.addEventListener('resize', showButton);

  return (
    <>
    <nav className='navbar'>
      <div className='navbar-container'>
        <HashLink to="#top" className='navbar-logo' spy={true} smooth={true} offset={500} duration={500} onClick={closeMobileMenu}>
        <img src="images/logo.png" alt='netday'/> 
        </HashLink>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
          <HashLink  to="/#about"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}  className='nav-links' onClick={closeMobileMenu}>
              What is?
            </HashLink>
          </li>
          <li className='nav-item'>
            <HashLink to='/#info'  className='nav-links' scroll={el => scrollWithOffsetSchedule(el)} onClick={closeMobileMenu}>
              Schedule
            </HashLink>
          </li>
          <li className='nav-item'>
            <HashLink to='/#awards' className='nav-links' spy={true} smooth={true} offset={-100} duration={500} onClick={closeMobileMenu}>
              Awards
            </HashLink>
          </li>
          <li className='nav-item'>
            <HashLink  to="/#partners"
              smooth={true}
              duration={500}
              spy={true}
              scroll={el => scrollWithOffsetPartners(el)}
               className='nav-links' onClick={closeMobileMenu}>
              Partners
            </HashLink>
          </li>
          <li className='nav-item'>
            <HashLink to='/#contacts' smooth={true}
              duration={500}
              spy={true}
              offset={-80}  className='nav-links' onClick={closeMobileMenu}>
              Contacts
            </HashLink>
          </li>
          <li className='nav-item'>
            <HashLink to='/#registr' className='nav-links-mobile' onClick={closeMobileMenu}>
              Register
            </HashLink>
          </li>
        
        </ul>
        {button && <Button  buttonStyle='btn--outline'>Register</Button>}
      </div>
    </nav>
    </>
  )
}

export default Navbar;
