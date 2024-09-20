import React, {FunctionComponent,} from "react"
import './nav.css'
import {AiOutlineHome, AiOutlineUser} from "react-icons/ai"
import {BiBook, BiMessageSquareDetail} from "react-icons/bi"
import {RiServiceLine} from "react-icons/ri"
import {useGlobalStore} from "../../store/Context";
// import { MdWorkOutline } from "react-icons/md";





























const Nav : FunctionComponent =()=>{
    const {activeSection, setActiveSection}= useGlobalStore()
    return(
        <nav>

            <a href={"#"} onClick={()=>setActiveSection("#")} className={activeSection === "#" ? "active":""}><AiOutlineHome /></a>
            <a href={"#about"} onClick={()=>setActiveSection("#about")} className={activeSection === "#about" ? "active":""}><AiOutlineUser /></a>
            <a href={"#experience"} onClick={()=>setActiveSection("#experience")} className={activeSection === "#experience" ? "active":""}><BiBook /></a>
            <a href={"#services"} onClick={()=>setActiveSection("#services")} className={activeSection === "#services" ? "active":""}><RiServiceLine /></a>
            {/*<a href={"#portfolio"} onClick={()=>setActiveSection("#portfolio")} className={activeSection === "#portfolio" ? "active":""}><MdWorkOutline /></a>*/}
            {/*<a href={"#testimonials"} onClick={()=>setActiveSection("#testimonials")} className={activeSection === "#testimonials" ? "active":""}><FaRegNoteSticky /></a>*/}
            <a href={"#contact"} onClick={()=>setActiveSection("#contact")} className={activeSection === "#contact" ? "active":""}><BiMessageSquareDetail /></a>
        </nav>
    )
}



export default Nav
