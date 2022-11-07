import React from 'react';
import links from './navLink'
import icon from '../../img/home.svg';
import logo from '../../img/logo.svg';
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'




export default function sideNav({ toggle, toggleMenu, setToggle }) {
  return (
    <nav className='fixed bg-navbg text-[white] w-fit pl-8 h-[100vh] py-[5rem] space-y-16 md:space-y-20  group z-50 '>
      <div className="logo  border pl-6">
        <img className='w-14 md:w-20  ease-in-out duration-300' src={logo} alt="logo" />
      </div>
      <ul className='flex flex-col items-start pl-4 space-y-2 md:space-y-4 relative   '>
        {links.map((item, id) => (
          //<li className='flex flex-row  gap-4 border'><a href="#"><div><img className='inline' src={item.icon} alt="" /></div>{item.title}</a></li>
          <li key={id} className='linc focus:bg-green border pl-6 py-5  ease-in-out duration-150  pr-12  rounded-tl-md rounded-bl-md w-[100%] '><a href={item.anchor} className='flex gap-6 border cursor-pointer focus:bg-primary  '><img className='inline border' src={item.icon} alt="" /> <p className='text-sm uppercase lg:text-lg w-[100%] hidden group-hover:inline-flex   '>{item.title}</p></a></li>

        ))}

      </ul>

    </nav>
  )
}

