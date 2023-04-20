import React from 'react';
import HeaderSocials from './HeaderSocials';
import './header.css';
import CTA from './CTA';
import Text from './Text';


const Header = () => {
  return (
    <header id="home">
      
      {/* <ul className="navigate">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>  */}

      {/* <div className='logo_Dar'>
          <img src={img9} />
      </div> */}
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <Text/>
        {/* <h1>DHARSHINI </h1> */}
        <h5 className="text-light">Front-end Developer</h5>
        <CTA />
        <HeaderSocials />
       
      </div>
    </header>
  );
};

export default Header;
