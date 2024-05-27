import React, {FunctionComponent, useCallback} from "react"
import './services.css'

import ServiceCard from "./ServiceCard";
import ServiceCardListItem from "./ServiceCardListItem";

const UI_UXDESIGN=[
    "Product Design",
    "wire framing",
    "Prototyping",
    "Brand & rebranding",
    "Landing page"
]




const WEB_DEVELOPMENT=[
    "Research & analysis",
    "Features definition",
    "Web development",
    "Mobile development",
    "eCommerce development",
    "Deployment",
    "Maintenance"
]


const CONTENT_CREATION=[
    "Website",
    "Social media marketing",
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
                {/*<article className={"service"}>*/}
                {/*    <div className={"service__head"}>*/}
                {/*        <h3>UI/UX Design</h3>*/}
                {/*        <ul className={"service__list"}>*/}
                {/*            <li>*/}
                {/*                <BiCheck className={"service__list-icon"} />*/}
                {/*                <p>Lorem, ipsum dolor sit amet consecteturelit.</p>*/}
                {/*            </li>*/}
                {/*        </ul>*/}
                {/*    </div>*/}
                {/*</article>*/}

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
                    {/*<ServiceCardListItem title={"Lorem, ipsum dolor sit amet consecteturelit."} />*/}
                    {/*<ServiceCardListItem title={"Lorem, ipsum dolor sit amet consecteturelit."} />*/}
                    {/*<ServiceCardListItem title={"Lorem, ipsum dolor sit amet consecteturelit."} />*/}
                    {/*<ServiceCardListItem title={"Lorem, ipsum dolor sit amet consecteturelit."} />*/}
                </ServiceCard>

                <ServiceCard title={"Content writing"} >
                    <ServiceCardListItem items={CONTENT_CREATION} />
                    {/*<ServiceCardListItem title={"Lorem, ipsum dolor sit amet consecteturelit."} />*/}
                    {/*<ServiceCardListItem title={"Lorem, ipsum dolor sit amet consecteturelit."} />*/}
                    {/*<ServiceCardListItem title={"Lorem, ipsum dolor sit amet consecteturelit."} />*/}
                    {/*<ServiceCardListItem title={"Lorem, ipsum dolor sit amet consecteturelit."} />*/}
                    {/*<ServiceCardListItem title={"Lorem, ipsum dolor sit amet consecteturelit."} />*/}
                </ServiceCard>
            </div>
        </section>
    )
}

export default Services
