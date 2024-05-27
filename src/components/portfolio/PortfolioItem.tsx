import React, {FunctionComponent} from "react"


type props={
    item:any
}












const PortfolioItem : FunctionComponent<props> =({item})=>{
    const {cover, title, github, demo} = item
    return(
        <article className={"portfolio__item"}>
            <div className={"portfolio__item-image"}>
                <img src={cover} alt={""} className={"portfolio__image"} />
            </div>
            <h3>{title}</h3>
            <div className={"portfolio__item-cta"}>
                <a href={demo} className={"btn"} target={"_blank"}>See project</a>
                {/*<a href={demo} className={"btn btn-primary"} target={"_blank"}>Visit the website</a>*/}
            </div>
        </article>
    )
}

export default PortfolioItem
