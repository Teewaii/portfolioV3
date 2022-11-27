import React, { useState } from 'react'
import hd from '../../img/shot.svg'
import work from '../experience/work.json';
import { motion } from "framer-motion";



export default function Experience() {
  const [exp, setExp] = useState(0);

  function activeTab(index) {
    if (exp === index) {
      return setExp(1)
    }
    setExp(index)
  }

  return (
    <section id='experience' className=" flex items-center justify-center   experience min-h-[100vh] 2xl:min-h-[70vh] 3xl:min-h-[62vh] bg-primary relative after:absolute after:top-[-10%] after:right-[-10%] after:bg-secondary after:w-[35%] after:h-[55%] after:rounded-full after:blur-3xl after:opacity-[0.08]   before:absolute before:bottom-[20%] before:left-[15%] before:bg-secondary before:w-[25%] before:h-[45%] before:rounded-full before:blur-3xl before:opacity-[0.05] overflow-hidden ">
    
    {/* Main content container */}
      <div className="main pt-[4rem]  pb-[2rem] md:pb-[0] md:pt-[0] lg:pt-[60px]  flex flex-col items-center container  md:pl-[20px] lg:pl-[150px] 3xl:pl-[100px] lg:max-w-[80%] 3xl:max-w-[75%] 
     ">
        <div className="section-title gap-y-4 lg:gap-y-0 flex flex-col items-start  lg:items-center">
          <h1 className='text-white lg:mb-[1rem]  mb-0 text-[1.5rem] lg:text-[2rem] relative before:absolute before:left-0 before:right-0 before:bg-green before:h-1 before:bottom-0 before:z-[-1] z-40 '>Places I have worked</h1>
          <p className='text-white text-[1rem]  text-left lg:text-center  opacity-80 max-w-[700px]  mb-[2rem]'>Over the years I have worked in different sectors ranging from the IT industry, advertising and publishing and I have delivered great products and services while working as a web developer and graphic designer during this periods.  </p>
        </div>
        
        <motion.div className="experience-wrapper border-[3px] rounded-xl px-6  border-opacity-[0.1] border-secondary  flex flex-col
       min-h-[400px] pb-[50px] container lg:py-[2rem] mt-[20px]
      "  initial={{ x: 20 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1 }}>

            {/* Companys container */}
          <div className='tabs-head  text-[1.4rem] text-white py-[0.6rem] 
        flex   border-opacity-[0.1] border-secondary overflow-auto overflow-y-hidden lg:pt-[0rem] lg:pb-[10px] lg:border-b-2
        '     >
          {/* Mapping throught the list of comapanys */}
            {
              work.map((work, index) => {
                return (

                  <div className={exp === index ? "after:rounded-[5px] px-[20px] py-[14px] relative bg-secondary  ease-in-out duration-300 bg-opacity-[.13] rounded-t-md after:absolute after:bg-secondary after:left-0 after:right-0 after:bottom-[4%] after:top-[90%] text-sm lg:text-md cursor-pointer min-w-fit lg:mr-4 " : "  ProjectTab px-[20px] py-[14px]  cursor-pointer text-sm lg:text-md min-w-fit lg:mr-8 "}
                    onClick={() => activeTab(index)} key={index}
                  >{work.company}</div>
                )
              })
            }
            end of mapp
          </div>


          <div className="tab-contents">
            {
              work.map((work, index) => {

                return (

                  <div className={exp === index ? "content text-left lg:ml-[30px] pt-[30px]" : "projectTab hidden"}
                    onClick={() => activeTab(index)} key={index} >
                    <div className="top flex flex-col lg:flex-row mb-[20px] lg:mb-0  lg:items-center gap-2 lg:gap-4">
                      <h1 className='text-[white] text-xl '>{work.title}</h1>
                      <div className="duration flex gap-2 items-center">
                        <span className='text-secondary '>({work.type}): </span>
                        <h2 className='text-md text-green'> {work.year}</h2>
                      </div>
                    </div>
                    <span className='text-secondary opacity-40 pb-[30px] text-sm'>{work.about}</span>
                    <ul className='space-y-2 mt-3'>
                      <h1 className='text-green text-lg '>Duties:</h1>
                      {work.desc.map((duties, index) => (

                        <li key={index} className='tools text-secondary flex items-start  gap-2 space-y-4 text-sm  '><span className='pt-2 '><svg width="18" height="12" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.35355 4.35355C9.54882 4.15829 9.54882 3.84171 9.35355 3.64645L6.17157 0.464466C5.97631 0.269204 5.65973 0.269204 5.46447 0.464466C5.2692 0.659728 5.2692 0.976311 5.46447 1.17157L8.29289 4L5.46447 6.82843C5.2692 7.02369 5.2692 7.34027 5.46447 7.53553C5.65973 7.7308 5.97631 7.7308 6.17157 7.53553L9.35355 4.35355ZM0 4.5H9V3.5H0V4.5Z" fill="#D6E869" />
                        </svg>
                        </span>{duties}</li>

                      ))}
                    </ul>
                  </div>


                )

              })
            }
          </div>
        </motion.div>
      </div>


    </section>
  )
}





















