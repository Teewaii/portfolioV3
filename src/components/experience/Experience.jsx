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
    <section id='experience' className=" flex items-center justify-center   experience min-h-[100vh] 2xl:min-h-[80vh] 3xl:min-h-[70vh] bg-primary   ">
      <div className="bucket  flex flex-col items-center py-[8rem]  md:py-[0] container  md:pl-[20px] lg:pl-[150px] 3xl:pl-[100px] lg:max-w-[80%] 3xl:max-w-[75%] 
     ">
        <h1 className='text-secondary lg:mb-[2rem] mb-[1.5rem] text-[1.5rem] lg:text-[2rem]  '>Places I have worked</h1>
        <div className="experience-wrapper border-[3px] rounded-xl px-6  border-opacity-[0.1] border-secondary  flex flex-col
       min-h-[400px] pb-[50px] container lg:py-[2rem] mt-[20px]
      ">

          <div className='tabs-head  text-[1.4rem] text-secondary py-[0.6rem] 
        flex   border-opacity-[0.1] border-secondary overflow-auto overflow-y-hidden lg:pt-[0rem] lg:pb-[10px] lg:border-b-2
        '     >
            {
              work.map((work, index) => {
                return (

                  <div className={exp === index ? "after:rounded-[5px] px-[20px] py-[14px] relative bg-secondary bg-opacity-[.05] rounded-t-lg after:absolute after:bg-secondary after:left-0 after:right-0 after:bottom-[4%] after:top-[90%] text-sm lg:text-md cursor-pointer min-w-fit lg:mr-4" : "tab px-[20px] py-[14px]  cursor-pointer text-sm lg:text-md min-w-fit lg:mr-8 "}
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
                    <div className="top flex flex-col lg:flex-row mb-[40px] lg:mb-0  lg:items-center gap-2 lg:gap-4">
                      <h1 className='text-[white] text-xl '>{work.title}</h1>
                      <span className='text-secondary '>({work.type}) </span>
                      <h2 className='text-md text-green'>- {work.year}</h2>
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