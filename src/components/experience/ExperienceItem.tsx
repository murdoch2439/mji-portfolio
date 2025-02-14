import React, {FunctionComponent} from "react"

type props={
    icon:any,
    title:string,
    experienceLevel:string
}



const ExperienceItem : FunctionComponent<props> =({icon, title, experienceLevel})=>{
    return(
        <article className={"experience__details"}>
            {icon}
            <div>
                <h4>{title}</h4>
                <small className={"text-light"}>{experienceLevel}</small>
            </div>
        </article>
    )
}


export default ExperienceItem
