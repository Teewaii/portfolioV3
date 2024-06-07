import React from "react";
import Btn from "../btn/Btn";
import Tools from "../tools/Tools";
import { motion } from "framer-motion";

export default function Hello() {
  return (
    <section
      id="hero"
      className="hero relative bg-primary min-h-[100vh] flex flex-col items-center justify-between pt-[45px] overflow-hidden after:hidden before:hidden md:after:block md:before:block md:pt-0 xl:min-h-[120vh] 3xl:min-h-[100vh]"
    >
      {/* Main content container */}
      <div className="main hero-container h-[75vh] md:h-full flex max-w-[85%] sm:py-20 md:pl-[20px] lg:py-0 2xl:pl-[150px] 3xl:pl-[170px]  ">
        <div className="pt-14 desc flex flex-col items-start justify-center lg:pt-0 sm:py-20 lg:py-14 lg:px-[120px] 2xl:lg:px-[0px]  ">
          <motion.div
            className="intro text-left"
            initial={{ x: -10, opacity: 0.3 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h2 className="mb-[5px] font-medium text-[20px] text-[white] md:text-[25px] 3xl:text-[28px]">
              Hi, I'm
            </h2>
            <h1
              className="name text-[white] opacity-60 text-2xl sm:text-4xl lg:text-2xl 2xl:text-3xl leading:lg mb-8 lg:mb-8       
                  "
            >
              Ajimati Taiye,
            </h1>
          </motion.div>
          <motion.h1
            initial={{ x: 10, opacity: 0.3 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="header font-700 text-[white] text-left mb-2 leading-10 tracking-normal sm:text-5xl sm:leading-[60px] lg:text-3xl w-[100%] lg:leading-[60px] xl:text-5xl xl:leading-[65px] xl:max-w-[75%] 2xl:max-w-[70%] 2xl:text-[5rem] 2xl:leading-[90px]"
          >
            I <span className="text-green">Design</span> &{" "}
            <span className="text-green">Build</span>
            <br className="md:hidden" /> Web Based <br className="md:hidden" />
            Software Solutions!
          </motion.h1>
          <motion.p
            initial={{ x: -10, opacity: 0.8 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="body text-green py-4 text-sm text-left mb-5 md:text-[23px] md:leading-[35px] md:max-w-[700px] lg:text-[18px] lg:leading-6 lg:py-0 xl:mb-10 2xl:text-lg 2xl:max-w-[60%] 2xl:mb-16
               "
          >
            I’m a software engineer with focus in frontend development and I
            occassionly design products & sevices with great user experience and
            accessibility.
          </motion.p>

          <Btn />
        </div>
      </div>

      <Tools />
    </section>
  );
}
