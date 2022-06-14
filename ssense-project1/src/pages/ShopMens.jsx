import React from 'react'
import "./shopmens.css";
import "../App.css"
import "../components/Navbar.css"
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
const ShopMens = () => {

    const [men, setMens] = useState([])
    async function getData(){
      let data=await   fetch(`https://backend-ssense.herokuapp.com/mens`).then((d)=>
      d.json()
      )
      data=data.men
     
      setMens(data)
      
    }
    useEffect(() => {
      getData()
    }, [])
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
    <div>
       
        <div className="mens">

            <div className="mens-category">
                <div>
                    <div className="menscat">
                        <h5>ALL CATEGORIES </h5>
                    </div>
                    <div className="mens3">
                        <ul> ACCESSORIES</ul>
                        <ul> BAGS </ul>
                        <ul> CLOTHING </ul>
                        <ul> SHOES </ul>
                        </div>
                </div>
                <div>
                    <div className="menscat">
                        <h5>ALL DESIGNERS </h5>
                    </div>
                    <div className="mens3">
                        <ul> 032c</ul>
                        <ul> 1017 ALYX 9SM </ul>
                        <ul> 11 by Boris Bidjan Saberi</ul>
                        <ul> 132 5. ISSEY MIYAKE </ul>
                        <ul> 3.1 Phillip Lim</ul>
                        <ul> 3MAN</ul>
                        <ul> 424</ul>
                        <ul> 44 Lable Group</ul>
                        <ul> 4SDESIGNS</ul>
                        <ul> 99% IS</ul>
                        <ul> A PERSONAL NOTE 73</ul>
                        <ul> A-COLD-WALL* </ul>
                        <ul> A.A. Spectrum</ul>
                        <ul> A.P.C.</ul>
                        <ul> AAPE by ABathing Ape</ul>
                        <ul> Acen Studios</ul>
                        <ul> ACRONYM</ul>
                        <ul> ADER error</ul>
                        <ul> adidas Originals</ul>
                        <ul> adidas x Humanrace by Pharrell</ul>
                        <ul> Williams </ul>
                        <ul> adidas x IVY PARK </ul>
                        <ul> Adieu</ul>
                        <ul> ADISH</ul>
                        <ul> Advisory Board Crystals</ul>
                        <ul> ADYAR</ul>
                        <ul> AFFXWRKA</ul>
                        <ul> Afield Out</ul>
                        <ul> Agnona</ul>
                        <ul> AGR</ul>
                        <ul> Ahluwalia</ul>
                        <ul> Ahluwalia & PaulSmith</ul>
                        <ul> Balenciaga</ul>
                        <ul> Balmain</ul>
                        <ul> Bao Bao Lssey Miyake</ul>
                        <ul> BAPE</ul>
                        <ul> Barbour</ul>
                        <ul> Bless</ul>
                        <ul> Bloke</ul>
                        <ul> Cartier</ul>
                        <ul> CAYL</ul>
                        <ul> CDLP</ul>
                        <ul> CFCL</ul>
                        <ul> Chen Peng</ul>
                        <ul> Chet Lo</ul>
                        <ul> Chimi</ul>
                        <ul> Chin Teo</ul>
                        <ul> Christian Louboutin</ul>
                        <ul> Clarks Originals</ul>
                        <ul> Diesel</ul>
                        <ul> Dime</ul>
                        <ul> Dita</ul>
                        <ul> Dion Lee</ul>
                        <ul> Doublet</ul>
                        <ul> Dr. Martens</ul>
                        <ul> Drake's</ul>
                        <ul> Drole DE Monsieur</ul>
                        <ul> Endless Joy </ul>
                        <ul> Erdem</ul>
                        <ul> ERL</ul>
                        <ul> Etro</ul>
                        <ul> Evisu</ul>
                        <ul> Etudes</ul>
                        <ul> Factor's</ul>
                        <ul> F-LAGSTUF-F</ul>
                        <ul> F.A.S.T.</ul>
                        <ul> F.A.S.T. by F.A.S.T.</ul>
                        <ul> Gimaguas</ul>
                        <ul> Givenchy</ul>
                        <ul> Golden Goose</ul>
                        <ul> GR10K</ul>
                        <ul> Grey Ant</ul>
                        <ul> Gucci</ul>
                        <ul> Guidi</ul>
                        <ul> Han Kjobenhavn</ul>
                        <ul> Hannah Jewett</ul>
                        <ul> HANREJ</ul>
                        <ul> HARAGOA</ul>
                        <ul> Harmony</ul>
                        <ul> Hatton Labs</ul>
                        <ul> Hed Mayner</ul>
                        <ul> Helmut Lang</ul>
                        <ul> Herno</ul>
                        <ul> Juun.J</ul>
                        <ul> JW Anderson</ul>
                        <ul> Junya Watanabe</ul>
                        <ul> Kanghyuk</ul>
                        <ul> Kenzo</ul>
                        <ul> KIDILL</ul>
                        <ul> Kids Worldswide</ul>
                        <ul> KidSuper</ul>
                        <ul> Kiko Kostadinov</ul>
                        <ul> King & Tuckfield</ul>
                        <ul> Lable Under Construction</ul>
                        <ul> Laburm</ul>
                        <ul> Lacoste</ul>
                        <ul> Lanvin</ul>
                        <ul> Le Gramme</ul>
                        <ul> Levi's</ul>
                        <ul> Li-Ning</ul>
                        <ul> Lillie</ul>
                        <ul> Lillie & Co</ul>
                        <ul> Liberal Youth Ministry</ul>
                        <ul> ZENGA</ul>
                   
                        </div>
                </div>
 
            </div>
       
            <div className='data1'>
            {men.map((e)=>
                        {return (
                          <Link className="data1-item" key = {e._id} to = {`${e._id}`}>
                            <img src={e.img} className="im1" alt="pp"/>
                            <p>{e.name}</p>
                            <p>{e.desc}</p>
                            <p>{e.price}</p>
                            </Link>
                            )}
                    )}
            </div>
            <div className='menss'>
                <div>
                    <div className="menscat">
                            <h5>SORT </h5>
                    </div>
                     <div className="mens3">
                      
                            <ul> Latest arrivals</ul>
                            <ul> Trending</ul>
                            <ul onClick={()=>handleTerminate("lowest")} value="lowest"> Price: Low to high</ul>
                            <ul onClick={()=>handleTerminate("highest")} value="highest"> Price: High to low </ul>
                    </div> 
                    <div className="menscat">
                            <h5>COLORS</h5>
                    </div>
                    <div className="mens3">
                            <ul className='uderline'> ALL COLORS </ul>
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
            </div>
        </div> 
    </div>
  )
}
export default ShopMens;