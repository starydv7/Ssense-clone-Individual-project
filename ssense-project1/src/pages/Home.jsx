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
                    <img src="https://res.cloudinary.com/ssenseweb/image/upload/w_600,q_90,f_auto,dpr_auto/v1654700818/mzuhflb6ch6qi1dcrcnl.jpg" alt="example" />
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
                  <img src="https://res.cloudinary.com/ssenseweb/image/upload/w_600,q_90,f_auto,dpr_auto/v1651165229/wxzqngwwibn6qilref3o.jpg" alt="example" />
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
                  <img src="https://res.cloudinary.com/ssenseweb/image/upload/w_400,q_90,f_auto,dpr_auto/v1653679510/nokh1fxeed1rjquv1yyb.jpg" alt="example" />
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
                  <img src="https://res.cloudinary.com/ssenseweb/image/upload/w_400,q_90,f_auto,dpr_auto/v1653505932/dfj4jfykkrgwl0dwlkl5.jpg" alt="example" />
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
                  <img src="https://res.cloudinary.com/ssenseweb/image/upload/w_400,q_90,f_auto,dpr_auto/v1652727892/mnudzuaipmhkmrmtxf8r.jpg" alt="example" />
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
                  <img src="https://res.cloudinary.com/ssenseweb/image/upload/w_600,q_90,f_auto,dpr_auto/v1654522712/spel7umen0mdghteehv0.jpg" alt="example" />
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
                  <img src="https://res.cloudinary.com/ssenseweb/image/upload/w_600,q_90,f_auto,dpr_auto/v1654521089/hsmzzw2ehle2ydturno7.jpg" alt="example" />
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

            {/* beauty fashion culture part */}
            <br />
            <br/>
            <div className='home10'>
                <div>
                    <p className="home091">BEAUTY</p>
                    <div className='home454'>
                          <Link to="stories">VIEW ALL STORIES</Link>
                    </div>
                   <hr></hr>
                </div>
               
                <div className='home08'>
                     <Link to="/culture">
                  <img src="https://res.cloudinary.com/ssenseweb/image/upload/w_100,q_90,f_auto,dpr_auto/v1649085943/qgmitaaam8j3zxnvejyd.jpg" alt="example" />
                    </Link>
                    <Link to="culture">BLESSED IS THE <br />
                        BLOWOUT</Link>
                    <p className='home07'>Culture</p>
                 
               </div>
                <div className= "home08">
                    <Link to="/culture">
                  <img src="https://res.cloudinary.com/ssenseweb/image/upload/w_100,q_90,f_auto,dpr_auto/v1644252200/buf3t8mb8ntcpq1wr9sv.jpg" alt="example" />
                    </Link> 
                     <Link to="culture">MADE IN VAIN: A<br />
                        TAXONOMY OF EYE-<br />
                    OPENING BEAUTY
                    </Link>
                    <p className='home07'>Culture</p>
                  
               </div>
                <div className='home08'>
                     <Link to="/culture">
                  <img src="https://res.cloudinary.com/ssenseweb/image/upload/w_100,q_90,f_auto,dpr_auto/v1620396470/bs5cplhqqarlqwkgn9zw.jpg" alt="example" />
                    </Link> 
                    <Link to="culture">YOUR NEW PLANT-
                        <br />BASED DIET
                    </Link>
                    <p className='home07'>Fashion</p>
                    
                </div>
                
                
                <div className='home08'>
                     <Link to="/culture">
                  <img src="https://res.cloudinary.com/ssenseweb/image/upload/w_100,q_90,f_auto,dpr_auto/v1611000375/rp6nq62qdumahw1dqagx.jpg" alt="example" />
                    </Link> 
                     <Link to="fashion">INTO THE GLOSSARY
                        </Link>
                    <p className='home07'>Fashion</p>
                    
               </div>
