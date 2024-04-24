import React from "react";
import NavLink from "../components/navbar";

import { Outlet } from "react-router-dom";

const Mainlayout = () => {
  return (
    <div className="flex w-full ">
      <div className="w-full">
        <NavLink />
      </div>
      <Outlet />
    </div>
  );
};

export default Mainlayout;
