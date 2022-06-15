import React from 'react'
import { useState, useEffect } from 'react'
// import { axios } from "axios";
import { useParams } from 'react-router-dom'
import {useCart} from "react-use-cart"
import "./MenDetails.css"
import "./Navbar.css"
import Navbar from './Navbar'

export const MenDetails = () => {
  const { id } = useParams()
  const [mens, setMens] = useState({})
  const { addItem, items } = useCart();

  let handleAdd = (mens)=>{
    addItem(mens,1);

  }
  console.log("getItems",items);
   localStorage.setItem("Items",JSON.stringify(items))
  const getData = async () => {
    
    const data1 = await fetch(`https://backend-ssense.herokuapp.com/mens`)
    let data2 = await data1.json()
    //   setMens(data2)
    // console.log("data2" ,data2)
    const detailData = data2.men.filter((e) => {
      return e._id === id
    })
    console.log(detailData[0])
    setMens(detailData[0])
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <div>
      <Navbar/>
    <div className='Main-div'>
     
                 <div className="mens-category1">
               
                        <h5>{mens.name}</h5>
                    
                    {/* <div className="mens-category-list"> */}
                        <p>{mens.desc}</p>
                        <h6>Padded polyester satin jacket</h6>
                        <p>. Half-Zip closure at stand collar</p>
                        <p>. Welt pockets</p>
                        <p>. Concealed zip vent at side-seam</p>
                        <p>. Rubberizes logo patch at back collar</p>
                        <p>. Single press-stud tab at back hem</p>
                        <p>. Elasticized cuffs and hem</p>
                        <p>. Fully lined</p>
                        <br />
                        <p> Please note that this item may not be shipped within the EU.</p>
                        <br />
                        <p> Supplier Color: OaK</p>
                        <br />
                        <p>Body: 100% polyester. Fill: 100%  polyester. Lining: 100% polyester.</p>
                        <br />
                        <p>221161M180032</p>
                   
                  </div> 
                  <div className="mens-details-img">
                        <img className='img' img src={mens.img} alt="mens" />
                  </div> 
                  <div className="mens-category1">
               
                        <h5>{mens.price} USD</h5>
                        <select name="" id="size">
                          <option value="">Select Size</option>
                          <option value="XXS">XXS</option>
                          <option value="XS">SX</option>
                          <option value="S">S</option>
                          <option value="M">M</option>
                          <option value="L">L</option>
                          <option value="XL">XL</option>
                          <option value="XXL">XXL</option>
                        </select>
                        <div className='Add-to-cart-div'>
                          <button className="add-to-cart" onClick={()=>{handleAdd(mens)}}>Add to Bag</button>
                          <button className="add-to-wish">Add to Wishlist</button>
                        </div>
                        <div className='Add-to-cart-div2'>
                          <p className='p1'>Fit Predictor</p>
                          <p className='p2'> Calculate your size</p>
                        </div>
                        <p className='p3'>Model is 6ft 1" and wear size L. SIZE GUIDE</p>
                        <p className='p4'>India : Free shipping on orders over $500 USD</p>
                       
                       
                    
                   
                  </div> 
      
    </div>
    </div>
    
  )
}


 

