import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import View from './Components/View/View';
import Landing from './Components/LandingPage/Landing';
import Products from './Components/ProductsPage/Products';
import CreateBusiness from './Components/CreateBusiness/CreateBusiness';
import Upload from './Components/CreateBusiness/Upload';

function App() {
  return (
    <BrowserRouter>
      <Routes>  
        <Route path='/' element={<Landing/>}/>
        <Route path='/view' element={<View/>}/>
        <Route path='/product' element={<Products/>}/>
        <Route path='/createbusiness' element={<CreateBusiness/>}/>
        <Route path='/Upload' element={<Upload/>}/>


      </Routes>
    </BrowserRouter>
  );
}

export default App;
