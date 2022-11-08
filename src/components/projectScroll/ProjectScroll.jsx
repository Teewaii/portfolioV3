import React from 'react'
import projects from '../projects/project';
import { motion } from "framer-motion";

export default function projectScroll({ project, activeProject }) {
  return (
    <section id='projects' className="project h-[fit] bg-primary  
    lg:h-fit ml-[350px] lg:ml-[0px] 
   "
    >
      <div className="bucket flex flex-col items-center   md:pt-[2rem] container">
        <div className="main flex flex-col gap-[80px]
       md:flex-row
       ">

          {/* Projects list controller start */}
          <div className="project-list   text-left flex-[1]  border-opacity-[0.1] border-secondary 
         flex md:flex-col gap-4 md:border-r-[4px] md:border-b-[0px]  overflow-auto
         ">
            {projects.map((item, index) =>
              <h1 key={item.id} className={project === index ? 'text-[white] relative min-w-fit bg-secondary bg-opacity-[0.05] text-[1rem] md:text-[1.2rem] font-normal py-[20px] px-[25px] after:absolute after:bg-secondary  after:top-[-1%]  after:bottom-[94%] after:left-0 after:right-0 md:after:top-0  md:after:bottom-[0] md:after:left-[98%] md:after:right-[1px]  after:rounded-[5%] cursor-pointer after:delay-100 ease-in-out duration-300' : 'text-[white] relative text-[1rem] md:text-[1.2rem] font-normal py-[20px] min-w-fit px-[25px] cursor-pointer hover:after:top-0  hover:after:bottom-[0] hover:after:left-[98%] hover:after:right-[1px] hover:bg-secondary hover:bg-opacity-[0.1]'}
                onClick={() => activeProject(index)}
              >
                {item.title}</h1>
            )
            }

          </div>

          {/* Projects list controller end */}



        </div>
      </div>
    </section>
  )
}
