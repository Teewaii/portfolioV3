import React from "react";

export default function Email() {
  function Mail() {
    window.open("mailto:taiyeajimati@gmail.com?subject=SendMail&bodyde");
  }
  return (
    <div className="relative w-fit">
      <button
        onClick={Mail}
        className="flex group flex-row-reverse text-[20px] gap-2 md:gap-3 items-center rounded-[10px] py-[14px] 
        px-[15px] md:text-[25px] md:py-[20px] md:px-[40px] lg:py-[15px] lg:px-[25px] 2xl:py-[12px] 2xl:px-[20px] font-medium ease-in-out text-primary 
      bg-green duration-300 hover:bg-opacity-[0.6]  hover:text-primary "
      >
        <span className="animate-pulse -rotate-45 group-hover:rotate-0 ">
          <svg
            width="20"
            height="25"
            viewBox="0 0 10 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="fill-primary group-hover:fill-primary"
              d="M9.35355 4.35355C9.54882 4.15829 9.54882 3.84171 9.35355 3.64645L6.17157 0.464466C5.97631 0.269204 5.65973 0.269204 5.46447 0.464466C5.2692 0.659728 5.2692 0.976311 5.46447 1.17157L8.29289 4L5.46447 6.82843C5.2692 7.02369 5.2692 7.34027 5.46447 7.53553C5.65973 7.7308 5.97631 7.7308 6.17157 7.53553L9.35355 4.35355ZM0 4.5H9V3.5H0V4.5Z"
              fill="#DBF66F"
            />
          </svg>
        </span>
        Say hello!
      </button>
      {/* <span className='absolute w-[20px] h-[20px] right-[-5px] rounded-full bg-secondary animate-bounce'></span> */}
    </div>
  );
}
