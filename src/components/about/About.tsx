import React, {FunctionComponent} from 'react';
import './about.css'
import AnotherMe from "../../assets/me.png"
import {FaAward} from "react-icons/fa"
import {FiUsers} from "react-icons/fi"
import {VscFolderLibrary} from "react-icons/vsc"
import AboutCard from "./AboutCard";
import {useGlobalStore} from "../../store/Context";














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
                        <img src={AnotherMe} alt={"me sitting in a chair"}/>
                    </div>
                </div>

                <div className={"about__content"}>
                    <div className={"about__cards"}>
                        <AboutCard icon={<FaAward className={"about__icon"}/>} title={"Experience"}
                                   subtitle={"4+ Years Working"}/>
                        <AboutCard icon={<FiUsers className={"about__icon"}/>} title={"Clients"}
                                   subtitle={"10+ Worldwide"}/>
                        <AboutCard icon={<VscFolderLibrary className={"about__icon"}/>} title={"Projects"}
                                   subtitle={"100+ Hours"}/>
                    </div>
                    <div>
                        <p className={"about__p"}>
                            Whether you are looking for a website, web app or mobile app, you landed at the right place to get your problem solved and get result.
                            From design to technical implementation, I'm able to deliver any project with a well structured work process.
                        </p>
                        <p className={"about__p"}>
                            My years of experience and works qualify me to help you transform your idea into a finished product.
                             I've been offering consulting services to small businesses and startups helping them build a strong online brand or achieving their business goals using information technologies <br />

                        </p>
                    </div>
                    <a href={"#contact"} onClick={() => setActiveSection("#contact")} className={"btn btn-primary"}>
                        Let's talk
                    </a>
                </div>
            </div>
        </section>
    )
}

export default About


