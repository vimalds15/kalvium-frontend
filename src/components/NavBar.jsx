import React from "react";
import Logo from "../assets/logo.png";

const MainNavBar = () => {

  return (
    <div className="flex justify-center h-16 px-10 py-6 bg-white shadow-md border border-b-neutral-200 z-10">
      <div className="flex  items-center justify-between md:justify-center  w-full 2xl:max-w-6xl">
        <div className="flex items-center justify-center">
          <div className="mr-5">
            <img src={Logo} className="h-14" alt="" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="md:block font-semibold mt-[-2px]">
              Attendance Portal
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNavBar;
