import React from "react";
import UserLogo from "../assets/user.png";

const MainNavBar = () => {

  return (
    <div className="flex justify-center h-16 px-10 py-6 bg-white shadow-md border border-b-neutral-200 z-10">
      <div className="flex  items-center justify-between  w-full 2xl:max-w-6xl">
        <div className="flex items-center">
          <div className="mr-5">
            <img src={UserLogo} className="h-10 w-10" alt="" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="hidden md:block font-semibold mt-[-2px]">
              Hii
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNavBar;
