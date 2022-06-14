import React, {useState } from 'react'
import users from "../data/users.json";
import Style from "../css/eve.css";
import { Link, Navigate } from 'react-router-dom';
const Everythings = () => {
  const [men, setMens] = useState([])
  const [data, setData] = React.useState(users);
  const add = () => {
    Navigate("./checkout");
  }
   const handleTerminate = (e) => {
       
        let data2 = men.sort((a, b) => {
        let aPrice = a.price[0] === '$' ? parseFloat(a.price.slice(1,-1)) : 0;
        let bPrice = b.price[0] === '$' ? parseFloat(b.price.slice(1,-1)) : 0;
        
        if (e === 'lowest')
         { return aPrice - bPrice;
            } else if (e === 'highest') {
                return bPrice - aPrice;
      }
        })
       setMens([...data2]) 
    }
  return (
    <>
      <div className='gridmain'>
        <div className='grid1'>
          <h6>ALL CATEGORIES</h6>
          <a href='culture.jsx'>ACTIVITY</a>
          <br/>
         <a href='culture.jsx'>HOME</a>
          <br/>
         <a href='culture.jsx'>KIDS</a>
          <br/>
         <a href='fashion.jsx'>PETS</a>
          <br/>
         <a href='culture.jsx'>SELF-CARE</a>
          <br/>
         <a href='culture.jsx'>TECHNOLOGY</a>
          <br />
          <br />
           <h6>ALL DESIGNERS</h6>
          <a href='culture.jsx'>O32c</a>
          <br/>
         <a href='culture.jsx'>101 Copenhagen</a>
          <br/>
         <a href='culture.jsx'>1017 ALYX 9SM</a>
          <br/>
         <a href='culture.jsx'>2222 STUDIO</a>
          <br/>
         <a href='culture.jsx'>A-COLD-WALL</a>
          <br/>
          <a href='culture.jsx'>Acne Studios</a>
           <br/>
         <a href='culture.jsx'>Adma Ross Ceramics</a>
          <br/>
         <a href='culture.jsx'>ADER error</a>
          <br/>
         <a href='culture.jsx'>Adidas Kids</a>
          <br/>
         <a href='culture.jsx'>Agustina Bottoni</a>
          <br/>
          <a href='culture.jsx'>AIAIAI</a>
           <br/>
         <a href='culture.jsx'>Alessi</a>
          <br/>
         <a href='culture.jsx'>Alexander McQueen</a>
          <br/>
         <a href='culture.jsx'>amen</a>
          <br/>
         <a href='culture.jsx'>Amoln</a>
          <br/>
         <a href='culture.jsx'>and wander</a>
          <br/>
          <a href='culture.jsx'>ANGULUS</a>
           <br/>
         <a href='culture.jsx'>Anissa Kermiche</a>
          <br/>
         <a href='culture.jsx'>Ann Vine</a>
          <br/>
         <a href='culture.jsx'>AIAIAI</a>
          <br/>
          <a href='culture.jsx'>Akila</a>
           <br/>
         <a href='culture.jsx'>AMIRI</a>


          <br />
          <br />
          <br />
          <br />

        </div>
        <div className='grid2'>
          {
            data && data.map(({ name, url, id,cat,desc,price }) => (
              <div className='row3'>
                <Link to="/checkout">
              <div key={id} className="row4">
                <img src={url} />
                  <p className='grid8'>{name}</p>
                  <br/>
                  <p className='grid8'>{desc}</p>
                  <br/>
                  <p className='grid8'>{cat}</p>
                    <br/>
                  <p className='grid8'>{price}</p>
                    <br/>
                  <div className='btn'>
                    {/* {count} */}
                    <button className='btn'onClick={add}>AddtoCart</button>
                  </div>
                 
                  </div>
                   </Link>
                </div>
            ))
          }

        </div>

        <div className='grid3'>
            <div className="mens3">
                      
                            <ul> Latest arrivals</ul>
                            <ul> Trending</ul>
                            <ul onClick={()=>handleTerminate("lowest")} value="lowest"> Price: Low to high</ul>
                            <ul onClick={()=>handleTerminate("highest")} value="highest"> Price: High to low </ul>
                    </div> 
           <h6>ALL CATEGORIES</h6>
         <ul> Black</ul>
                            <ul> Blue</ul>
                            <ul> Brown</ul>
                            <ul> Burgundy </ul>
                            <ul> Gray</ul>
                            <ul> Green</ul>
                            <ul> Navy </ul>
                            <ul> Pink </ul>
                            <ul> Purple</ul>
                            <ul> Red </ul>
                            <ul> Tan</ul>
                            <ul> White</ul>
                            <ul> Yellow</ul>   
        </div>
      </div>
     <hr className='hrr'></hr>
      </>
  )
}

export default Everythings

