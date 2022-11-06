import React from 'react';
import links from './navLink'
import icon from '../../img/home.svg';
import { Link } from 'react-scroll';


export default function sideNav() {
  return (
    <nav className='bg-primary text-[white] w-[80vw] lg:w-[100vw]  '>
    <div className="logo"></div>
      <ul className='flex flex-col items-start  space-y-6'>
        {links.map((item,id)=>(
    //<li className='flex flex-row  gap-4 border'><a href="#"><div><img className='inline' src={item.icon} alt="" /></div>{item.title}</a></li>
    <li className=' w-[100%]  '><Link to={item.anchor} className='flex space-x-6 ml-10  cursor-pointer'><img className='inline' src={item.icon} alt="" /> <p className='text-sm uppercase lg:text-lg'>{item.title}</p></Link></li>
    
        ))}
      
      </ul>
      
    </nav>
  )
}

