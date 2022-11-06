import React from 'react';
import { MoonIcon } from '@heroicons/react/24/solid';
import { SunIcon } from '@heroicons/react/24/solid'

export default function Mode_mob({ dark_mode, DarkMode }) {
  return (
    <div className='mode cursor-pointer tool  group 
     md:relative md:hidden
      ' onClick={DarkMode}>
      <small className=' hidden absolute mt-[-20px] -ml-[20px] w-[100px] text-[13px]  group-hover:block  ease-in-out duration-300  font-bold text-lightprim'>{!dark_mode ? 'Night mode' : 'Day mode'}</small>
      {dark_mode ?
        <SunIcon className='w-[30px] md:w-[30px] fill-primary dark:fill-secondary animate-pulse' /> :
        <MoonIcon className='w-[26px] md:w-[26px] fill-primary dark:fill-secondary animate-pulse' />}
    </div>
  )
}
