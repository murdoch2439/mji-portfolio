import React, {FunctionComponent} from "react"
type props={
    icon: any,
    title:string,
    subtitle:string
}


























const AboutCard : FunctionComponent<props> =({icon, title, subtitle})=>{
    return(
        <article className={"about__card"}>
            {icon}
            <h5>{title}</h5>
            <small>{subtitle}</small>
        </article>
    )
}


export default AboutCard
