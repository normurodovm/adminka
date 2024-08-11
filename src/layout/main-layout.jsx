import React from "react";
import { Link, Navigate, Outlet } from "react-router-dom";
import { loadState } from "../config/storage";
import { Icon1 } from "../icons/icon1";
import { Icon2 } from "../icons/icon2";
import { Icon3 } from "../icons/icon3";
import { Icon4 } from "../icons/icon4";
import { Header } from "../components/header";


export const MainLayout = () => {
  const user = loadState("user");
  if (!user) {
    return <Navigate replace to={"/login"} />;
  }
  return (
    <div className="flex">
      <div className="h-screen bg-[#5B5CE2]  w-[97px]">
        <div className="flex justify-center my-[35px]">
          <Link to={"/"}><Icon1/></Link>
        </div>
        <div className="flex justify-center my-[15px]">
          <Link to={"/category-list"}><Icon2/></Link>
        </div>
        <div className="flex justify-center my-[15px]">
          <Link to={"/category-list"}><Icon3/></Link>
        </div>
        <div className="flex justify-center my-[15px]">
          <Link to={"/create-category"}><Icon4/></Link>
        </div>
      </div>
      <div className="w-full">
        <div className="">
            <Header/>
        </div>
        <div className=" flex-grow-1 p-7">
        <Outlet />
        </div>
      </div>
    </div>
  );
};
