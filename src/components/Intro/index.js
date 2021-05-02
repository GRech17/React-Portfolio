import React from 'react';
import {FcEnteringHeavenAlive} from 'react-icons/fc';


function Intro () {
    let iconStyle={color:'black'}
    return (
        <section id='intro'>
            <h1 className='Fname'>Gabriel</h1>
            <h1 className='Lname'>Reches</h1>
            <a href='#about'>
            <button id='enterBtn'>
              <FcEnteringHeavenAlive style={iconStyle}/>
            </button>
            </a>
            <h4 id='role'>Full Stack Developer.</h4>
        </section>
    )
}

export default Intro;