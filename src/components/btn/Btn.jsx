import React from "react";
import { Link } from "react-scroll";
export default function Btn() {
  return (
    <div className="relative w-fit">
      <div className="seeProject flex cursor-pointer">
        <Link
          to="project"
          className="flex flex-row-reverse  group text-[20px] relative text-[white] gap-2 md:gap-3 items-center rounded-[10px] py-[14px] border-2
      px-[15px] md:text-[18px] md:py-[20px] md:px-[30px] lg:text-[20px] lg:py-[10px] lg:px-[20px] 2xl:py-[12px] 2xl:px-[20px] font-medium overflow-hidden hover:ease-in-out
      hover:border-0 hover:bg-green duration-500 bg-transparent hover:text-primary"
        >
          <span className="animate-pulse -rotate-45 group-hover:rotate-0 w-[20px] h-[25px] md:w-[20px] md:h-[25px] lg:w-[20px] lg:h-[25px]">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 10 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="fill-[white] group-hover:fill-primary"
                d="M9.35355 4.35355C9.54882 4.15829 9.54882 3.84171 9.35355 3.64645L6.17157 0.464466C5.97631 0.269204 5.65973 0.269204 5.46447 0.464466C5.2692 0.659728 5.2692 0.976311 5.46447 1.17157L8.29289 4L5.46447 6.82843C5.2692 7.02369 5.2692 7.34027 5.46447 7.53553C5.65973 7.7308 5.97631 7.7308 6.17157 7.53553L9.35355 4.35355ZM0 4.5H9V3.5H0V4.5Z"
                fill="#DBF66F"
              />
            </svg>
          </span>
          See Projects
        </Link>
      </div>
    </div>
  );
}
