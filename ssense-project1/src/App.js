
import './App.css';
import Navbar from './components/Navbar';
import { Routes,Route } from 'react-router-dom';
import Womens from './pages/Womens';
import Home from './pages/Home';
import Mens from './pages/Mens';
import Everythings from './pages/Everythings';
import ShopMens from './pages/ShopMens';
import ShopWomen from './pages/ShopWomen';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="" element={<Home />}></Route>
        <Route path="/mens" element={<Mens/> }></Route>
        <Route path="/womens" element={<Womens />}></Route>
        <Route path='/everythings' element={<Everythings/>}/>
      </Routes>
      {/* <Home/> */}
      <Routes>
        <Route path='mens' element={<ShopMens/> }>
        </Route>
        <Route path='womemens' element={<ShopWomen/> }>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
