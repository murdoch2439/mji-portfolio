import React, {FunctionComponent} from "react"
// import {BiCheck} from "react-icons/bi";
// import {BsCheck2Circle} from "react-icons/bs";
import TagItem from "./TagItem";
import "./taglist.css"

type props={
    items: string[],
}



const TagList : FunctionComponent<props> =({items})=>{
    return(
        <div className={"tag__list"}>
            {
                items.map((item, index)=>{
                    return(
                            <TagItem key={index} title={item} />
                    )
                })
            }
        </div>
    )
}


export default TagList
