import React from "react";
import projects from "./project";
import ProjectScroll from "../projectScroll/ProjectScroll";
import { motion } from "framer-motion";

export default function Projects({ project, activeProject }) {
  return (
    <section
      id="projects"
      className="project min-h-[100vh] lg:min-h-[90vh]  xl:min-h-[75vh] bg-primary relative  
     flex justify-center items-center  md:py-[7rem] xl:py-[5rem] 3xl-xl:py-[1rem] pb-10 
    "
    >
      <div className="bucket flex flex-col items-center py-[30px] lg:py-0 w-screen   ">
        <div className="section-title flex flex-col items-start container lg:items-center">
          <h1 className="project-header text-white mb-4  text-[1.5rem] lg:text-[2rem]  w-fit relative  before:absolute before:left-0 before:right-0 before:bg-green before:h-1 before:bottom-0 before:z-[-1] z-40 ">
            Projects
          </h1>
          <p className="text-white text-[1rem]  text-left lg:text-center opacity-80 max-w-[700px]  mb-[2rem]">
            I have spent quite some time building projects in other to
            continously improve my front-end development skills by building
            projects from scratch. This section contain few of my personal
            development project that shows my skills and experience. I have also
            worked on several smaller projects that can be found on my{" "}
            <a
              className="border-b-2 border-green "
              href="https://github.com/Teewaii"
              target="blank"
            >
              github page
            </a>
          </p>
        </div>

        {/*Mobile Projects list controller start */}
        <motion.div
          initial={{ x: -20 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1 }}
          className="project-list flex whitespace-nowrap gap-4  w-[100%]  overflow-scroll min-h-[fit] bg-primary py-2 pl-4 pr-4 lg:hidden"
        >
          {projects.map((item, index) => (
            <h1
              key={item.id}
              className={
                project === index
                  ? "text-[white] relative min-w-fit bg-secondary lg:rounded-bl-md rounded-tl-md ease-in-out duration-300 bg-opacity-[0.13] text-sm  font-normal py-[15px] px-[15px] lg:px-[20px] after:absolute after:bg-secondary  after:top-[-1%]  after:bottom-[94%] after:left-0 after:right-0 lg:after:top-0  lg:after:bottom-[0] lg:after:left-[97%] lg:after:right-[1px]  after:rounded-xl cursor-pointer after:delay-100 lg:last:mb-11 "
                  : "text-[white] relative text-sm md:text-sm font-normal py-[15px] px-[10px] lg:px-[20px] min-w-fit cursor-pointer hover:after:top-0  hover:after:bottom-[0] hover:after:left-[98%] hover:after:right-[1px] hover:bg-secondary hover:bg-opacity-[0.1] "
              }
              onClick={() => activeProject(index)}
            >
              {item.title}
            </h1>
          ))}
        </motion.div>
        <div
          className="experience-wrapper rounded-xl px-0 border-opacity-[0.1] border-secondary 
         container mt-[20px]   md:pl-[20px] lg:pl-[70px]  3xl:pl-[100px] lg:max-w-[80%]  
      "
        >
          <div
            className="main flex flex-col gap-[80px] 
        md:flex-row lg:gap-[20px] 2xl:gap-[80px]  container
        "
          >
            {/* Projects list controller start */}
            <motion.div
              className="scroll_wrapper  hidden lg:flex 
            lg:items-centser 
            "
              initial={{ x: -20 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="scroller lg:h-[85%]  relative">
                <ProjectScroll
                  project={project}
                  activeProject={activeProject}
                />
              </div>
            </motion.div>

            {/* 
           Projects description end  */}
            {projects.map(
              (item, index) => (
                <motion.div
                  key={item.id}
                  className={
                    project === index
                      ? "project-card relative h-[fit] lg:h-[75%] flex flex-col-reverse flex-[1.5] gap-[20px] lg:gap-[40px] w-[fit] justify-end bg-white bg-opacity-[0.08] border-[3px] rounded-xl border-secondary border-opacity-[0.05] p-[30px]  xl:flex-row"
                      : "project-card hidden"
                  }
                  initial={{ x: 20 }}
                  whileInView={{ x: 0 }}
                  transition={{ duration: 1 }}
                >
                  <div
                    className="desc text-left flex flex-col flex-[1] justify-center
             
              "
                  >
                    <div className="text-data ">
                      <h1
                        className="text-[white] text-lg  mb-[10px]
                  lg:mb-[20px] lg:text-xl  "
                      >
                        {item.head}
                      </h1>
                      {/* Split the project description for easy application of line break in the text */}
                      {item.desc.split("\n").map((line, index) => (
                        <p
                          className="text-white opacity-80 text-sm mb-4"
                          key={index}
                        >
                          {line}
                        </p>
                      ))}

                      <ul className="flex gapx-y-[20px] border-b pb-[20px] border-secondary border-opacity-20">
                        {item.tools.map((tool, index) => {
                          return (
                            <div className="flex items-center gap-[10px] mt-[50px]">
                              <li
                                key={index}
                                className="text-white text-[0.9rem] md:text-sm "
                              >
                                {tool}
                              </li>
                              <span>
                                <svg
                                  width="18"
                                  height="12"
                                  viewBox="0 0 10 8"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M9.35355 4.35355C9.54882 4.15829 9.54882 3.84171 9.35355 3.64645L6.17157 0.464466C5.97631 0.269204 5.65973 0.269204 5.46447 0.464466C5.2692 0.659728 5.2692 0.976311 5.46447 1.17157L8.29289 4L5.46447 6.82843C5.2692 7.02369 5.2692 7.34027 5.46447 7.53553C5.65973 7.7308 5.97631 7.7308 6.17157 7.53553L9.35355 4.35355ZM0 4.5H9V3.5H0V4.5Z"
                                    fill="#D6E869"
                                  />
                                </svg>
                              </span>
                            </div>
                          );
                        })}
                      </ul>
                      <div className="icons flex items-center gap-[30px] mt-[20px]">
                        <span className="group cursor-pointer">
                          <a href={item.live} target="none">
                            <svg
                              width="28"
                              height="28"
                              viewBox="0 0 12 8"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                className="group-hover:fill-green "
                                d="M0.956055 3.79347C1.06697 3.62976 1.16642 3.46032 1.29043 3.30929C1.96083 2.49401 2.74419 1.81379 3.69126 1.33412C4.33086 1.0053 5.02684 0.800341 5.74256 0.730023C7.14761 0.596599 8.41801 0.96986 9.582 1.74585C10.3375 2.25008 10.9674 2.88528 11.5167 3.60438C11.6521 3.7816 11.6525 3.97273 11.5167 4.15036C10.8831 4.97956 10.1431 5.69293 9.2382 6.22417C8.49004 6.66333 7.68868 6.94205 6.82142 7.02431C5.55879 7.14341 4.39276 6.84996 3.30818 6.20821C2.41145 5.67615 1.67884 4.96646 1.05142 4.14136C1.01456 4.08358 0.982661 4.02279 0.956055 3.95964V3.79347ZM6.21691 1.63821C4.99931 1.66072 4.02932 2.69006 4.04774 3.94081C4.06452 5.15964 5.10327 6.13781 6.35648 6.1153C7.56999 6.0932 8.54653 5.05732 8.52811 3.81148C8.50887 2.59224 7.47053 1.61529 6.21691 1.63821Z"
                                fill="#75D0EE"
                              />
                              <path
                                className="group-hover:fill-green "
                                d="M7.49361 3.87784C7.49288 4.03639 7.46094 4.19325 7.39959 4.33946C7.33824 4.48566 7.2487 4.61836 7.13607 4.72996C7.02344 4.84156 6.88994 4.92988 6.74318 4.98989C6.59641 5.0499 6.43927 5.08041 6.28072 5.07968C6.12216 5.07896 5.9653 5.04701 5.8191 4.98566C5.67289 4.92431 5.5402 4.83477 5.42859 4.72214C5.31699 4.60952 5.22867 4.47601 5.16866 4.32925C5.10866 4.18248 5.07814 4.02534 5.07887 3.86678C5.08255 3.20212 5.63958 2.66187 6.31407 2.66883C6.96441 2.6762 7.49811 3.22299 7.49361 3.87784Z"
                                fill="#75D0EE"
                              />
                            </svg>
                          </a>
                        </span>
                        <span className=" cursor-pointer ">
                          <a href={item.git} target="none">
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 8 8"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                className="hover:fill-green w-[20px] h-[20px]"
                                d="M3.20702 5.91139C3.11304 5.89424 2.99737 5.8775 2.88331 5.8524C2.22063 5.70722 1.72261 5.35912 1.53465 4.64202C1.49602 4.49111 1.46916 4.3372 1.45433 4.18179C1.40453 3.69354 1.48485 3.24001 1.80053 2.85175C1.81342 2.83194 1.8222 2.80952 1.82628 2.78596C1.83036 2.7624 1.82966 2.73821 1.82422 2.71494C1.7439 2.42207 1.76478 2.13297 1.8431 1.84178C1.87563 1.72087 1.93306 1.68572 2.04833 1.70036C2.35879 1.7422 2.62667 1.88738 2.88491 2.05683C2.91795 2.08136 2.95585 2.09785 2.99582 2.10509C3.03578 2.11233 3.0768 2.11014 3.11585 2.09866C3.63507 1.96149 4.17746 1.94933 4.70186 2.0631C4.90669 2.10787 5.06855 2.09741 5.24526 1.97231C5.4518 1.82316 5.69071 1.72985 5.94047 1.70078C6.04248 1.68949 6.09791 1.71501 6.12923 1.8263C6.20233 2.0903 6.23526 2.35597 6.1694 2.62123C6.13767 2.74674 6.16136 2.83042 6.23687 2.93376C6.50837 3.29691 6.55817 3.71864 6.52765 4.16631C6.46941 5.04492 6.02401 5.61601 5.2067 5.82227C5.05248 5.8616 4.89424 5.88545 4.72475 5.9185C4.92035 6.14066 4.97818 6.39755 4.97738 6.6741C4.97738 7.02596 4.97416 7.37782 4.97376 7.72968C4.97376 7.95143 5.08662 8.04138 5.28823 7.97109C7.46905 7.2134 8.6189 4.70561 7.65782 2.46266C6.7879 0.433082 4.52033 -0.532127 2.53952 0.297108C1.00732 0.940999 0.120533 2.14385 0.0100863 3.86717C-0.0895165 5.42146 0.551877 6.64565 1.78727 7.51421C2.06319 7.70834 2.38489 7.83428 2.69254 7.97444C2.84676 8.04514 2.98813 7.96188 2.99375 7.8142C3.00219 7.58074 2.99576 7.34686 2.99576 7.10755C2.87246 7.1201 2.76161 7.13642 2.65077 7.14185C2.18167 7.16361 1.78808 6.95358 1.61899 6.48834C1.53641 6.25863 1.3843 6.06316 1.18564 5.93147C1.12981 5.89382 1.09849 5.81767 1.05592 5.7591C1.12941 5.74069 1.20251 5.72186 1.27641 5.70471C1.28725 5.7022 1.30051 5.70973 1.31296 5.71224C1.56317 5.76705 1.72703 5.93691 1.86238 6.1507C2.115 6.54984 2.50498 6.6741 2.9303 6.49211C2.96394 6.47926 2.99231 6.45474 3.01062 6.42265C3.0805 6.2553 3.14195 6.08418 3.20702 5.91139Z"
                                fill="#75D0EE"
                              />
                            </svg>
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="img flex flex-[1.1] rounded-xl overflow-hidden">
                    <a href={item.live} target=" ">
                      <img
                        className="h-fit w-[100%] object-fit"
                        src={item.pix}
                        alt=""
                      />
                    </a>
                  </div>
                </motion.div>
              )
              /* Projects description end */
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
