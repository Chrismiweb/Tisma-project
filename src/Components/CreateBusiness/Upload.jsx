// import './Upload.css';
import upload from "../CreateBusiness/upload.png";
// import { Upload } from "./Upload.1";

function Upload({ handleCreatepage }) {
  return (
    <div className="UploadImg p-10 min-h-screen">
      <div className="All-product capitalize">
        <h3 className="text-3xl">Business page</h3>
      </div>
      <div className="No-product capitalize flex flex-col justify-center h-screen items-center">
        <p className="text-2xl">
          You have not created any business page yet, kindly <br /> create one
          to continue
        </p>
        <div className="No-product-img mt-10">
          {/* <img src={upload} alt=""  style={{ backgroundColor:"red", height:"10vh",}}/> */}
          <button
            onClick={handleCreatepage}
            class="inline-flex text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Create page
          </button>
        </div>
      </div>
    </div>
  );
}

export default Upload;
