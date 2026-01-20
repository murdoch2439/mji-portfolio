import React, {FunctionComponent, ReactElement} from "react"
type props={
    icon: ReactElement,
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
