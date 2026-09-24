import React, {FunctionComponent} from 'react';
import './about.css'
import AnotherMe from "../../assets/me.png"
import {FaAward, } from "react-icons/fa"
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
                        <AboutCard
                            icon={<FaAward className={"about__icon"}/>}
                            title={"Experience"}
                            subtitle={"5+ Years"}
                        />
                        <AboutCard icon={<FiUsers className={"about__icon"}/>}
                                   title={"Clients"}
                                   subtitle={"10+ Worldwide"}
                        />
                        <AboutCard icon={<VscFolderLibrary className={"about__icon"}/>}
                                   title={"Projects"}
                                   subtitle={"100+ Hours"}
                        />
                    </div>
                    <div>
                        <p className={"about__p"}>
                            I partner with businesses to solve real operational and growth challenges, not to push a stack or ship a template.
                            Whether the outcome is a website, a web product, or a mobile experience, I start from the problem, the users, and the constraints, then design and build a solution that fits how your organisation actually works.
                        </p>
                        <p className={"about__p"}>
                            Over years of consulting with startups and established teams, I have delivered end-to-end: discovery, UX, implementation, and refinement with a clear process and an eye on performance, maintainability, and customization.
                            The tools are secondary. What matters is a product that removes friction, supports your goals, and can evolve with the business.
                        </p>
                    </div>
                    <a href={"#contact"} onClick={() => setActiveSection("contact")} className={"btn btn-primary"}>
                        Let's talk
                    </a>
                </div>
            </div>
        </section>
    )
}

export default About


