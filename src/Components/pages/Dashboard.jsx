import React, { useState } from "react";
import Asidebar from "../Asidebar/Asidebar";

function Dashboard() {
  const [isOpen, setisOpen] = useState(false);

  const handleOpenSideBar = () => {
    setisOpen(!isOpen);
  };
  const tasks = [
    { name: "AdBuba dress for ladies", price:30000 , Size: 40 },
    {  name: "AdBuba dress for ladies", price:30000 , Size: 50 },
    {  name: "AdBuba dress for ladies", price:30000 , Size: 60 },
    {  name: "iphone 15", price:30000 , Size: 60 },
  ];
  return (
    <section className="w-full ">
      <Asidebar handleOpenSideBar={handleOpenSideBar} isOpen={isOpen} />
      <main className={`${isOpen ? "pl-0 md:pl-[100px]" : "pl-0 md:pl-[250px]"}`}>
      <div className="p-10 min-h-screen ">
        <div className="text-black text-[25px] font-bold font-['Poppins']">Dashboard</div>
      <div className="p-10">
        <div className="bg-[#6BA2CB]  h-[50vh] text-center flex flex-col rounded justify-center ">
        <div className="text-white text-[35px] font-bold font-['Poppins']">Welcome Ashlyco Fashion Company</div>
        <div className=" text-white   text-lg font-normal font-['Poppins']">Kisckstart by uploading your available products and leave the rest to <br /> tisma group to the marketing for your business.</div>
   
        <div className="mt-5">
        <button class="inline-flex text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
        Get started 
        </button>
        </div>
      </div>
           <div className=" mt-10">
           <div className="text-black text-center text-[35px] font-bold font-['Poppins']">Recent Products</div>
           </div>
           <div className=" mt-10">
           <table className="table-auto w-full bg-black">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">Product Name</th>
            <th className="px-4 py-2 text-center">Price (NGN) </th>
            <th className="px-4 py-2 text-center">Size (Qty)</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={index} className="bg-white ">
              <td className="px-4 py-2">{task.name}</td>
              <td className="px-4 py-2 text-center">{task.price}</td>
              <td className="px-4 py-2 text-center">{ task.Size}</td>
            </tr>
          ))}
        </tbody>
      </table>
           </div>
      

      </div>
        
         
        </div>
      </main>
    </section>
  );
}

export default Dashboard;
