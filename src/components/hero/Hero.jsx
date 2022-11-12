
import React from 'react';
import Btn from '../btn/Btn';
import Tools from '../tools/Tools';
import { motion } from "framer-motion";

export default function Hello() {
  return (

  <section id='hero' className="hero bg-primary min-h-[100vh] flex flex-col items-center justify-between pt-24 lg:pt-0 overflow-hidden relative after:hidden before:hidden   md:after:block md:before:block after:absolute after:top-[-10%] after:right-[-10%] after:bg-secondary after:w-[35%] after:h-[55%] after:rounded-full after:blur-3xl after:opacity-[0.08]    before:absolute before:bottom-[0] before:left-[5%] before:bg-secondary before:w-[25%] before:h-[45%] before:rounded-full before:blur-3xl before:opacity-[0.08] ">
<div className="hero-container flex  h-[80vh] sm:h-[75vh] lg:h-[80vh]  max-w-[85%]   md:pl-[20px] 2xl:pl-[150px] 3xl:pl-[110px]  sm:py-20  lg:py-0 ">
<div className="desc flex flex-col items-start justify-center lg:py-14 lg:px-[120px] 2xl:lg:px-[0px] sm:py-20">
<motion.div className="intro text-left"initial={{ x: -10,opacity:0.3 }}
      whileInView={{ x: 0,opacity:1}}
      transition={{ duration: 1 }}>
<h2 className='mb-[5px] font-medium text-[18px] text-[white]
            lg:text-[25px]  3xl:text-[30px]
               '>Hi, I'm</h2>
    <h1 className='name text-secondary text-2xl sm:text-3xl lg:text-2xl leading:lg  mb-8 lg:mb-8  opacity-40      
                  '>Ajimati Taiye,</h1></motion.div>
  <motion.h1  initial={{ x: 10,opacity:0.3 }}
      whileInView={{ x: 0,opacity:1}}
      transition={{ duration: 1 }} className='header font-700  text-[white] text-left mb-2 leading-10 sm:text-5xl 2xl:text-7xl xl:max-w-[75%] 2xl:max-w-[70%] lg:leading-[60px] 2xl:leading-[90px] tracking-normal ' >I <span className='text-green'>Design</span>  & <span className='text-green'>Build</span>  Web Based Software Solutions!</motion.h1>
  <motion.p initial={{ x: -10,opacity:0.8 }}
      whileInView={{ x: 0,opacity:0.4}}
      transition={{ duration: 1 }}
       className="body text-secondary text-sm opacity-40 text-left lg:text-md 2xl:text-lg md:max-w-[600px] 2xl:max-w-[60%]   mb-10 xl:mb-14 2xl:mb-24
               ">I’m a  software engineer with focus in frontend development and I occassionly design products & sevices with great user experience and accessibility. </motion.p>

<Btn />
</div>

</div>

<Tools/>
  </section>
  )
}


// <section id='home' className='hero min-h-[100vh]
// lg:h-[91vh] 2xl:lg:h-[95vh] relative after:absolute    
// after:right-0 after:z-[-1] after:opacity-[0.2] 

// '>

// <div className="hero-wrapper flex items-center bg-primary pt-[20px] h-[78vh] 

// lg:h-[80vh] 2xl:h-[78vh] lg:pt-0   ">
//   {/* lg:h-[85%] lg:pt-[10px] 2xl:pt-[50px]  "> */}
//   <div className="bucket container lg:min-w-[200px] ">

//     <div className="desc text-left lg:flex-[1.7]  overflow-x-hidden ">
//       <h2 className='mb-[5px] font-medium text-[18px] text-[white]
//               lg:text-[25px]  3xl:text-[30px]
//               '>Hi, my name is</h2>

//       <h1 className='name text-secondary text-[1.8rem] mb-[12px] relative  inline-block pr-[3px]                   
//                  md:text-[2.5rem] md:mb-[18px] 2xl:mb-[26px]  xl:text-[3.5rem]  bg-primary                
//                  '>Ajimati Taiye,</h1>
//       <h1 className='header font-700 job   text-[2rem] relative text-[white]  leading-[2.4rem]
//     mb-[10px] lg:mb-[20px] md:text-[3rem] 2xl:text-[5.3rem] md:leading-[3.8rem] 2xl:leading-[6rem] lg:w-[1200px]
     
//      ' >I <span className='text-green'>Design</span>  & <span className='text-green'>Build</span>  Web Based Software Solutions!</h1>
//       <p className="body text-[0.9rem] md:text-[1.2rem] mb-[40px] text-secondary opacity-75 font-light leading-[1.3rem]
//               md:w-[85%]   2xl:text-[1.5rem]  2xl:w-[75%] md:mb-[50px] 2xl:mb-[90px] md:leading-[1.8rem] 2xl:leading-[2.2rem]
//               tracking-wider
//               ">I’m a  software engineer with focus in frontend development and I occassionly design products & sevices with great experience and accessibility. </p>
//       <Btn />
//     </div>
//   </div>
// </div>
// <div className="tools">
// <Tools/>
// </div>
// </section>