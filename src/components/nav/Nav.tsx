import React, {FunctionComponent, useEffect, useState,} from "react"
import './nav.css'
import {AiOutlineHome, AiOutlineUser} from "react-icons/ai"
import {BiBook, BiMessageSquareDetail} from "react-icons/bi"
import {RiServiceLine} from "react-icons/ri"
import {useGlobalStore} from "../../store/Context";
import {MdWorkOutline} from "react-icons/md";
import {FaRegNoteSticky} from "react-icons/fa6";



const Nav : FunctionComponent =()=>{
    const {activeSection, setActiveSection}= useGlobalStore()
    const [sections, setSections] = useState(
        [
        {
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
        {
            id: 'portfolio',
            icon:<MdWorkOutline />
        },
        {
            id: 'testimonials',
            icon:<FaRegNoteSticky />
        },
        {
            id: 'contact',
            icon:<BiMessageSquareDetail />
        },
    ])


    useEffect(() => {
        const handleResize = () => {
            const isMobile = window.innerWidth <= 600;
            if (isMobile) {
                setSections((prevSections) => prevSections.filter((_, index) => index < 4 || index === 6));
            } else {
                // Revert back to original sections if not mobile
                setSections([
                    {
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
                    {
                        id: 'portfolio',
                        icon:<MdWorkOutline />
                    },
                    {
                        id: 'testimonials',
                        icon:<FaRegNoteSticky />
                    },
                    {
                        id: 'contact',
                        icon:<BiMessageSquareDetail />
                    },
                ]);
            }
        };

        handleResize(); // Call once on mount
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);



    return (
        // <nav>
        //     <a href={"#"} onClick={()=>setActiveSection("#")} className={activeSection === "#" ? "active":""}><AiOutlineHome /></a>
        //     <a href={"#about"} onClick={()=>setActiveSection("#about")} className={activeSection === "#about" ? "active":""}><AiOutlineUser /></a>
        //     <a href={"#experience"} onClick={()=>setActiveSection("#experience")} className={activeSection === "#experience" ? "active":""}><BiBook /></a>

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
