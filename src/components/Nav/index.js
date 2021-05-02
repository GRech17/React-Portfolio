import React from 'react';
import {capitalizeFirstLetter} from '../../utils/helpers';

function Nav (props) {
    const  { navTab = [], setCurrentNavTab, currentNavTab, setCurrentMobile, currentMobile} = props;
    
    return (
        <header id='header'>
            <div className='d-flex flex-row'>
                <h1 className='text-light'>
                <a href='/'>Gabriel Reches</a>
                </h1>
            </div>

            <nav className='nav-menu'>
                <ul className='flex-row'>
                    <li className={`mx-1 ${currentNavTab === 'About' ? 'navActive' : ''}`}>
                        <a href='#about' 
                        onClick={() => setCurrentNavTab('About')}>
                        About</a>
                    </li>
                    
                    <li className='mx-2'>
                        <a href='#projects' onClick={() => setCurrentNavTab('Projects')}>
                        Projects</a>
                    </li>

                    <li className='mx-2'>
                        <a href='#resume' onClick={() => setCurrentNavTab('Resume')}>
                        Resume</a>
                    </li>

                    <li className='mx-2'>
                        <a href='#contact' onClick={() => setCurrentNavTab('Contact')}>
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
        </header>
    )
}

export default Nav;