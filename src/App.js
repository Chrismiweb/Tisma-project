import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import View from "./Components/View/View";
import Landing from "./Components/LandingPage/Landing";
import Products from "./Components/ProductsPage/Products";
import Product from "./Components/pages/Product";
import Contact from "./Components/View/Contact";
import Dashboard from "./Components/pages/Dashboard";
import DashboardContact from "./Components/pages/DashboardContact";
import Business from "./Components/pages/Business";
import Upload from './Components/CreateBusiness/Upload';
import CreateBusiness from "./Components/CreateBusiness/CreateBusiness";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/view" element={<View />} />
          <Route path="/dashboard/product" element={<Product />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/business" element={<Business />} />
          <Route path="/upload-business" element={<Upload/>}/>
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard/contact" element={<DashboardContact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
