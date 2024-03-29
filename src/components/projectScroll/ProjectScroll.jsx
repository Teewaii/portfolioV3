import React from "react";
import projects from "../projects/project";

export default function projectScroll({ project, activeProject }) {
  return (
    <section
      className="project-list-scroller h-[fit] bg-primary ml-[50px] md:ml-[0px]  lg:h-fit overflow-scroll 
   "
    >
      {/* className="project-list-scroller h-[fit] bg-primary lg:after:absolute lg:after:bottom-0 lg:after:left-0 lg:after:right-0 lg:after:top-[90%] lg:after:bg-primary lg:after:opacity-80
     ml-[50px] md:ml-[0px]  lg:h-[100%] overflow-scroll 
   "
    > */}
      <div className="bucket flex flex-col items-center container">
        <div
          className="main flex flex-col gap-[80px]
       md:flex-row
       "
        >
          {/* Projects list controller start */}
          <div
            className="project-list text-left flex-[1] border-opacity-[0.1] border-secondary 
         flex lg:flex-col gap-4 md:border-b-[0px] overflow-auto relative after:absolute after:top-0 after:bottom-0 md:after:right-[2px] md:after:w-[2px] md:after:bg-secondary md:after:opacity-[0.18]
         "
          >
            {projects.map((item, index) => (
              <h1
                key={item.id}
                className={
                  project === index
                    ? "text-white relative min-w-fit bg-secondary lg:rounded-bl-md rounded-tl-md ease-in-out duration-300 bg-opacity-[0.13] text-sm  font-normal py-[15px] px-[15px] lg:px-[20px] after:absolute after:bg-secondary  after:top-[-1%]  after:bottom-[94%] after:left-0 after:right-0 lg:after:top-0  lg:after:bottom-[0] lg:after:left-[97%] lg:after:right-[1px]  after:rounded-xl cursor-pointer after:delay-100 lg:last:mb-11 "
                    : "text-white relative text-sm md:text-sm font-normal py-[15px] px-[10px] lg:px-[20px] min-w-fit cursor-pointer hover:after:top-0  hover:after:bottom-[0] hover:after:left-[98%] hover:after:right-[1px] hover:bg-secondary hover:bg-opacity-[0.1] "
                }
                onClick={() => activeProject(index)}
              >
                {item.title}
              </h1>
            ))}
          </div>

          {/* Projects list controller end */}
        </div>
      </div>
    </section>
  );
}
