import Asidebar from "../../Components/Asidebar/Asidebar";
import React, { useState } from "react";
import Upload from '../CreateBusiness/Upload';
import CreateBusiness from "../CreateBusiness/CreateBusiness";

const Business = () => {
  const [isOpen, setisOpen] = useState(false);
  const [showBusiness, setShowBusiness] = useState(false);

  const handleOpenSideBar = () => {
    setisOpen(!isOpen);
  };
  const handleCreatepage = () => {
    setShowBusiness(!showBusiness)
  };
  return (
    <section className="">
      <Asidebar handleOpenSideBar={handleOpenSideBar} isOpen={isOpen} />
      <main className={`${isOpen ? "pl-0 md:pl-[100px]" : "pl-0 md:pl-[250px]"}`}>
        <div> {
          showBusiness ? (<CreateBusiness/>) : (<Upload handleCreatepage={handleCreatepage}/>)
          } </div>
      </main>
    </section>
  );
}

export default Business;
