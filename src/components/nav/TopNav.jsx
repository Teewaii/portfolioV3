import React from "react";
import logo from "../../img/logo.svg";

export default function TopNav({
  toggleMenu,
  shadow,
  toggle,
  hamburger,
  close,
}) {
  return (
    <div
      className={
        shadow
          ? "sm-max-lg:h-[100px] topNav z-[40] fixed bg-primary top-0 pb-4 pt-6 sm:pt-12 right-0  lg:hidden  w-screen flex items-center justify-between px-6 sm:px-24  md:px-[55px] NavShadow  shadow-2xl "
          : "sm-max-lg:h-[100px] topNav fixed bg-primary top-0 pb-4 pt-6 sm:pt-12 right-0 lg:hidden  w-screen flex items-center justify-between px-6 sm:px-24 md:px-[44px]  "
      }
    >
      <div className="md:container logo  opacity-50">
        <img className="w-12 sm:w-14" src={logo} alt="logo" />
      </div>
      <div className="toggles " onClick={toggleMenu}>
        {toggle ? (
          <img
            className="lg:hidden w-[40px]   cursor-pointer"
            src={hamburger}
            alt="hamburger"
          />
        ) : (
          <img
            className="lg:hidden w-[40px]  md:w-[27px]  cursor-pointer"
            src={close}
            alt="close-menu"
          />
        )}
      </div>
    </div>
  );
}
