import React, {FunctionComponent, useState} from "react"
import './header.css'
import CTA from "./CTA";
import Profile from "../../assets/profile.png"
import HeaderSocial from "./HeaderSocial";
import {useGlobalStore} from "../../store/Context";
import Switch from "../Switch/Switch";
// import {BsLinkedin} from  "react-icons/bs"
// import {FaGithub} from "react-icons/fa"
// import {FiDribbble} from "react-icons/fi"


const Header : FunctionComponent =()=>{
    const { setActiveSection }= useGlobalStore()
    const [isToggled, setIsToggled]= useState(true)
    return(
























       <header>
           <div className={"container header__container"}>
               {/*<div className={"switch"}>*/}
               {/*    <Switch rounded={true} isToggled={isToggled} onToggle={()=>setIsToggled(!isToggled)} />*/}
               {/*</div>*/}
               <h2>Welcome onboard</h2>
               <h1>Personal Portfolio</h1>
               <div style={{display:"flex", alignItems:'center', justifyContent:"center", gap:"0.8rem"}}>
                   <h5 className={"text-light"}>Fullstack Development</h5>
                   <h5 className={"text-light separator"}> | </h5>
                   <h5 className={"text-light"}>UI/UX Design</h5>
                   <h5 className={"text-light separator"}> | </h5>
                   <h5 className={"text-light"}>Copy writing</h5>
               </div>
               <h4 style={{fontWeight:300}}>Build a product, feature or website to boost and grow your business'  visibility and sales.</h4>

               <CTA />








               <HeaderSocial />
               <div className={"me"}>
                   {/*<div>*/}
                   {/*    <BsLinkedin />*/}
                   {/*    <FaGithub />*/}
                   {/*    <FiDribbble />*/}
                   {/*</div>*/}
                   <img src={Profile} alt={""} />
               </div>
               <a href={"#contact"} onClick={()=>setActiveSection("#contact")} className={"scroll__down"}>Scroll Down</a>
           </div>
       </header>
    )
}

export default Header
