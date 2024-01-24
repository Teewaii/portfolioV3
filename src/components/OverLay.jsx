import React from "react";

export default function OverLay({ toggle, toggleMenu }) {
  return (
    <div>
      {!toggle && (
        <div
          className="overlay bg-primary opacity-[0.8]  absolute top-0 left-0 right-0 bottom-0 "
          onClick={toggleMenu}
        ></div>
      )}
    </div>
  );
}
