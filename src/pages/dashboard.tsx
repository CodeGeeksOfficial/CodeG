import React from "react";
import Sidebar from "src/components/routes/dashboard/Sidebar";
import UserInfo from "src/components/routes/dashboard/UserInfo";

type Props = {};

const dashboard = (props: Props) => {
  return (
    <div className="w-screen h-screen flex bg-[#1e1e1e] text-[#e1e1e1]">
      <Sidebar />
      <UserInfo />
    </div>
  );
};

export default dashboard;
