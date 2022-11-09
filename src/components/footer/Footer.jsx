import React from 'react';
import Nav from '../nav/Nav';
// import Btn_sec from '../btn/Btn-sec';
import Email from '../btn/Email';
import { motion } from "framer-motion";


export default function Footer() {
  return (
    <section id='footer' className=' bg-primary relative py-[2rem] min-h-[50vh]
    2xl:min-h-[40vh]  lg:py-[1rem] 
    '>
      <div className="footer-wrapper flex flex-col items-center 
      lg:pl-[120px] 2xl:lg:pl-[0px]  
      ">
        <motion.div className="hello"
          initial={{ y: -70 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5 }}>
          <h1 className='text-secondary font-normal text-[2rem]   lg:text-4xl '>Say <span className='opacity-[0.6]'>Hello</span>!</h1>
          <p className='text-secondary mb-[42px] text-[0.8rem] w-[250px] md:w-[600px] md:text-lg opacity-50 text-center'>Get in touch and discover how I can contribute to the growth of your business and team.</p>
        </motion.div>
        <motion.div className='next flex flex-col items-center pb-[80px]  lg:pb-[0px] '
          initial={{ y: 70 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="circle rounded-full w-[50px] h-[50px] border-[2px] animate-bounce border-green flex items-center justify-center">
            <span><svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.79289 15.5624C7.18342 15.9529 7.81658 15.9529 8.20711 15.5624L14.5711 9.19841C14.9616 8.80788 14.9616 8.17472 14.5711 7.78419C14.1805 7.39367 13.5474 7.39367 13.1569 7.78419L7.5 13.441L1.84315 7.78419C1.45262 7.39367 0.819456 7.39367 0.428932 7.78419C0.0384075 8.17472 0.0384074 8.80788 0.428932 9.19841L6.79289 15.5624ZM6.5 0.710525L6.5 14.8553L8.5 14.8553L8.5 0.710526L6.5 0.710525Z" fill="#D6E869" />
            </svg>
            </span>
          </div>
          <Email />
        </motion.div>

        <div className="copywright opacity-50 border-t w-[100%] border-secondary border-opacity-30 pt-7 lg:mt-[50px]">
          <p className='text-secondary text-[0.7rem] lg:text-sm'>Designed & Developed by Taiye Ajimati</p>
          <small className='text-secondary text-[0.7rem] md:text-[0.9rem]'>taiyeajimati@gmail.com</small>
        </div>
      </div>

    </section >
  )
}