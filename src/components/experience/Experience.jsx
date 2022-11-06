import React, { useState } from 'react'
import hd from '../../img/shot.svg'
import work from '../experience/work.json';
export default function Experience() {
  const [exp, setExp] = useState(0);

  function activeTab(index) {
    if (exp === index) {
      return setExp(1)
    }
    setExp(index)
  }

  return (
    <section id='experience' className=" flex items-center justify-center   experience min-h-[100vh] lg:[90vh] bg-primary   ">
      <div className="bucket  flex flex-col items-center pt-[8rem]  md:py-[10rem] container
     ">
        <h1 className='text-secondary lg:mb-[4rem] mb-[1.5rem] text-[1.5rem] lg:text-[2rem]  '>Palces I have worked</h1>
        <div className="experience-wrapper border-[3px] rounded-xl px-6  border-opacity-[0.1] border-secondary  flex flex-col
       min-h-[400px] pb-[50px] container lg:py-[4rem] mt-[20px]
      ">

          <div className='tabs-head  text-[1.4rem] text-secondary pt-[2rem] 
        flex   border-opacity-[0.1] border-secondary overflow-auto overflow-y-hidden lg:pt-[0rem] 
        '     >
            {
              work.map((work, index) => {
                return (

                  <div className={exp === index ? "after:rounded-[5px] px-[30px] py-[20px] relative bg-secondary bg-opacity-[.05] rounded-t-lg after:absolute after:bg-secondary after:left-0 after:right-0 after:bottom-[90%] after:top-[4%] text-[1rem] lg:text-[1.2rem] cursor-pointer min-w-fit lg:mr-4" : "tab px-[30px] py-[20px]  cursor-pointer text-[1rem] lg:text-[1.2rem] min-w-fit lg:mr-8 "}
                    onClick={() => activeTab(index)} key={index}
                  >{work.company}</div>

                )

              })
            }
          </div>


          <div className="tab-contents">
            {
              work.map((work, index) => {

                return (

                  <div className={exp === index ? "content text-left lg:ml-[30px] pt-[30px]" : "tab hidden"}
                    onClick={() => activeTab(index)} key={index} >
                    <div className="top flex flex-col lg:flex-row mb-[40px] lg:mb-0  lg:items-center gap-4">
                      <h1 className='text-[white] text-[1.5rem]'>{work.title}</h1>
                      <h2 className='text-[1.5rem] text-green'>{work.year}</h2>
                    </div>
                    <span className='text-secondary opacity-40 pb-[30px]'>{work.about}</span>
                    <ul className='space-y-2 mt-3'>
                      <h1 className='text-green text-[1.2rem] '>Duties:</h1>
                      {work.desc.map((duties, index) => (
                        <li key={index} className='text-secondary flex items-center gap-2 space-y-4 '><span><svg width="18" height="12" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        </div>
      </div>


    </section>
  )
}





















// <div className='tabs-head  flex gap-[70px] justify-center text-[1.4rem] text-secondary
// border-b
// '>
//   <div className={exp === 1 ?"after:rounded-[5px] p-[30px] relative  after:absolute after:bg-green after:left-0 after:right-0 after:bottom-[-3px] after:top-[98%]":"tab  p-[30px] cursor-pointer text-[1.2rem]"}
//     onClick={() => activeTab(1)}
//   >Rimal International</div>

//   <div className={exp === 2 ?"after:rounded-[5px] p-[30px] relative  after:absolute after:bg-green after:left-0 after:right-0 after:bottom-[-3px] after:top-[98%]":"tab  p-[30px] cursor-pointer text-[1.2rem]"}
//     onClick={() => activeTab(2)}
//   >Sprout Digital</div>

//   <div className="tab  p-[30px] cursor-pointer text-[1.2rem]">240 media</div>
// </div>
// <div className="tab-contents">
//   <div className={exp === 2 ? "content text-left ml-[30px] pt-[30px]" : "tab hidden"}
//     onClick={() => activeTab(2)}>
//     <h1 className='text-[white]'>2021 - 202</h1>
//     <p className='text-secondary'>Content 1</p>
//   </div>

//   <div className={exp === 1 ? "content text-left ml-[30px] pt-[30px]" : "tab hidden"}
//     onClick={() => activeTab(1)}>
//     <h1 className='text-[white]'>2019 - 2021</h1>
//     <p className='text-secondary'>Content 1</p>
//   </div>

// </div> 