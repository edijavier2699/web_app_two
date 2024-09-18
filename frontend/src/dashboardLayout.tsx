
import React from "react";
import { Outlet } from "react-router-dom";
import { useUser } from "./components/userProvider";
import SideMenu from "./components/blog/sideMenu";

const DashboardLayout: React.FC = () => {
  const { role } = useUser(); 

  const menuData = role === "blog-admin" ? [
    { name: 'Overview', link: '/dashboard/' },
    { name: 'All Articles', link: '/articles-list/' },
    { name: 'Create Articles', link: '/create-article/' },
  ]:[];

  return (
    <div className="flex min-h-screen ">
      <SideMenu data={menuData} onMenuClick={() => {}} />
      <div className="flex-grow p-5">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
