import React from 'react';
import {AiFillGithub} from 'react-icons/ai';
import {AiFillLinkedin} from 'react-icons/ai';
import profPic from '../../imgs/profpic.jpg';


function Header(props) {
    return (
        <header id='header'>
            <div className='flex-row'>
                <div className='profile'>
                    <img src={profPic} alt='profile pic' className='img-fluid rounded-circle' />
                    <h1 className='text-light'>
                        <a href=''>Gabriel Reches</a>
                    </h1>
                    <div className='social-links mt-3 text-center'>
                        <a  href="https://github.com/Grech17"
                        target="blank"
                        className="github">
                        <i className='bx bxl-github' alt=''>
                            <AiFillGithub />
                        </i>
                        </a>
                        <a  href="www.linkedin.com/in/gir98"
                        target="blank"
                        className="linkedin">
                        <i className='bx bxl-linkedin' alt=''>
                            <AiFillLinkedin />
                        </i>
                        </a>
                        
                    </div>
                </div>    
            

            <button type='button' className='mobile-nav-toggle d-xl-none'>
                <i className='icofont-navigation-menu'></i>
            </button>
            </div>
        </header>
    );
}

export default Header;