import React, {FunctionComponent} from "react"
// import {BiCheck} from "react-icons/bi";
import {BsCheck2Circle} from "react-icons/bs";

type props={
    items: string[],
    onClick?:(item:string)=>void,
}






const ServiceCardListItem : FunctionComponent<props> =({items, onClick})=>{
    return(
        <ul className={"service__list"}>
            {
                items.map((item, index)=>{
                    return(
                        <li key={index} onClick={()=>onClick?.(item)}>
                            <BsCheck2Circle className={"service__list-icon"} />
                            <p>{item}</p>
                        </li>
                    )
                })
            }
        </ul>
    )
}



export default ServiceCardListItem
