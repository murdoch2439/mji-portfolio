import React, {FunctionComponent, ReactNode} from "react"

type props={
    children: ReactNode;
    title:string
}



































const ServiceCard : FunctionComponent<props> =({children, title})=>{
    return(
        <article className={"service"}>
            <div className={"service__head"}>
                <h3>{title}</h3>
            </div>
            {children}
        </article>
    )
}


export default ServiceCard
