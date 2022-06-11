import React from 'react'

import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
      <div className='navbar1'>
          <div className='navbar1st'>
          <Link to=""></Link>
          <Link to="/women">WOMENWEARS</Link>
          <Link to="/men">MENWEARS</Link>
          <Link to="/everythings">EVERYTHINGSELSE</Link>
          <Link to="/sale">SALE</Link>
          <Link to="/search">SEARCH</Link>
          </div>
          <div className='navbar2'><h1>SSENSE</h1></div>
          <div className='navbar3'>
              <Link to="english">ENGLISH</Link>
              <Link to="account">ACCOUNT</Link>
               <Link to="wishlist">WISHLIST</Link>
                <Link to="shopping">SHOOPING BAG</Link>
          </div>
    </div>
  )
}

export default Navbar