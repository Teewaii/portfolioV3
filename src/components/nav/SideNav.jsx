import React from 'react';
import links from './navLink'
import icon from '../../img/home.svg';
import { Link } from 'react-scroll';


export default function sideNav() {
  return (
    <nav className='bg-primary text-[white] w-[80vw] lg:w-[100vw] py-[10rem]  '>
    <div className="logo"></div>
      <ul className='flex flex-col  items-start pl-10 space-y-6'>
        {links.map((item,id)=>(
    //<li className='flex flex-row  gap-4 border'><a href="#"><div><img className='inline' src={item.icon} alt="" /></div>{item.title}</a></li>
    <li className='pr border   '><Link to={item.anchor} className='flex bg-green gap-6 cursor-pointer'><img className='inline' src={item.icon} alt="" /> <p className='text-sm uppercase lg:text-lg'>{item.title}</p></Link></li>
    
        ))}
      
      </ul>
      
    </nav>
  )
}

