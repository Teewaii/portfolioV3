import React from 'react';
import links from './navLink'
import hamburger from '../../img/hamburger.svg';
import close from '../../img/close.svg';
import icon from '../../img/home.svg';
import logo from '../../img/logo.svg';
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { useState } from 'react';
import { motion } from "framer-motion";
import resumeIcon from '../../img/resume.svg';


// import homeIcon from '../../img/home.svg';
// import AboutIcon from '../../img/About.svg';
// import experienceIcon from '../../img/experience.svg';
// import projectIcon from '../../img/project.svg';
// import contactIcon from '../../img/cont.svg';




export default function SideNav({ toggle, toggleMenu, setToggle }) {
  const [focusItem, setFocusItem] = useState(0)

  function FocusItem(index) {
    if (focusItem === index) {
      return setFocusItem(1)

    }
    setFocusItem(index)

  }

  return (
    <nav onClick={() => setToggle(true)} className={toggle ? 'hidden  lg:block fixed top-0 bottom-0 bg-navbg text-[white] max-w-[150px] hover:max-w-[230px] ease-in-out duration-300 pl-8 h-[100vh] py-[5rem] space-y-16 md:space-y-20 2xl:space-y-28  group z-[90000] ' : 'fixed top-0 bottom-0 bg-navbg text-[white] w-fit pl-20 h-[100vh] py-[2rem] lg:py-[5rem] space-y-16 md:space-y-20 2xl:space-y-28 group z-50 '}>

      <div className="navwrapper flex flex-col items-center gap-20 ">
        <div className="logo flex justify-start lg:block w-[100%] lg:w-fit opacity-40 group-hover:opacity-60 pl-2  duration-150 ease-in-out">
          <a href="#hero"><img className='w-14  2xl:w-18  ease-in-out duration-300' src={logo} alt="logo" /></a>
        </div>

        <ul className='flex flex-col items-start pl-4 space-y-2 2xl:space-y-5 relative '>
          {/* 
Mapping through the navigation list items */}
          {links.map((item, index) => (

            <li onClick={() => FocusItem(index)} key={item.id} className={focusItem === index ? 'bg-primary pl-6   hover:bg-primary  ease-in-out duration-300 rounded-tl-md rounded-bl-md w-[100%] lg:pr-8 pr-2' : 'linc  pl-6  hover:bg-primary  ease-in-out duration-150  rounded-tl-md rounded-bl-md w-[100%] '}><a href={item.anchor} className='flex items-center gap-7 cursor-pointer focus:bg-primary lg:py-3 2xl:py-4 group-hover:py-0  '><img className='h-5 lg:h-4 2xl:h-5 inline ' src={item.icon} alt="nav-item-icon" /> <p className='text-sm uppercase 2xl:text-md w-[100%] py-3 lg:py-3 2xl:py-4 group-hover:flex item-start pr-8 flex lg:hidden ease-in-out duration-300    '>{item.title}</p></a></li>

            //  <li onClick={() => FocusItem(index)} key={item.id} className={focusItem === index ? 'bg-primary pl-6 py-3 lg:py-3 2xl:py-4  hover:bg-primary  ease-in-out duration-300 rounded-tl-md rounded-bl-md w-[100%]  pr-8 ' : 'linc  pl-6 py-3 lg:py-3 2xl:py-4 hover:bg-primary  ease-in-out duration-150  rounded-tl-md rounded-bl-md w-[100%] pr-8'}><a href={item.anchor} className='flex gap-7 cursor-pointer focus:bg-primary '><img className='h-5 lg:h-4 2xl:h-5 inline ' src={item.icon} alt="" /> <p className='text-sm uppercase 2xl:text-md w-[100%] group-hover:flex item-start pr-8 hidden  '>{item.title}</p></a></li>

          ))}
          <li className='bg-nav pl-6  hover:bg-primary  rounded-tl-md rounded-bl-md w-[100%] lg:pr-8 pr-2'><a href='/Taiye Ajimati_FED.pdf' download='Taiye Ajimati Resume' className='flex items-center gap-7 cursor-pointer lg:py-3 2xl:py-4 group-hover:py-0  '><img className='h-5 lg:h-4 2xl:h-5 inline ' src={resumeIcon} alt="" /> <p className='text-sm uppercase 2xl:text-md w-[100%] py-3 lg:py-3 2xl:py-4 group-hover:flex item-start pr-8 flex lg:hidden ease-in-out duration-300'>Resume</p></a></li>
        </ul>
      </div>
    </nav >
  )
}

