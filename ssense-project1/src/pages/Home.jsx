import React from 'react'
import { Link } from 'react-router-dom'
import Style from "../css/home.css"

const Home = () => {
    return (
        <>
            <div className="sale">
                SALE Up to 50% OFF
            </div>

             <div className="home1">
                <div className='home11'>
                    <div className='shopmens'>
                         <Link to="mens">SHOP MENSWEAR</Link>
                    </div>
                   
                     <Link to="/mens">
                    <img src="https://res.cloudinary.com/ssenseweb/image/upload/w_700,q_90,f_auto,dpr_auto/v1654700818/mzuhflb6ch6qi1dcrcnl.jpg" alt="example" />
                    </Link>
                     <div className='home13'>
                        <p className='fashion'>Fashion</p>
                        <p className='home131'>SINEAD O DWYER ON WHY FASHION NEED LESS<br />SEASON AND MORE SIZES</p>
                        <p className='home132'>The London-Based Designer is
                            Shiifting Perspective
                            On Luxury
                        </p>
                    </div>
                </div>
               
                <div className='home12'>
                     <Link to="womens">SHOP WOMENSWEAR</Link>
                      <Link to="/womens">
                  <img src="https://res.cloudinary.com/ssenseweb/image/upload/w_700,q_90,f_auto,dpr_auto/v1651165229/wxzqngwwibn6qilref3o.jpg" alt="example" />
                    </Link>
                      <div className='home13'>
                        <p className='fashion1'>Culture</p>
                        <p className='home131'>LIKES A PRAYER: SEARCHING
                            FOR THE LIGHT IN 2022
                        </p>
                        <p className='home132'>Whitney Mallet on Apathy,Devotion,and Finding Silence in Noise   
                        </p>
                    </div>
                </div>
            </div>
            <br />
            <br/>
            <div className='home21'>
                <div>
                    <Link to="/bowen">
                  <img src="https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1653679510/nokh1fxeed1rjquv1yyb.jpg" alt="example" />
                    </Link>
                     <div>
                        <p className='home212'>RECENT</p>
                        <div className='home213'>
                            <Link to="/bowen">SECOND SKIN KATHRYN BOWEN</Link>
                            <p className='home214'>Fashion | May 31 </p>
                        </div>
                    </div>
                </div>
                <div>
                     <Link to="/greener">
                  <img src="https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1653505932/dfj4jfykkrgwl0dwlkl5.jpg" alt="example" />
                    </Link>
                    <div>
                        <p className='home212'>RECENT</p>
                        <div className='home213'>
                            <Link to="/bowen">GOING GREENER</Link>
                            <p className='home214'>Market | May 27 </p>
                        </div>
                    </div>
                </div>
                <div>
                     <Link to="/music">
                  <img src="https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1652727892/mnudzuaipmhkmrmtxf8r.jpg" alt="example" />
                    </Link>
                     <div>
                        <p className='home212'>RECENT</p>
                        <div className='home213'>
                            <Link to="/bowen">EL MUNDO ENTERO: J BALVIN <br />
                            PREPARES</Link>
                            <p className='home214'>Music | May 25 </p>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <div className='home31'>
                <div className='32'>
                      <Link to="/greener">
                  <img src="https://res.cloudinary.com/ssenseweb/image/upload/w_768,q_90,f_auto,dpr_auto/v1654522712/spel7umen0mdghteehv0.jpg" alt="example" />
                    </Link>
                     <div>
                        <p className='home331'>Featred</p>
                        <div className='home341'><Link to="sneakers">
                            SNEAKERS</Link>
                        </div>
                        
                    </div>
                    <div className='home334'>
                    <Link to="mens">SHOP MENSWEAR</Link>
                    </div>
                </div>
                <div className='home33'>
                      <Link to="/greener">
                  <img src="https://res.cloudinary.com/ssenseweb/image/upload/w_768,q_90,f_auto,dpr_auto/v1654521089/hsmzzw2ehle2ydturno7.jpg" alt="example" />
                    </Link>
                    <div>
                        <p className='home331'>Featred</p>
                        <div className='home342'><Link to="sneakers">
                            BAO BAO ISSEY MIYAKE</Link>
                        </div>
                        
                    </div>
                    <div className='home3341'>
                    <Link to="womens">SHOP WOMENSWEAR</Link>
                    </div>
                </div>
            </div>
      </>
     
  )
}

export default Home