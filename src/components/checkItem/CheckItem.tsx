import React, {FunctionComponent} from 'react';
import './checkitem.css'
import {AiOutlineCheck} from "react-icons/ai";

type props={
    item:any
}






























































const CheckItem : FunctionComponent<props> =({item})=>{
    return(
        <div className={"container__check"}>
            <div>
                <AiOutlineCheck className={"container__icon"} />
            </div>
            <div>
                <p className={"container__p"}>{item.title}</p>
            </div>
        </div>
    )
}


export default CheckItem
