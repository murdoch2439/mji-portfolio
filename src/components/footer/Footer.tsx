import React, {FunctionComponent} from "react"
import './footer.css'
import {FaFacebookF} from "react-icons/fa"
import {FiInstagram} from "react-icons/fi"
import {IoLogoTwitter} from "react-icons/io"
import {useGlobalStore} from "../../store/Context";
// import {BiBook} from "react-icons/bi";

const Footer : FunctionComponent =()=>{
    const {activeSection, setActiveSection}= useGlobalStore()
    const currentYear =  new Date().getFullYear();
    return(
        <footer>

            <a href={"#about"} className={"footer__logo"}>Murdoch Kalonji</a>
            <ul className={"permalinks"}>
                <li><a href={"#"} onClick={()=>setActiveSection("#")} className={activeSection === "#" ? "active":""}>Home</a></li>
                <li><a href={"#about"} onClick={()=>setActiveSection("#about")} className={activeSection === "#about" ? "active":""}>About</a></li>
                <li><a href={"#experience"} onClick={()=>setActiveSection("#experience")} className={activeSection === "#experience" ? "active":""}>Experience</a></li>
                <li><a href={"#services"} onClick={()=>setActiveSection("#services")} className={activeSection === "#services" ? "active":""}>Services</a></li>
                <li><a href={"#portfolio"}>Portfolio</a></li>
                <li><a href={"#testimonials"}>Testimonials</a></li>
                <li><a href={"#contact"} onClick={()=>setActiveSection("#contact")} className={activeSection === "#contact" ? "active":""}>Contact</a></li>
            </ul>
            <div className={"footer__socials"}>
                <a href={"https://web.facebook.com/murdoch.khallz"}><FaFacebookF /></a>
                <a href={"https://instagram.com"}><FiInstagram /></a>
                <a href={"https://x.com/journey2yrself"}><IoLogoTwitter /></a>
            </div>
            <div className={"footer__copyright"}>
                <small>&copy; {currentYear} <a href={"#"}>Murkorporate</a> &nbsp;| All rights reserved.</small>
            </div>
        </footer>
    )
}

export default Footer
