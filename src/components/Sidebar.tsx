import React from "react";
import { Link } from "react-router-dom";
import { SidebarColors } from "./SidebarColors";
import { Size } from "./SidebarSize";
import { SidebarCategory } from "./SidebarCategory";
import { Rating } from "./Ratings";
import { Stockcount } from "./Stockcount";
import { Searchbar } from "./Searchbar";

export const Sidebar = () => {
  return (
    <div className="flex flex-col pl-12 gap-3  ">
      <Searchbar/>
      <SidebarCategory  />
      <Size  />
      <SidebarColors />
      <Stockcount/>
      <Rating />
    </div>
  );
};
