import React, {FunctionComponent} from "react"
import './footer.css'
import {FaFacebookF} from "react-icons/fa"
import {FiInstagram} from "react-icons/fi"
import {IoLogoMedium} from "react-icons/io5";
import { BsTwitterX } from "react-icons/bs";


const Footer : FunctionComponent =()=>{
    // const {activeSection, setActiveSection}= useGlobalStore()
    const currentYear =  new Date().getFullYear();
    return(
        <footer>

            <a href={"#about"} className={"footer__logo"}>Mji's Portfolio</a>
            <ul className={"permalinks"}>

                {/*<li><a href={"#services"} onClick={()=>setActiveSection("#services")} className={activeSection === "#services" ? "active":""}>Services</a></li>*/}
                <li><a href={"#portfolio"}>Portfolio</a></li>
                <li><a href={"#testimonials"}>Testimonials</a></li>
            </ul>

            <div className={"footer__socials"}>
                <a target={"__blank"} href={"https://web.facebook.com/murdoch.khallz"}><FaFacebookF/></a>
                <a target={"__blank"}
                   href={"https://instagram.com/__hmr2k00_storyteller___?igsh=Y2lxdW8zYmVtOXJn"}><FiInstagram/></a>
                <a target={"__blank"} href={"https://x.com/journey2yrself"}><BsTwitterX/></a>
                <a target={"__blank"} href={"https://medium.com/@journey2yrself"}><IoLogoMedium/></a>
            </div>
            <div className={"footer__copyright"}>
                <small>&copy; {currentYear} <a href={"#"}>Mji</a> &nbsp;| All rights reserved.</small>
            </div>
        </footer>
    )
}

export default Footer
