import React, { useState } from "react";
import Asidebar from "../Asidebar/Asidebar";

function Dashboard() {
  const [isOpen, setisOpen] = useState(false);

  const handleOpenSideBar = () => {
    setisOpen(!isOpen);
  };
  return (
    <section className="flex gap-4">
      <Asidebar handleOpenSideBar={handleOpenSideBar} isOpen={isOpen} />
      <main className={`${isOpen ? "pl-[100px]" : "pl-[250px]"}`}>
        <div>Dashboard</div>
      </main>
    </section>
  );
}

export default Dashboard;
