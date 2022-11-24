import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Hero from './components/hero/Hero';
import Nav from './components/nav/Nav';
import logo from './img/logo.svg';
import SideNav from './components/nav/SideNav';
import Socials from './components/socials/Socials';
import hamburger from './img/hamburger.svg';
import close from './img/close.svg';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import './App.css';
import ScrollToTop from "react-scroll-to-top";
import { ChevronUpIcon } from '@heroicons/react/24/solid'
import Projects from './components/projects/Projects';
import Footer from './components/footer/Footer';
import SocialsMob from './components/socials/SocialsMob';
import Test from './components/test/Test';
// import Contact from './components/contact/Contact';




function App() {

  const [toggle, setToggle] = useState(true);

  function toggleMenu() {
    setToggle(prev => !prev);
  }

  const [project, setProject] = useState(0);

  function activeProject(index) {
    if (project === index) {
      return setProject(1)
    }
    setProject(index)
  }
  const [shadow, setShadow] = useState(false);
  function NavShadow() {
    if (window.scrollY >= 120) {
      setShadow(true)
    } else {
      setShadow(false)
    }
  }
  window.addEventListener('scroll', NavShadow)




  return (
    <main className="App relative ">
      {/* <Nav
        toggle={toggle}
        toggleMenu={toggleMenu}
        setToggle={setToggle}
      /> */}
      <div className="navi z-[200]">
        <SideNav
          toggle={toggle}
          toggleMenu={toggleMenu}
          setToggle={setToggle}
        /></div>

      < Hero />
      <About />
      <Experience />
      <Projects
        project={project}
        activeProject={activeProject} />
      <Footer />
      {/* <SocialsMob /> */}
      <Socials />
      {/* <Test/> */}
      <ScrollToTop style={{ color: '#00007A', }} smooth component={<ChevronUpIcon />} />
      {!toggle &&
        <div className="overlay bg-primary opacity-[0.8]  absolute top-0 left-0 right-0 bottom-0 " onClick={toggleMenu}></div>}

      {/* Hamburger */}
      <div className={shadow ? "topNav   fixed bg-primary  top-0 py-4 right-0  lg:hidden  w-screen flex items-center justify-between px-6 sm:px-24  md:px-[55px] NavShadow  shadow-2xl " : "topNav   fixed bg-primary b top-0 py-4 right-0  lg:hidden  w-screen flex items-center justify-between px-6 sm:px-24 md:px-[44px]  "}>
        <div className="logo  opacity-50">
          <img className='w-10' src={logo} alt="logo" />
        </div>
        <div className="toggles " onClick={toggleMenu}  >
          {toggle ?
            <img className='lg:hidden w-[30px]   cursor-pointer' src={hamburger} alt="hamburger" /> :
            <img className='lg:hidden w-[27px]   cursor-pointer' src={close} alt="close-menu" />}

        </div>
      </div>


    </main>


  );
}

export default App;
