import React from 'react';
import right_arrow from '../../img/rightArrow.svg';
import right_down from '../../img/downArrow.svg';
import Btn_sec from '../btn/Btn-sec';
import hdshot from '../../img/shot.svg'
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
    <section id='about' className='about min-h-[100vh] flex py-[150px] 
    md:pb-[40px] 2xl:lg:h-[85vh]  
    
    '>
      <div className="aboutWrapper  container flex flex-col lg:flex-row items-center justify-center ">
        <div className='bucket flex items-center flex-col lg:items-start  gap-[90px]  lg:gap-[124px]  
    md:flex-row 
    ' >
          <div className="desc text-left flex-[1]  ">
            <h2 className=" text-primary text-[25px]  lg:text-[30px] font-medium  mb-[35px]">About <span className='text-green font-bold bg-primary rounded-full 
           px-2 py-3  lg:px-3 lg:py-4          
          ' >me!</span></h2>
            <p className='text-primary   mt-[20px] w-[95%] leading-[30px] relative font-[300]
      border-b-[1px] border-lightprim pb-[30px] md:text-[15px] 2xl:text-[19px] 2xl:leading-[38px]
        
        '>Hi, I’m Taiye and I love building software products & services that promotes business and economic growths with great user experience and accessibility. <br /><br />

              <span className='font-bold bg-green p-1'> Over the last 10 years</span> I have worked in both the advertising and IT industry through which I have been able to demonstrate exceptional skills in graphic/product design, people management, web development and efficient problem solving.<br /> <br />

              My interest in software  development started in 2013 with visual basic. In 2016 I developed more interest in web development through which I was priviledged to work on different amazing web projects across different industries  specificaly using WordPress.<br /> <br />

              Presently, I spend most of my time building more complex and scalable projects using react and vanila Js.</p>
            <div className="toosl">
              <h1 className='tools-used text-primary  text-[18px] mt-[30px] '>Few of the tools I’ve been working!</h1>

              <ul className='tool-list text-primary flex flex-wrap  gap-[20px] mt-[13px]'>

                {tools.map((tool) => (
                  <li key={tool} className='flex gap-[10px] items-center' ><span><svg width="18" height="12" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className='animate-pulse' d="M9.35355 4.35355C9.54882 4.15829 9.54882 3.84171 9.35355 3.64645L6.17157 0.464466C5.97631 0.269204 5.65973 0.269204 5.46447 0.464466C5.2692 0.659728 5.2692 0.976311 5.46447 1.17157L8.29289 4L5.46447 6.82843C5.2692 7.02369 5.2692 7.34027 5.46447 7.53553C5.65973 7.7308 5.97631 7.7308 6.17157 7.53553L9.35355 4.35355ZM0 4.5H9V3.5H0V4.5Z" fill="#012B48" />
                  </svg>
                  </span>{tool}</li>
                ))

                }

              </ul>
            </div>
          </div>
          <div className="hero  md:flex-[0.8] h-[100%] items-center
       ">
            <img className=' scale-[0.8] md:scale-[1]  w-[fit] md:w-[50%]' src={hdshot} alt="head shot" />

          </div>

        </div>
      </div>
    </section>
  )
}


