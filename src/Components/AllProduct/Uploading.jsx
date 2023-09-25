import React, { useState } from "react";
// import "./Uploading.css";
import Alls from "./Alls";
import {IoMdCloudUpload} from 'react-icons/io'

const Uploading = () => {
  const [showUpload, setShowUpload] = useState(false);
  const handleUploadProduct = () => {
    setShowUpload(true)
  }
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <>
      {showUpload ? (
        <Alls />
      ) : (
        // <div className="uploading">
        //   <h3>Upload Product</h3>
        //   <div className="uploader">
        //     <input
        //       className="product-name"
        //       type="text"
        //       placeholder="Product Name here"
        //     />
        //     <textarea
        //       name=""
        //       id=""
        //       cols="50"
        //       rows="15"
        //       placeholder="Product Design here"
        //     ></textarea>
        //     <div className="flexing">
        //       <input type="text" placeholder="Price(NGN)" />
        //       <input type="text" name="" id="" placeholder="WhatsApp Number" />
        //       <input type="text" placeholder="Available(QTY)" />
        //     </div>
        //     <p>Negotiate</p>
        //     <div className="check">
        //       <div className="check1">
        //         <p>Yes</p> <input type="radio" name="" id="" />
        //       </div>
        //       <div className="check2">
        //         <p>No</p> <input type="radio" name="" id="" />
        //       </div>
        //     </div>
        //     <div className="nw">
        //       <img src={""} alt="" />
        //       <p>Product image</p>
        //     </div>
        //     <div className="up_btn">
        //       <button >Upload Product</button>
        //     </div>
        //   </div>
        // </div>
        <div className="min-h-screen w-full  p-10">
         <h1 className="text-2xl">Upload Your product</h1>
         <div className=" capitalize p-10 flex flex-col gap-4">
           <input className="px p-3 rounded border border-solid border-blue-600 focus:outline-none" type="text" placeholder="Product Name here" />
           <textarea className="p-3 border border-solid border-blue-600 rounded focus:outline-none" name="" id="" cols="30" rows="8" placeholder="Product Description here"></textarea>
          <div className="flex flex-row gap-5">
            <input  className="border p-3 px-10 border-solid border-blue-600 focus:outline-none rounded" type="   number"placeholder="Price(NGN)" />
            <input  className="border p-3 px-10 border-solid border-blue-600 focus:outline-none rounded"type=" number" placeholder="Whatsapp number"/>
            <input  className="border p-3 px-10 border-solid border-blue-600 focus:outline-none rounded"type=" number" placeholder="Available Quantity"/>
          </div>
          <div className="">
          <div className="text-stone-300 text-[25px] font-normal font-['Poppins']">Negotiatable</div> 
          <div className="flex gap-10 mt-5">
            <div className="flex gap-5">
              <h2>Yes</h2>
              <input
                type="radio"
                name="option"
                value="yes"
                checked={selectedOption === 'yes'}
                onChange={handleOptionChange}
              />
            </div>
            <div className="flex gap-5">
              <h2>No</h2>
              <input
                type="radio"
                name="option"
                value="no"
                checked={selectedOption === 'no'}
                onChange={handleOptionChange}
              />
            </div>
          </div>
            <div className="flex flex-col justify-center items-center mt-5">
            <IoMdCloudUpload style={{fontSize:"50px" , cursor:"pointer", }}/>
            <div className="text-stone-300 text-[25px] font-bold font-['Poppins']">Product image</div>
            </div>
            <div className="mt-5 flex justify-end">
            <button onClick={handleUploadProduct} className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Upload Product
            </button>
          </div>


          </div>
         </div>
        </div>
      )}
    </>
  );
};

export default Uploading;
