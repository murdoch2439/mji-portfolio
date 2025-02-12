import React, {FunctionComponent} from "react"
import TagList from "../tags/TagList";

type props={
    item:any
}


const PortfolioItem : FunctionComponent<props> =({item})=>{
    const {cover, demo, work} = item
    return(
        <article className={"portfolio__item"}>
            <div className={"portfolio__item-image"}>
                <img src={cover} alt={""} className={"portfolio__image"} />
            </div>

            <TagList  items={work}/>
            <div className={"portfolio__item-cta"}>
                <a href={demo} className={"btn"} target={"__blank"}>See project</a>
                {/*<a href={demo} className={"btn btn-primary"} target={"_blank"}>Visit the website</a>*/}
            </div>
        </article>
    )
}



export default PortfolioItem
