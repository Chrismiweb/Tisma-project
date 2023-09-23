import Asidebar from '../Asidebar/Asidebar'
import React, { useState } from "react";

function Product() {
  const [isOpen, setisOpen] = useState(false);

  const handleOpenSideBar = () => {
    setisOpen(!isOpen);
  };
  return (
    <section className="flex gap-4">
      <Asidebar handleOpenSideBar={handleOpenSideBar} isOpen={isOpen} />
      <main className={`${isOpen ? "pl-[100px]" : "pl-[250px]"}`}>
        <div>Product</div>
      </main>
    </section>
  );
}

export default Product