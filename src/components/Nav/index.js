import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import profPic from '../../imgs/profpic.jpg';

function Nav (props) {
    const  { nav = [], setCurrentNav, currentNav, setCurrentMobile, currentMobile} = props;
    
    return (
        <header id='header'>
            <div className='flex-row'>
            <div className="profile">
          <img src={profPic} alt="" className="img-fluid rounded-circle" />
          <h1 className="text-light">
            <a href="index.html">Gabriel Reches</a>
          </h1>
          <div className="social-links mt-3 text-center">
            <a
              href="https://github.com/Grech17"
              target="blank"
              className="github">
              <i className="bx bxl-github" alt="">
                <AiFillGithub />
              </i>
            </a>
            <a
              href="https://www.linkedin.com/in/gir98"
              target="blank"
              className="linkedin">
              <i className="bx bxl-linkedin">
                <AiFillLinkedin />
              </i>
            </a>
          </div>
          </div>

            <nav className='nav-menu'>
                <ul>
                    <li>
                        <a className={`mx-1 ${currentNav === 'About' ? 'navActive' : ''}`} 
                        href='#about' 
                        onClick={() => setCurrentNav('About')}>About</a>
                    </li>
                    
                    <li>
                        <a href='#portfolio' onClick={() => setCurrentNav('Portfolio')}>
                        Portfolio</a>
                    </li>

                    <li>
                        <a href='#resume' onClick={() => setCurrentNav('Resume')}>
                        Resume</a>
                    </li>

                    <li>
                        <a href='#contact' onClick={() => setCurrentNav('Contact')}>
                        Contact</a>
                    </li>
                </ul>
            </nav>
            <button type='button' className='mobile-nav-toggle d-xl-none'
            onClick={()=> setCurrentMobile(!currentMobile)}>
                 <i className={`${ currentMobile ? 
                 'icofont-close' : 'icofont-navigation-menu'}`}>
                 </i>
            </button>
            </div>
        </header>
    )
}

export default Nav;