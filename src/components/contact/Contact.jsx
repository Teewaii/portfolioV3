import React from 'react'

export default function Contact() {
  return (
    <section id='contact' className='hero  relative bg-hero-right-mob min-h-[100vh]  bg-contain bg-right-top bg-no-repeat overflow-hidden
            md:bg-hero-contact dark:bg-none  md:bg-left-top  md:min-h-[90vh]  dark:bg-dark pb-[100px] 
            md:mb-0  md:py-[80px]
            '>
      <div className="bucket container flex flex-col items-start 
             
              ">
        <div className="desc  text-left pt-[50px] 
        
       ">
          <h1 className='text-[38px] mb-[10px] 
           dark:text-lightprim     md:text-5xl md:mb-[24px]' >
            Say <span className='text-secondary font-bold'>hello!</span>
          </h1>
          <p className='border-b-[1px] border-lightprim pb-[28px]  text-primary text-md
             dark:text-[white]   md:pb-[46px] md:text-2xl 
                '>Get in touch and discover how I can contribute to the growth of  your business and team.</p>
          <div className="shoot mt-[12px] mb-[20px]">
            <h2 className="font-medium text-md dark:text-secondary ">Or shoot me an email at:</h2>
            <small className='text-primary text-lg dark:text-[white] '>taiyeajimati@gmail.com</small>
          </div>
        </div>

        <div className="form border-[1px] border-lightprim mt-[30px] rounded-[5px] w-[100%] py-[50px] px-[26px]
              
              ">
          <form className='flex flex-col gap-[40px]  ' action="#">
            <div className="input_field flex flex-col md:flex-row gap-[40px]">
              <input className='placeholder-lightprim   py-[10px] border-[1px] border-lightprim w-[100%] rounded-[5px]
                pl-[24px] focus:border-0 focus:ring-[2px] focus:ring-primary  focus:outline-none
               md:py-[20px]   ' type="text" name="name" id="name" placeholder='Name' />

              <input className='placeholder-lightprim  red py-[10px] border-[1px] border-lightprim w-[100%] rounded-[5px]
                pl-[24px] focus:border-0 focus:ring-[2px] focus:ring-primary  focus:outline-none
               md:py-[20px]   ' type="text" name="subject" id="subject" placeholder='Subject' />
            </div>
            <textarea className='placeholder-lightprim   py-[10px] border-[1px] border-lightprim w-[100%] rounded-[5px]
                pl-[24px] focus:border-0 focus:ring-[2px] focus:ring-primary  focus:outline-none

md:py-[20px]'  name="msg" id="msg" cols="30" rows="8" placeholder='Message'></textarea>
            < div className='send flex justify-between mt-3'>
              <button className='btn rounded-[10px] py-[18px] px-[55px] text-[20px]
       lg:px-[70px] lg:py-[20px] text-secondary md:text-[30px] font-medium ease-in-out dark:text-dark dark:bg-secondary dark:hover:bg-primary
      duration-300 bg-primary hover:bg-secondary dark:hover:text-lightprim  hover:text-primary inline'>Send</button>
              <span></span>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
