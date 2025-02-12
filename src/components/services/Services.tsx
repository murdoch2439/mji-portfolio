import React, {FunctionComponent, useCallback} from "react"
import './services.css'

import ServiceCard from "./ServiceCard";
import ServiceCardListItem from "./ServiceCardListItem";



const UI_UXDESIGN=[
    "Product Design",
    "Wire framing",
    "Prototyping",
]

const WEB_DEVELOPMENT=[
    "Website",
    "Web Apps",
    "Mobile Apps",
    "E-commerce",
    "API Conception",
    "Dev Ops",
    "Maintenance"
]



const CONTENT_CREATION=[
    "Website",
    "Blog articles",
    "Newsletter"
]

const Services : FunctionComponent =()=>{
    const onListClick= useCallback((item:string)=>{
        console.log(item)
    },[])



    return(
        <section id={"services"}>
            <h5>What I Offer</h5>
            <h2>Services</h2>
            <div className={"container services__container"}>

                <ServiceCard title={"UI/UX Design"} >
                    <ServiceCardListItem items={UI_UXDESIGN} onClick={onListClick} />
                    {/*<ServiceCardListItem title={"Lorem, ipsum dolor sit amet consecteturelit."} />*/}
                    {/*<ServiceCardListItem title={"Lorem, ipsum dolor sit amet consecteturelit."} />*/}
                    {/*<ServiceCardListItem title={"Lorem, ipsum dolor sit amet consecteturelit."} />*/}
                    {/*<ServiceCardListItem title={"Lorem, ipsum dolor sit amet consecteturelit."} />*/}
                    {/*<ServiceCardListItem title={"Lorem, ipsum dolor sit amet consecteturelit."} />*/}
                </ServiceCard>

                <ServiceCard title={"Development"} >
                    <ServiceCardListItem items={WEB_DEVELOPMENT} />
                    {/*<ServiceCardListItem title={"Lorem, ipsum dolor sit amet consecteturelit."} />*/}
                    {/*<ServiceCardListItem title={"Lorem, ipsum dolor sit amet consecteturelit."} />*/}
                    {/*<ServiceCardListItem title={"Lorem, ipsum dolor sit amet consecteturelit."} />*/}
                    {/*<ServiceCardListImet consecteturelit."} />*/}
                    {/*<ServiceCardListItem title={"Lorem, ipsum dolor sit amet consecteturelit."} />*/}
                    {/*<ServiceCardListItem title={"Lorem, ipsum dolor sit amet consecteturelit."} />*/}
                    {/*<ServiceCardListItem title={"Lorem, ipsum dolor sit amet consecteturelit."} />*/}
                </ServiceCard>

                <ServiceCard title={"Content writing"} >
                    <ServiceCardListItem items={CONTENT_CREATION} />
                    {/*<ServiceCardListItem title={"Lorem, ipsum dolor sit amet consecteturelit."} />*/}
                </ServiceCard>
            </div>
        </section>
    )
}

export default Services
