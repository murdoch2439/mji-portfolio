import React, {FunctionComponent} from 'react';
import './about.css'
import AnotherMe from "../../assets/me.png"
import {FaAward} from "react-icons/fa"
import {FiUsers} from "react-icons/fi"
import {VscFolderLibrary} from "react-icons/vsc"
import AboutCard from "./AboutCard";
import {useGlobalStore} from "../../store/Context";
import {AiOutlineCheck} from "react-icons/ai"
import CheckItem from "../checkItem/CheckItem";



const items =[
    {id:"1", title:"Private"},
    {id:"2", title:"Public"},
    {id:"3", title:"Middle"},
]



const About: FunctionComponent = () => {
    const {setActiveSection} = useGlobalStore()
    return (

        <section id={"about"}>
            <h5>Get To Know</h5>
            <h2>About Me</h2>
            <div className={"container about__container"}>
                <div className={"about__me"}>
                    <div className={"about__me-image"}>
                        <img src={AnotherMe} alt={"my picture"}/>
                    </div>
                </div>

                <div className={"about__content"}>
                    <div className={"about__cards"}>
                        <AboutCard icon={<FaAward className={"about__icon"}/>} title={"Experience"}
                                   subtitle={"2+ Years Working"}/>
                        <AboutCard icon={<FiUsers className={"about__icon"}/>} title={"Clients"}
                                   subtitle={"10+ Worldwide"}/>
                        <AboutCard icon={<VscFolderLibrary className={"about__icon"}/>} title={"Projects"}
                                   subtitle={"100+ Hours"}/>
                    </div>
                    <div>
                        <p className={"about__p"}>
                            I offer design, development and consulting
                            services to small businesses just like yours.
                            Working for more than 2 years with startups, I have learned about processes and how to put together efficient information system in order to boost your business's visibility online.
                        </p>
                    </div>
                    <a href={"#contact"} onClick={() => setActiveSection("#contact")} className={"btn btn-primary"}>
                        Get a Quote
                    </a>
                </div>
            </div>
        </section>
    )
}

export default About
