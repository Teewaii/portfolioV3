import React, { useState } from 'react';
import {Link,Element} from "react-scroll"
import logo from '../../img/logo.svg';
import hamburger from '../../img/hamburger.svg';
import close from '../../img/close.svg';
import Btn from '../btn/Btn';
import * as Scroll from 'react-scroll';


export default function Nav({ toggle, toggleMenu,setToggle }) {
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

    <nav className={shadow ? ' bg-primary sticky left-0 right-0 shadow-xl z-[2000] top-0 NavShadow  ' : ' bg-primary  sticky left-0 right-0  z-[2000]  top-0 NavShadow'} >

      <div className='navContainer container flex items-center  justify-between py-[20px] md:py-[30px] 3xl:py-[45px] '>
        <div className="logo cursor-pointer relative z-[90] ">
         <Link to='hero'  spy={true} smooth={true} offset={0} duration={300}><img className='w-[40px] lg:w-[50px] ' src={logo} alt="logo" /></Link> 

        </div>
        <div className="links z-40 ">
          <ul className={toggle ? 'hidden  md:bg-opacity-0 flex-col items-start  gap-[20px] absolute top-0 left-0 right-0 pt-[128px] pb-[44px]  md:flex md:gap-[30px] md:flex-row md:relative md:p-0 ' : '  flex flex-col items-start  bg-[white]  md:bg-[inherit] absolute top-0 left-0 right-0 pt-[128px] pb-[44px]  md:flex md:gap-[30px] md:flex-row md:relative md:p-0'} onClick={()=>setToggle(true)}>

            <li className='block  text-left mt-[20px] text-primary  font-medium border-b-[0.4px] border-opacity-[0.5] border-lightprim pb-[20px] w-[100%] hover:border-b-[1.5px]  hover:border-b-primary hover:w-[80%] ease-in-out duration-300 
              md:text-[white]  md:border-b-0 md:pb-0 md:mt-0 md:hover:border-b-0 cursor-pointer
              ' ><Link to='about' className=' ml-[40px] lg:ml-[0px]' activeClass="active"   spy={true} smooth={true} offset={10} duration={500} onClick={()=>setToggle(true)}  >About</Link> </li>
           
            <li className='block  text-left mt-[20px] text-primary font-medium border-b-[0.4px] border-opacity-[0.5] border-lightprim pb-[20px] w-[100%] hover:border-b-[1.5px]  hover:border-b-primary hover:w-[80%] ease-in-out duration-300 
              md:text-[white]   md:border-b-0 md:pb-0 md:mt-0 md:hover:border-b-0 cursor-pointer' ><Link to='experience' activeClass="active"   spy={true} smooth={true} offset={10} duration={300} className=' ml-[40px]' onClick={()=>setToggle(true)} >Experience</Link></li>
            <li className='block  text-left mt-[20px]  text-primary  font-medium border-b-[0.4px] border-opacity-[0.5] border-lightprim pb-[20px] w-[100%] hover:border-b-[1.5px]  hover:border-b-primary hover:w-[80%] ease-in-out duration-300 
               md:text-[white]  md:border-b-0 md:pb-0 md:mt-0 md:hover:border-b-0 cursor-pointer' ><Link to='projects' activeClass="active"   spy={true} smooth={true} offset={10} duration={300} className=' ml-[40px]' onClick={()=>setToggle(true)}>Projects</Link></li>
           
           <li className='block  text-left mt-[20px]  text-primary  font-medium border-b-[0.4px] border-opacity-[0.5] border-lightprim pb-[20px] w-[100%] hover:border-b-[1.5px]  hover:border-b-primary hover:w-[80%] ease-in-out duration-300 
               md:text-[white]  md:border-b-0 md:pb-0 md:mt-0 md:hover:border-b-0 cursor-pointer' ><Link to='footer'  activeClass="active"   spy={true} smooth={true} offset={50} duration={300} className=' ml-[40px]' onClick={()=>setToggle(true)}>Contact</Link></li>
            
            <li className='block  text-left mt-[20px]   text-primary  font-medium border-b-[0.4px] border-opacity-[0.5] border-lightprim pb-[20px] w-[100%] hover:border-b-[1.5px]  hover:border-b-primary hover:w-[80%] ease-in-out duration-300 
                md:text-[white] md:border-b-0 md:pb-0 md:mt-0 md:hover:border-b-0 cursor-pointer' ><Link to='#' activeClass="active"   spy={true} smooth={true} offset={10} duration={300} className=' ml-[40px]' onClick={()=>setToggle(true)}>Resume</Link></li>

            <div className="hello scale-[0.8] ml-[20px] mt-[20px] md:hidden">
              {/* <button className='btn-small  hover:bg-secondary hover:text-primary duration-300 ease-in-out' >Say hello!</button> */}

            </div>

          </ul>

        </div>
        <div className="icon space-x-8 flex items-center z-[90] md:hidden ">

          <div className="toggles md:hidden relative z-[290]" onClick={toggleMenu}  >
            {toggle ?
              <img className='md:hidden w-[28px]   cursor-pointer' src={hamburger} alt="hamburger" /> :
              <img className='md:hidden w-[25px]   cursor-pointer' src={close} alt="close-menu" />}

          </div>
        </div>
      </div>

    </nav>

  )
}
