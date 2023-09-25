import Asidebar from "../Asidebar/Asidebar";
import React, { useState } from "react";
import All from "../AllProduct/All";
import Uploading from "../AllProduct/Uploading";

function Product() {
  const [isOpen, setisOpen] = useState(false);
  const [showUpload, setShowUpload] = useState(false);

  const handleOpenSideBar = () => {
    setisOpen(!isOpen);
  };
  const handleUploadPage = () => {
    setShowUpload(!showUpload);
  };
  return (
    <section className="">
      <Asidebar handleOpenSideBar={handleOpenSideBar} isOpen={isOpen} />
      <main className={`${isOpen ? "pl-[100px]" : "pl-[250px]"}`}>
        <div>{showUpload ? <Uploading  /> : <All handleUploadPage={handleUploadPage}/>} </div>
      </main>
    </section>
  );
}

export default Product;
