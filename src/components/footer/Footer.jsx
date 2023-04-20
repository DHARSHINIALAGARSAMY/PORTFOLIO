import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <div className='footer__container'>
      <a href="#home" className="footer__logo">Contact Information</a>
      <h4 className='email'>Email: <span>dharshualagar@gmail.com</span></h4>
      <h4 className='phone'>Phone: <span>+91 9944067816</span></h4>
      {/* <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>

        <li><a href="#contact">Contact</a></li>
      </ul> */}
      <div className="footer__socials">
      <a href="www.linkedin.com/in/dharshinialagarsamy" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/DHARSHINIALAGARSAMY?tab=repositories-" target="_blank" rel="noreferrer" ><FaGithub /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; All rights reserved.</small>
      </div>
      </div>
    
    </footer>
  )
}

export default Footer