import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Sidebar from "../components/Sidebar";
import { useLocation } from "react-router-dom";

const MainLayout = () => {
  const [activeItem, setActiveItem] = useState("home");
  
  const handleItemClick = (item) => {
      setActiveItem(item);
    };

  return (
    <div>
      <div className="fixed top-0 left-0 w-full">
        <NavBar />
      </div>
      <div>
      <Sidebar activeItem={activeItem} handleItemClick={handleItemClick} />
      </div>
    </div>
  );
};

export default MainLayout;
