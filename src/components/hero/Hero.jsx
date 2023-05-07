
import React from 'react';
import Btn from '../btn/Btn';
import Tools from '../tools/Tools';
import { motion } from "framer-motion";

export default function Hello() {
  return (

    <section id='hero' className="hero bg-primary min-h-[100vh] flex flex-col items-center justify-between pt-[45px] lg:pt-0 overflow-hidden relative after:hidden before:hidden   md:after:block md:before:block  ">

      {/* Main content container */}
      <div className="main hero-container flex  h-[80vh] sm:h-[75vh] lg:h-[80vh]  max-w-[85%]   md:pl-[20px] 2xl:pl-[150px] 3xl:pl-[170px]  sm:py-20  lg:py-0 ">
        <div className="desc flex flex-col items-start justify-center lg:py-14 lg:px-[120px] 2xl:lg:px-[0px] sm:py-20">
          <motion.div className="intro text-left" initial={{ x: -10, opacity: 0.3 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}>
            <h2 className='mb-[5px] font-medium text-[18px] text-[white]
            lg:text-[25px]  3xl:text-[28px]
               '>Hi, I'm</h2>
            <h1 className='name text-[white] opacity-60 text-2xl sm:text-3xl lg:text-2xl 2xl:text-3xl leading:lg  mb-8 lg:mb-8       
                  '>Ajimati Taiye,</h1></motion.div>
          <motion.h1 initial={{ x: 10, opacity: 0.3 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}

            className='header font-700  text-[white] text-left mb-2 leading-10 sm:text-5xl 2xl:text-7xl xl:max-w-[75%] 2xl:max-w-[70%] lg:leading-[60px] 2xl:leading-[90px] tracking-normal ' >I <span
              className='text-green'>Design</span>  & <span className='text-green'>Build</span>  Web Based Software Solutions!</motion.h1>
          <motion.p initial={{ x: -10, opacity: 0.8 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="body text-green text-sm  text-left lg:text-md 2xl:text-lg md:max-w-[600px] 2xl:max-w-[60%]   mb-10 xl:mb-14 2xl:mb-24
               ">I’m a  software engineer with focus in frontend development and I occassionly design products & sevices with great user experience and accessibility. </motion.p>

          <Btn />
        </div>

      </div>

      <Tools />
    </section>
  )
}

