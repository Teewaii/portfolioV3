import React from 'react';
import links from './navLink'
import hamburger from '../../img/hamburger.svg';
import close from '../../img/close.svg';
import icon from '../../img/home.svg';
import logo from '../../img/logo.svg';
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { useState } from 'react';


import homeIcon from '../../img/home.svg';
import AboutIcon from '../../img/About.svg';
import experienceIcon from '../../img/experience.svg';
import projectIcon from '../../img/project.svg';
import contactIcon from '../../img/contact.svg';
import resumeIcon from '../../img/resume.svg';

export default function SideNav({ toggle, toggleMenu, setToggle }) {
  const [focusItem, setFocusItem] = useState(0)

  function FocusItem(index) {
    if (focusItem === index) {
      return setFocusItem(1)

    }
    setFocusItem(index)

  }

  return (
    <nav className={toggle ? 'hidden lg:block fixed top-0 bottom-0 bg-navbg text-[white] w-fit pl-8 h-[100vh] py-[5rem] space-y-16 md:space-y-20  group z-50 ' : 'fixed top-0 bottom-0 bg-navbg text-[white] w-fit pl-8 h-[100vh] py-[2rem] lg:py-[5rem] space-y-16 md:space-y-20  group z-50 '}>
      <div className="logo opacity-20 group-hover:opacity-60 pl-2 group-hover:pl-12 duration-150 ease-in-out">
        <img className='w-14 md:w-20  ease-in-out duration-300' src={logo} alt="logo" />
      </div>
      <ul className='flex flex-col items-start pl-4 space-y-2 md:space-y-4 relative  '>

        {links.map((item, index) => (
          <li onClick={() => FocusItem(index)} key={item.id} className={focusItem === index ? 'bg-primary pl-6 py-5 hover:bg-primary  ease-in-out duration-150 rounded-tl-md rounded-bl-md w-[100%] pr-  md:pr-12 group-hover:pr-0 ' : 'linc  pl-6 py-5 hover:bg-primary  ease-in-out duration-150  rounded-tl-md rounded-bl-md w-[100%] pr-12 group-hover:pr-0  '}><a href={item.anchor} className='flex gap-7 cursor-pointer focus:bg-primary '><img className='h-8 w-8 inline' src={item.icon} alt="" /> <p className='text-sm uppercase lg:text-lg w-[100%] group-hover:flex item-start   pr-12  hidden  duration-300 ease-in-out '>{item.title}</p></a></li>

        ))}

      </ul>

    </nav >
  )
}

