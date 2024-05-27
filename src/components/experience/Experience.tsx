import React, {FunctionComponent} from "react"
import './experience.css'
import {BsPatchCheckFill} from "react-icons/bs"
import ExperienceItem from "./ExperienceItem";


const Experience : FunctionComponent =()=>{
    return(
        <section id={"experience"}>
            <h5>What skills I Have</h5>
            <h2>Experience</h2>














































            <div className={"container experience__container"}>
               <div className={"experience__fontend"}>
                   {/*<h3>Frontend Development </h3>*/}
                   <h3>Website</h3>
                   <div className={"experience__content"}>

                       <ExperienceItem icon={<BsPatchCheckFill className={"experience__details-icon"} />} title={"HTML"} experienceLevel={"Experienced"} />
                       <ExperienceItem icon={<BsPatchCheckFill className={"experience__details-icon"} />} title={"CSS"} experienceLevel={"Experienced"} />
                       <ExperienceItem icon={<BsPatchCheckFill className={"experience__details-icon"} />} title={"JavaScript"} experienceLevel={"Experienced"} />
                       <ExperienceItem icon={<BsPatchCheckFill className={"experience__details-icon"} />} title={"Material UI"} experienceLevel={"Experienced"} />
                       <ExperienceItem icon={<BsPatchCheckFill className={"experience__details-icon"} />} title={"WordPress"} experienceLevel={"Experienced"} />
                   </div>
               </div>

                {/*END OF FRONTEND*/}
                <div className={"experience__backend"}>
                    {/*<h3>Backend Development </h3>*/}
                    <h3>Web/mobile Application</h3>
                    <div className={"experience__content"}>
                        <ExperienceItem icon={<BsPatchCheckFill className={"experience__details-icon"} />} title={"Node JS"} experienceLevel={"Experienced"} />
                        <ExperienceItem icon={<BsPatchCheckFill className={"experience__details-icon"} />} title={"Express"} experienceLevel={"Experienced"} />
                        <ExperienceItem icon={<BsPatchCheckFill className={"experience__details-icon"} />} title={"MongoDB"} experienceLevel={"Experienced"} />
                        <ExperienceItem icon={<BsPatchCheckFill className={"experience__details-icon"} />} title={"React JS"} experienceLevel={"Experienced"} />
                        <ExperienceItem icon={<BsPatchCheckFill className={"experience__details-icon"} />} title={"React Native"} experienceLevel={"Experienced"} />
                    </div>
                </div>

                {/*END OF FRONTEND*/}
                <div className={"experience__backend"}>
                    <h3>SoftSkills</h3>
                    <div className={"experience__content"}>
                        <ExperienceItem icon={<BsPatchCheckFill className={"experience__details-icon"} />} title={"Communication"} experienceLevel={""} />
                        <ExperienceItem icon={<BsPatchCheckFill className={"experience__details-icon"} />} title={"Empathy"} experienceLevel={""} />
                        <ExperienceItem icon={<BsPatchCheckFill className={"experience__details-icon"} />} title={"Management"} experienceLevel={""} />
                        <ExperienceItem icon={<BsPatchCheckFill className={"experience__details-icon"} />} title={"Negotiation"} experienceLevel={""} />
                        {/*<ExperienceItem icon={<BsPatchCheckFill className={"experience__details-icon"} />} title={"React Native"} experienceLevel={""} />*/}
                    </div>
                </div>
                {/*END OF FRONTEND*/}
                <div className={"experience__backend"}>
                    <h3>Interests</h3>
                    <div className={"experience__content"}>
                        <ExperienceItem icon={<BsPatchCheckFill className={"experience__details-icon"} />} title={"Psychology"} experienceLevel={""} />
                        <ExperienceItem icon={<BsPatchCheckFill className={"experience__details-icon"} />} title={"Business Growth"} experienceLevel={""} />
                        <ExperienceItem icon={<BsPatchCheckFill className={"experience__details-icon"} />} title={"Aviation"} experienceLevel={""} />
                        <ExperienceItem icon={<BsPatchCheckFill className={"experience__details-icon"} />} title={"Photography"} experienceLevel={""} />
                        {/*<ExperienceItem icon={<BsPatchCheckFill className={"experience__details-icon"} />} title={"React Native"} experienceLevel={""} />*/}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience
