
import './App.css';
import Navbar from './components/Navbar';
import { Routes,Route } from 'react-router-dom';

import Home from './pages/Home';
import ShopMens from './pages/ShopMens';
import Everythings from './pages/Everythings';
import { SHopWomens } from './pages/ShopWomen';
import Footer from './pages/Footer';

import Login from './pages/Login';
import { Register } from './pages/register';
import { MenDetails } from "./pages/MenDetails"
import { Checkout } from "./pages/CheckOut";
import { WomenDetails } from "./pages/WomenDetails";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="" element={<Home />}></Route>
        <Route path="/mens" element={<ShopMens/> }></Route>
        <Route path="/womens" element={<SHopWomens />}></Route>
        <Route path='/everythings' element={<Everythings />} />
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/Menswear/:id" element={<MenDetails/>}></Route>
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/womensdetails" element={<WomenDetails/>}></Route>
        </Routes>
    
      <Footer/>
    </div>
  );
}

export default App;
