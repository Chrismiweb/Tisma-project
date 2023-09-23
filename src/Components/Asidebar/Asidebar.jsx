// import './index.css'; // Or your custom CSS file

import { Link } from "react-router-dom";
import React, { useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { RiDashboard3Line, RiCommunityLine, RiArrowRightSLine } from "react-icons/ri";
import { MdContactEmergency, MdProductionQuantityLimits } from "react-icons/md";
import { GrLogout } from "react-icons/gr";
import { SiLeaderprice } from "react-icons/si";

const Asidebar = ({ isOpen, handleOpenSideBar, bg, text }) => {
  const asideData = [
    {
      menus: [
        {
          icon: <RiDashboard3Line />,
          link: "dashboard",
          pathname: "",
        },
        {
          icon: <MdProductionQuantityLimits />,
          link: " All product",
          pathname: "product",
        },
        {
          icon: <SiLeaderprice />,
          link: " Business page",
          pathname: "business",
        },
        {
          icon: <MdContactEmergency />,
          link: "Contact",
          pathname: "contact",
        },
      ],
      settings: {
        icon: <GrLogout />,
        link: "Log out",
        pathname: "logout",
      },
    },
  ];

  return (
    <aside className={`fixed  ${isOpen ? "w-[100px]" : "w-[250px]"} transition-all duration-300 h-screen bg-white shadow px-4`}>
      <div className="flex justify-between relative items-center h-[10vh]">
        <span>Tisma.site</span>
        <button className="border absolute right-[-30px] p-1 rounded-full" onClick={handleOpenSideBar}>
          <RiArrowRightSLine className="text-[20px] "/>
        </button>
      </div>
      <div className="flex h-[80vh] pt-10 flex-col gap-5">
        {asideData[0].menus.map((menu, i) => (
          <a
            href={`/dashboard/${menu.pathname}`}
            key={i}
            className={`${bg} flex gap-2 font-[700] capitalize items-center`}
          >
            <span className={`text-[25px] ${isOpen&&"mx-auto"}`}>{menu.icon}</span>
            {!isOpen&&<span className={`${text} text-[#266696]`}>{menu.link}</span>}
          </a>
        ))}
      </div>
      <div className="h-[10vh]">
        <a
          href={`/dashboard/${asideData[0].settings.pathname}`}
          className={`${bg} flex gap-2 font-[700] capitalize items-center`}
        >
          <span className={`text-[25px] ${isOpen&&"mx-auto"}`}>{asideData[0].settings.icon}</span>
          {!isOpen&&<span className={`${text} text-[#266696]`}>
            {asideData[0].settings.link}
          </span>}
        </a>
      </div>
    </aside>
  );
};

export default Asidebar;