<hr></hr>
            </div>
            <br />
            <br />
            <div className='home5'>
                <div>
                    <div className='home6'>
                        <div>
                         <img src='https://res.cloudinary.com/ssenseweb/image/upload/w_400,q_90,f_auto,dpr_auto/v1652727887/lqerf3zzhyfeaorbzfkp.jpg'alt='home'/>
                        </div>
                        <div className='homepop'>
                            <Link to="music">EL MUNDO ENTERO:J BALVIN <br />
                        PREPARES
                        </Link>
                        <p className='home09'>
                          Music
                        </p>
                        <p className='homep08'>
                            A global superstar of the higehst magnitute,J Blvin<br />
                            dominates the charts and sells out arenas becuause<br />
                            of his ability to synthesuze sounds,He got big....
                        </p>
                        </div>
                    </div> 
                     <div className='home6'>
                        <div>
                         <img src='https://res.cloudinary.com/ssenseweb/image/upload/w_400,q_90,f_auto,dpr_auto/v1652146775/klnv25mnd9q4rfoibrum.jpg'alt='home'/>
                        </div>
                        <div>
                            <p className='homepop0'>Fahion
                            </p>
                            <Link to="fashion">These collars say ,"i M here ,but i"d rather not be."</Link>
                            
                        </div>
                    </div> 
                    
                </div>
                <div className='home03'>
                    <div>
                        <img src='https://res.cloudinary.com/ssenseweb/image/upload/w_300,q_90,f_auto,dpr_auto/v1651600166/ovnakrvqeocifdzyzr5i.jpg'alt='homr4'/>
                    </div>
                    <div>
                        <p className='home222'>
                            HOME SWEET DREW HOUSE<br>
                            </br>
                            Fashion | May 12
                        </p>
                    </div>
                </div>
                <div className='hom01111'>
                    <div className='home05'>
                        <img src='https://res.cloudinary.com/ssenseweb/image/upload/w_100,q_90,f_auto,dpr_auto/v1640043578/rx9qrqkbfbni3ajifbqh.jpg' alt='j' />
                         <p className='home3111'>
                            DANGER BY <br />
                            DEFINATION:LUU<br />
                            DAN ID HUNG <br />
                            LA'S NEW LOOK
                            <br />
                            <br />
                            Fashion
                        </p>
                        
                    </div>
                    <hr/>
                    <div  className='home05'>
                         <img src='https://res.cloudinary.com/ssenseweb/image/upload/w_100,q_90,f_auto,dpr_auto/v1502805954/e7j1oddik2a43lz213yf.jpg' alt='j' />

                         <p className='home3111'>
                            DANGER BY <br />
                            DEFINATION:LUU<br />
                            DAN ID HUNG <br />
                            LA'S NEW LOOK
                            <br />
                            <br />
                            Fashion
                        </p>
                    </div>
                     <hr/>
                    <div className='home05'>
                         <img src='https://res.cloudinary.com/ssenseweb/image/upload/w_100,q_90,f_auto,dpr_auto/v1624025148/bv2hpn7sp2y0eit9aaus.jpg' alt='j' />
                           <p className='home3111'>
                            DANGER BY <br />
                            DEFINATION:LUU<br />
                            DAN ID HUNG <br />
                            LA'S NEW LOOK
                            <br />
                            <br />
                            Fashion
                        </p>
                    </div>
                    <hr/>
                    <div  className='home05'>
                         <img src='https://res.cloudinary.com/ssenseweb/image/upload/w_100,q_90,f_auto,dpr_auto/v1616618424/j5z1slaq89ieqkm2fkiz.jpg' alt='j' />
                         <p className='home3111'>
                            DANGER BY <br />
                            DEFINATION:LUU<br />
                            DAN ID HUNG <br />
                            LA'S NEW LOOK
                            <br />
                            <br />
                            Fashion
                        </p>
                    </div>
                 <hr/>
                </div>
            </div>

            <br />
            <br />
            <br />
            <div className='home90'>
                <div className='home100'>
                    <Link to="/mens">
                  <img src="https://res.cloudinary.com/ssenseweb/image/upload/w_600,q_90,f_auto,dpr_auto/v1654521406/tvhoobg837pkj2mdkgpt.jpg" alt="example" />
                    </Link>
                   <div className='home91'>
                        <p className='home92'>Feature:</p>
                        <Link to="/mens" className='home93'> SHOP WOMENSWEAR</Link>
                    </div>
                    <button  className='home94'><Link to="/mens">SHOP WOMENSWEAR</Link></button>
                </div>
                <div className='home100'>
                    <Link to="/womens">
                  <img src="https://res.cloudinary.com/ssenseweb/image/upload/w_600,q_90,f_auto,dpr_auto/v1654521441/jefniuatylwyf5zda2cc.jpg" alt="example" />
                    </Link>
                    <div className='home91'>
                        <p className='home92'>Feature:</p>
                        <Link to="/mens"> SHOP WOMENSWEAR</Link>
                    </div>
                    
                   <button className='home94'><Link to="/mens">SHOP WOMENSWEAR</Link></button>
                </div>
            </div>
            <br />
            <br/>
            <br />
            <div>
                <p className='home200'>
                    <b />PERSONAL SPACEWITH<br />
                    JOSH ITIOLA
                </p>
            </div>
            <div>
                <p className='home2002'>

                    Talking Prized Possession with the Multi-Talented
                    <br />
                    Engineer Turned Vitsoe Planner
                </p>
            </div>

            <br />
            <br />
              <div className='home21'>
                <div>
                    <Link to="/bowen">
                  <img src="https://res.cloudinary.com/ssenseweb/image/upload/w_400,q_90,f_auto,dpr_auto/v1651863209/edmf59b79yobdsulmqeu.jpg" alt="example" />
                    </Link>
                     <div>
                        <p className='home212'>RECENT</p>
                        <div className='home213'>
                            <Link to="/bowen">FRESH FACE FORWARD</Link>
                            <p className='home214'>Market | May 10 </p>
                        </div>
                    </div>
                </div>
                <div>
                     <Link to="/greener">
                  <img src="https://res.cloudinary.com/ssenseweb/image/upload/w_400,q_90,f_auto,dpr_auto/v1651505214/pavhpnylbxkvi2hgtr9z.jpg" alt="example" />
                    </Link>
                    <div>
                        <p className='home212'>RECENT</p>
                        <div className='home213'>
                            <Link to="/bowen">LA STORY:LEAVING RECORDS AND <br />
                            MUSIC FOR THE LIFE SUPPORT
                            </Link>
                            <p className='home214'>Market | May 27 </p>
                        </div>
                    </div>
                </div>
                <div>
                     <Link to="/music">
                  <img src="https://res.cloudinary.com/ssenseweb/image/upload/w_400,q_90,f_auto,dpr_auto/v1651080123/y2owfosnop7pmsqisykf.jpg" alt="example" />
                    </Link>
                     <div>
                        <p className='home212'>RECENT</p>
                        <div className='home213'>
                            <Link to="/bowen">OUR SECRET THROUGH OBJECTS<br />
                            PREPARES</Link>
                            <p className='home214'>Music | May 25 </p>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br/>

              <div className='home10'>
                <div>
                    <p className="home091">SCREEN TIME</p>
                    <div className='home454'>
                          <Link to="stories">VIEW ALL STORIES</Link>
                    </div>
                   <hr></hr>
                </div>
               
                <div className='home08'>
                     <Link to="/culture">
                  <img src="https://res.cloudinary.com/ssenseweb/image/upload/w_100,q_90,f_auto,dpr_auto/v1597072284/ob74eesfn9bniaqz6l1p.jpg" alt="example" />
                    </Link>
                    <Link to="culture">SPELL IT OUT WITH  <br />
                        TEXT ART</Link>
                    <p className='home07'>Culture</p>
                 
               </div>
                <div className= "home08">
                    <Link to="/culture">
                  <img src="https://res.cloudinary.com/ssenseweb/image/upload/w_100,q_90,f_auto,dpr_auto/v1592042466/nllj4bxgbquumy1bm593.jpg" alt="example" />
                    </Link> 
                     <Link to="culture">TH-TH-TH-THAT'S ALL<br />
                        FOLX<br />
                    
                    </Link>
                    <p className='home07'>Culture</p>
                  
               </div>
                <div className='home08'>
                     <Link to="/culture">
                  <img src="https://res.cloudinary.com/ssenseweb/image/upload/w_100,q_90,f_auto,dpr_auto/v1615384903/mk8m97d6c8utcazhgnui.jpg" alt="example" />
                    </Link> 
                    <Link to="culture">MARKET RESEARCH:
                        <br />LIGHT PHONE II
                    </Link>
                    <p className='home07'>Market</p>
                    
                </div>
                
                
                <div className='home08'>
                     <Link to="/culture">
                  <img src="https://res.cloudinary.com/ssenseweb/image/upload/w_100,q_90,f_auto,dpr_auto/v1600442374/lxfxzaavdm4dosykw6gb.jpg" alt="example" />
                    </Link> 
                    <Link to="fashion">BUY BUY BUY! SELL <br />
                        SELL SELL! THE HIGH-<br />
                        DRAMA WORLD OF..
                        </Link>
                    <p className='home07'>Fashion</p>
                    
               </div>

            </div>
            <br />
            <div className='home21'>
                <div>
                    <Link to="/bowen">
                  <img src="https://res.cloudinary.com/ssenseweb/image/upload/w_400,q_90,f_auto,dpr_auto/v1650653324/mr5ithrhc6yzygfjfkn0.jpg" alt="example" />
                    </Link>
                     <div>
                        <p className='home212'>RECENT</p>
                        <div className='home213'>
                            <Link to="/bowen">POCKET PLEASE</Link>
                            <p className='home214'>Market | May 10 </p>
                        </div>
                    </div>
                </div>
                <div>
                     <Link to="/greener">
                  <img src="https://res.cloudinary.com/ssenseweb/image/upload/w_400,q_90,f_auto,dpr_auto/v1650377394/ha1cgclezmw9lz2etg2r.jpg" alt="example" />
                    </Link>
                    <div>
                        <p className='home212'>RECENT</p>
                        <div className='home213'>
                            <Link to="/bowen">HAIR AND HIGHER POWER WITH  <br />
                            JAWARA WAUCHOPE
                            </Link>
                            <p className='home214'>Fashion | APR 21 </p>
                        </div>
                    </div>
                </div>
                <div>
                     <Link to="/music">
                  <img src="https://res.cloudinary.com/ssenseweb/image/upload/w_400,q_90,f_auto,dpr_auto/v1649855761/ppbhaz8aoqykgmmxcv1e.jpg" alt="example" />
                    </Link>
                     <div>
                        <p className='home212'>RECENT</p>
                        <div className='home213'>
                            <Link to="/bowen">MOON IS LATE<br />
                           </Link>
                            <p className='home214'>Culture | Apr 18 </p>
                        </div>
                    </div>
                </div>
            </div>
      </>
     
  )
}

export default Home