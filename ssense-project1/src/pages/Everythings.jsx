import React from 'react'
import users from "../data/users.json";
import Style from "../css/eve.css";
import { Link } from 'react-router-dom';
const Everythings = () => {
  const [data, setData] = React.useState(users);
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
         <a href='culture.jsx'>PETS</a>
          <br/>
         <a href='culture.jsx'>SELF-CARE</a>
          <br/>
         <a href='culture.jsx'>TECHNOLOGY</a>
          <br />
          <br />
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
          <a href='culture.jsx'>AIAIAI</a>
           <br/>
         <a href='culture.jsx'>AIAIAI</a>


          <br />
          <br />
          <br />
          <br />

        </div>
        <div className='grid2'>
          {
            data && data.map(({ name, url, id,cat,desc,price }) => (
              <div className='row3'>
                <Link to="evde">
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
                    <button>AddtoCart</button>
                  </div>
                 
                  </div>
                   </Link>
                </div>
            ))
          }

        </div>
        <div className='grid3'>
           <h6>ALL CATEGORIES</h6>
          <a href='culture.jsx'>ACTIVITY</a>
          <br/>
         <a href='culture.jsx'>HOME</a>
          <br/>
         <a href='culture.jsx'>KIDS</a>
          <br/>
         <a href='culture.jsx'>PETS</a>
          <br/>
         <a href='culture.jsx'>SELF-CARE</a>
          <br/>
         <a href='culture.jsx'>TECHNOLOGY</a>
        </div>
      </div>
    
      </>
  )
}

export default Everythings

