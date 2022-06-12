import React from 'react'
import  "./Navbar.css"
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <nav className='navbar'>

        <ul className='navbar_list'>
            <li className='left_of_navbar'>
                <Link to='/Menswear' className='linkf linkmain'  >
                    MENSWEAR
                </Link>
                <Link to='/Womenswear'  className='linkf linkmain'>
                    WOMENSWEAR
                </Link>
                <Link to='/Everything'  className='linke linkmain'>
                    EVERYTHING ELSE
                </Link>
                <Link to='/'
                 className='linkd linkmain'
                 >
                    SEARCH
                </Link>
            </li>
            <li>
            <Link to='/'  className='linkmain'>
            {/* <img src="https://res.cloudinary.com/ssenseweb/image/upload/v1471963917/web/ssense_logo_v2.svg" /> */}
        <p className='ssense'>SSENSE</p>
                      </Link>
            </li>
            <li className='right_of_navbar'>
            <Link to='/'  className='linkmain' id='language'>
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
                <Link to='/login'  className='linkc linkmain'>
                LOGIN
                </Link>
                <Link to='/' className='linkb linkmain'>
                WISHLIST
                </Link>
                <Link to='/Checkout'  className='linka linkmain'>
                    SHOPPING BAG
                </Link>
            </li>
        </ul>
    </nav>
    </>
   
  )
}

export default Navbar

//  <div className='navbar1st'>
//         <div className='nav1'>
//           <div className='nav2'>
//           <Link to=""></Link>
//         </div>
//         <div nav3>
//           <Link to="/women">WOMENWEARS</Link>
//         </div>
//         <div>
//           <Link to="/men">MENWEARS</Link>
//           </div>
//         </div>
       
         
         
//           <Link to="/everythings">EVERYTHINGSELSE</Link>
//           <Link to="/sale">SALE</Link>
//           <Link to="/search">SEARCH</Link>
//           </div>
//           <div className='navbar2'><h1>SSENSE</h1></div>
//           <div className='navbar3'>
//               <Link to="english">ENGLISH</Link>
//               <Link to="account">ACCOUNT</Link>
//                <Link to="wishlist">WISHLIST</Link>
//                 <Link to="shopping">SHOOPING BAG</Link>