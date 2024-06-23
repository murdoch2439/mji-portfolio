import React, {FunctionComponent} from "react"
import "./tagItem.css"


type props={
    title:string
}





const TagItem : FunctionComponent<props> =({title})=>{

    return(
        <div className={"tag__item_container"}>
            <p className={"tag_title"}>{title}</p>
        </div>
    )
}

export default TagItem
