import Asidebar from "../../Components/Asidebar/Asidebar";
import React, { useState } from "react";

function Business() {
  const [isOpen, setisOpen] = useState(false);

  const handleOpenSideBar = () => {
    setisOpen(!isOpen);
  };
  return (
    <section className="flex gap-4">
      <Asidebar handleOpenSideBar={handleOpenSideBar} isOpen={isOpen} />
      <main className={`${isOpen ? "pl-[100px]" : "pl-[250px]"}`}>
        <div>Business</div>
      </main>
    </section>
  );
}

export default Business;
