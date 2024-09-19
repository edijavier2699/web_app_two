import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";

const MainLayout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow p-5">
        <Outlet />
      </div>
      <Footer/>
    </div>
  );
};

export default MainLayout;
