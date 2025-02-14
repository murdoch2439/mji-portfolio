import React, {FunctionComponent, ReactNode} from "react"

type props={
    children: ReactNode;
    title:string;
    isPopular?: boolean
}

const ServiceCard : FunctionComponent<props> =({children, title, isPopular})=>{
    return(
            <article>
                <div>
                    {

                        isPopular && <div className={`service ${isPopular ? "isPopular" : ""}`}>Most demanded</div>
                    }

                </div>
                <div className={"service"}>
                    <div className={"service__head"}>
                        <h3>{title}</h3>
                    </div>
                    {children}
                </div>

            </article>

    )
}


export default ServiceCard
