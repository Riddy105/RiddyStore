import React from "react";
import { Header } from "../../components";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="w-11/12 mx-auto">
      <Header />
      <Outlet />
    </div>
  );
};

export default Root;
