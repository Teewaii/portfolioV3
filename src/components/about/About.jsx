import React from 'react';
import right_arrow from '../../img/rightArrow.svg';
import right_down from '../../img/downArrow.svg';
import Btn_sec from '../btn/Btn-sec';
import hdshot from '../../img/shot.svg';
import { motion } from "framer-motion";
// import tools from '../about/tools'

const tools = [
  'React.js',
  'Javascript ES6',
  'Html5',
  'CSS',
  'TailwindCSS',
  'SCSS / SASS',
  'Figma',
  'Adobe Xd',
  'Github',
  'WordPress'
]

export default function About() {
  return (
    <section id='about' className='about min-h-[100vh]  flex items-center justify-center pt-[110px] pb-4 3xl:pb-0 3xl:pt-0
     md:py-[50px] lg:py-[120px] 2xl:py-[80px]  lg:min-h-[95vh]   3xl:py-[10px]
    '>
      <div className="aboutWrapper max-w-[85%] lg:max-w-[82%] 2xl:max-w-[100%] 3xl:max-w-[82%] md:pl-[20px] 2xl:pl-[50px]    flex flex-col lg:flex-row items-center justify-center  ">
        <div className='bucket flex items-center lg:pl-[120px] 2xl:pl-[0px] 3xl:max-w-[80%]   flex-col lg:items-start  gap-[50px] lg:gap-[20px]  2xl:gap-[180px]  
    lg:flex-row 
    ' >
          <div className="desc text-left flex-[1] lg:flex-[1.3] xl:flex-[1]   ">
            <h2 className=" text-primary text-[25px]  lg:text-[30px] font-medium  mb-[35px]">About <span className='text-green font-bold bg-primary rounded-full 
           px-2 py-3  lg:px-3 lg:py-4          
          ' >me!</span></h2>
            <p className='text-primary   mt-[20px] w-[95%] md:w-[100%] lg:w-[95%] leading-[25px] relative font-[300]
      border-b-[1px] border-lightprim pb-[30px] md:text-md md:leading-6
        
        '>Hi, I’m Taiye and I love building software products & services that promotes business and economic growths with great user experience and accessibility. <br /><br />

              <span className='font-bold bg-green p-1'> Over the last 10 years</span> I have worked in both the advertising and IT industry through which I have been able to demonstrate exceptional skills in graphic/product design, people management, web development and efficient problem solving.<br /> <br />

              My interest in software  development started in 2013 with visual basic. In 2016 I developed more interest in web development through which I was priviledged to work on different amazing web projects across different industries  specificaly using WordPress.<br /> <br />

              Presently, I spend most of my time building more complex and scalable projects using react and vanila Js.</p>
            <div className="toosl w-[95%] md:w-[100%]  lg:w-[100%]">
              <h1 className='tools-used text-primary  text-[18px] mt-[30px] '>Few of the tools I’ve been working with!</h1>

              <ul className='tool-list text-primary flex flex-wrap gap-[5px] md:gap-[10px] mt-[13px]'>

                {tools.map((tool) => (
                  <li key={tool} className='flex gap-[10px] items-center' ><span><svg width="18" height="12" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className='animate-pulse ' d="M9.35355 4.35355C9.54882 4.15829 9.54882 3.84171 9.35355 3.64645L6.17157 0.464466C5.97631 0.269204 5.65973 0.269204 5.46447 0.464466C5.2692 0.659728 5.2692 0.976311 5.46447 1.17157L8.29289 4L5.46447 6.82843C5.2692 7.02369 5.2692 7.34027 5.46447 7.53553C5.65973 7.7308 5.97631 7.7308 6.17157 7.53553L9.35355 4.35355ZM0 4.5H9V3.5H0V4.5Z" fill="#00007A" />
                  </svg>
                  </span>{tool}</li>
                ))

                }

              </ul>
            </div>
          </div>
          <motion.div className="hero flex flex-col space-y-6 lg:space-y-16  md:flex-[0.7] h-[100%] items-center  justify-end
       " initial={{ y: -50, opacity: 0.2 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}>
            <img className=' scale-[0.8] md:scale-[1] w-[fit] md:w-[70%] xl:w-[50%] lg:mt-10' src={hdshot} alt="head shot" />


            <motion.div className='next flex flex-col items-center space-y-4 pb-[80px]  lg:pb-[0px] 2xl:lg:pb-[6rem] '
              initial={{ y: 70 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="circle rounded-full w-[50px] h-[50px] border-[2px] animate-bounce bg-primary flex items-center justify-center">
                <span><svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.79289 15.5624C7.18342 15.9529 7.81658 15.9529 8.20711 15.5624L14.5711 9.19841C14.9616 8.80788 14.9616 8.17472 14.5711 7.78419C14.1805 7.39367 13.5474 7.39367 13.1569 7.78419L7.5 13.441L1.84315 7.78419C1.45262 7.39367 0.819456 7.39367 0.428932 7.78419C0.0384075 8.17472 0.0384074 8.80788 0.428932 9.19841L6.79289 15.5624ZM6.5 0.710525L6.5 14.8553L8.5 14.8553L8.5 0.710526L6.5 0.710525Z" fill="#D6E869" />
                </svg>
                </span>
              </div>
              <div className="resume">
                <a href='/resume.pdf' download='Taiye Ajimati Resume' className='border-primary border-2 px-10 py-4 text-primary rounded-lg hover:bg-primary hover:text-white'>Resume</a>
              </div>
            </motion.div>


          </motion.div>

        </div>
      </div>
    </section>
  )
}

