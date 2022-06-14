import React from 'react'
import  "./Navbar.css"
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <nav className='navbar'>

        <ul className='first'>
            <li className='first1'>
                <Link to='/mens' className='linkf first12'  >
                    MENSWEAR
                </Link>
                <Link to='/womens'  className='linkf first12'>
                    WOMENSWEAR
                </Link>
                <Link to='/Everythings'  className='linke first12'>
                    EVERYTHING ELSE
                </Link>
                <Link to='/'
                 className='first12'
                 >
                    SEARCH
                </Link>
            </li>
            <li>
            <Link to='/'  className='first12'>
            {/* <img src="https://res.cloudinary.com/ssenseweb/image/upload/v1471963917/web/ssense_logo_v2.svg" /> */}
        <p className='ssense'>SSENSE</p>
                      </Link>
            </li>
            <li className='first123'>
            <Link to='/'  className='first12' id='language'>
               <span>ENGLISH</span>
                <ul className='drop_down'>
                        <li>
                            FRANCHIES
                        </li>
                        <li>日本語</li>
                        <li>中文</li>
                        <li>한국어</li>
                    </ul>
                    
                </Link>
                <Link to='/login'  className='linkc first12'>
                LOGIN
                </Link>
                <Link to='/' className='linkb first12'>
                WISHLIST
                </Link>
                <Link to='/Checkout'  className='linka first12'>
                    SHOPPING BAG
                </Link>
            </li>
        </ul>
    </nav>
    </>
   
  )
}

export default Navbar;