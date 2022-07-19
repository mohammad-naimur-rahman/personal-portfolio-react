import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import SideNav from "../Shared/SideNav";

const HomeLayout = ({ children }) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="container-fluid">
      <SideNav />
      <div className="children">{children}</div>
    </div>
  );
};

export default HomeLayout;
