
import './App.css';
import Navbar from './components/Navbar';
import { Routes,Route } from 'react-router-dom';
// import Womens from './pages/Womens';
import Home from './pages/Home';
import ShopMens from './pages/ShopMens';
import Everythings from './pages/Everythings';
import { SHopWomens } from './pages/ShopWomen';
import  Mens from "./pages/Mens";
import { Womens } from "./pages/Womens";
import Footer from './pages/Footer';
// import ShopMens from './pages/ShopMens';
// import ShopWomen from './pages/ShopWomen';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="" element={<Home />}></Route>
        <Route path="/mens" element={<ShopMens/> }></Route>
        <Route path="/womens" element={<SHopWomens />}></Route>
        <Route path='/everythings' element={<Everythings />} />
       
      </Routes>
      {/* <Home/> */}
      {/* <Routes>
        <Route path='mens' element={<ShopMens/> }>
        </Route>
        <Route path='womemens' element={<ShopWomen/> }>
        </Route>
      </Routes> */}
      <br />
      <br/>
      <hr/>
      <Footer/>
    </div>
  );
}

export default App;
