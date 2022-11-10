import React from 'react'
import projects from '../projects/project';
import { motion } from "framer-motion";

export default function projectScroll({ project, activeProject }) {
  return (
    <section id='projects' className="project h-[fit] bg-primary  
    lg:h-fit ml-[250px] lg:ml-[0px] 
   "
    >
      <div className="bucket flex flex-col items-center  md:pt-[2rem] container">
        <div className="main flex flex-col gap-[80px]
       md:flex-row
       ">

          {/* Projects list controller start */}
          <div className="project-list   text-left flex-[1]  border-opacity-[0.1] border-secondary 
         flex md:flex-col gap-4 md:border-b-[0px]  overflow-auto relative after:absolute after:top-0 after:bottom-0 md:after:right-[2px]  md:after:w-[1.5px] md:after:bg-secondary md:after:opacity-[0.07]
         ">
            {projects.map((item, index) =>
              <h1 key={item.id} className={project === index ? 'text-[white] relative min-w-fit bg-secondary rounded-bl-md rounded-tl-md ease-in-out duration-300 bg-opacity-[0.05] text-sm  font-normal py-[15px] px-[20px] after:absolute after:bg-secondary after:z-[200]   after:top-[-1%]  after:bottom-[94%] after:left-0 after:right-0 md:after:top-0  md:after:bottom-[0] md:after:left-[97%] md:after:right-[1px]  after:rounded-xl cursor-pointer after:delay-100 ' : 'text-[white] relative text-sm md:text-sm font-normal py-[15px] px-[20px] min-w-fit cursor-pointer hover:after:top-0  hover:after:bottom-[0] hover:after:left-[98%] hover:after:right-[1px] hover:bg-secondary hover:bg-opacity-[0.1]'}
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
