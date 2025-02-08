import React, {FunctionComponent, useEffect, useRef, useState,} from "react"
import './nav.css'
import {AiOutlineHome, AiOutlineUser} from "react-icons/ai"
import {BiBook, BiMessageSquareDetail} from "react-icons/bi"
import {RiServiceLine} from "react-icons/ri"
import {useGlobalStore} from "../../store/Context";
import {MdWorkOutline} from "react-icons/md";
import {FaRegNoteSticky} from "react-icons/fa6";
// import { MdWorkOutline } from "react-icons/md";



const Nav : FunctionComponent =()=>{
    const {activeSection, setActiveSection}= useGlobalStore()
    const sections = [{
        id: '',
        icon:<AiOutlineHome />
    },
        {
            id: 'about',
            icon:<AiOutlineUser  />
        },
        {
            id: 'experience',
            icon:<BiBook />
        },
        {
            id: 'services',
            icon:<RiServiceLine />
        },
        // {
        //     name: 'portfolio',
        //     icon:<MdWorkOutline />
        // },
        // {
        //     name: 'testimonials',
        //     icon:<FaRegNoteSticky />
        // }
        {
            id: 'contact',
            icon:<BiMessageSquareDetail />
        },
        ];

    const sectionRefs = useRef([]);

    useEffect(() => {
        const observerOptions = {
            root: null, // use the viewport as the root
            rootMargin: '0px',
            threshold: 0.5 // 50% of the section must be visible
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {

                }
            });
        }, observerOptions);

        sectionRefs.current.forEach(ref => {
            if (ref) observer.observe(ref);
        });

        return () => {
            sectionRefs.current.forEach(ref => {

            });
        };
    }, []);
    return (
        // <nav>
        //     <a href={"#"} onClick={()=>setActiveSection("#")} className={activeSection === "#" ? "active":""}><AiOutlineHome /></a>
        //     <a href={"#about"} onClick={()=>setActiveSection("#about")} className={activeSection === "#about" ? "active":""}><AiOutlineUser /></a>
        //     <a href={"#experience"} onClick={()=>setActiveSection("#experience")} className={activeSection === "#experience" ? "active":""}><BiBook /></a>
        //     <a href={"#services"} onClick={()=>setActiveSection("#services")} className={activeSection === "#services" ? "active":""}><RiServiceLine /></a>
        //     {/*<a href={"#portfolio"} onClick={()=>setActiveSection("#portfolio")} className={activeSection === "#portfolio" ? "active":""}><MdWorkOutline /></a>*/}
        //     {/*<a href={"#testimonials"} onClick={()=>setActiveSection("#testimonials")} className={activeSection === "#testimonials" ? "active":""}><FaRegNoteSticky /></a>*/}
        //     <a href={"#contact"} onClick={()=>setActiveSection("#contact")} className={activeSection === "#contact" ? "active":""}><BiMessageSquareDetail /></a>
        // </nav>

        <nav>
            {sections.map(section => (

                    <a key={section.id} href={`#${section.id}`} onClick={()=> {
                        if (section.id !== '') {
                            setActiveSection(section.id);
                        }
                    }} className={activeSection === section.id ? "active":""} >{section.icon}</a>
         
            ))}


            {/*<a href={"#"} onClick={() => setActiveSection("#")}*/}
            {/*   className={activeSection === "#" ? "active" : ""}><AiOutlineHome/></a>*/}
            {/*<a href={"#about"} onClick={() => setActiveSection("#about")}*/}
            {/*   className={activeSection === "#about" ? "active" : ""}><AiOutlineUser/></a>*/}
            {/*<a href={"#experience"} onClick={() => setActiveSection("#experience")}*/}
            {/*   className={activeSection === "#experience" ? "active" : ""}><BiBook/></a>*/}
            {/*<a href={"#services"} onClick={() => setActiveSection("#services")}*/}
            {/*   className={activeSection === "#services" ? "active" : ""}><RiServiceLine/></a>*/}
            {/*/!*<a href={"#portfolio"} onClick={()=>setActiveSection("#portfolio")} className={activeSection === "#portfolio" ? "active":""}><MdWorkOutline /></a>*!/*/}
            {/*/!*<a href={"#testimonials"} onClick={()=>setActiveSection("#testimonials")} className={activeSection === "#testimonials" ? "active":""}><FaRegNoteSticky /></a>*!/*/}
            {/*<a href={"#contact"} onClick={() => setActiveSection("#contact")}*/}
            {/*   className={activeSection === "#contact" ? "active" : ""}><BiMessageSquareDetail/></a>*/}
        </nav>
    )
}


export default Nav
