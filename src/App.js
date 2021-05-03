import React, { useState } from 'react'
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
// import Intro from './components/Intro';
import About from './components/About';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';


function App() {
  const [nav] = useState(['About', 'Portfolio', 'Resume', 'Contact']);
  const [currentMobile, setCurrentMobile] = useState(false);
  const [currentNav, setCurrentNav] = useState(nav[0]);

  return (
    <div className={`${currentMobile ? 'mobile-nav-active' : ''}`}>
      <Header />
      <Nav 
      nav={nav}
      currentNav={currentNav}
      currentMobile={currentMobile}
      setCurrentMobile={setCurrentMobile}
      setCurrentNav={setCurrentNav}/>

      <main>
      {/* <Intro /> */}

      {currentNav === 'About' ? (
        <About />
      ) : currentNav === 'Portfolio' ? (
        <Portfolio />
      ) : currentNav === 'Resume' ? (
        <Resume />
      ) : currentNav === 'Contact' ? (
        <Contact />
      ) : (
        <About />
      )}
       <Footer />
      </main>  
    </div>
  );
}

export default App;
