import React, {FunctionComponent, useEffect, useState} from 'react';
import "./switch.css"

type Props={
    rounded?:boolean,
    isToggled?:boolean,
    onToggle?:()=>void,
}


















const Switch : FunctionComponent<Props> =({rounded,isToggled, onToggle})=>{
    const [isRounded, setIsRounded] = useState("")
    useEffect(()=>{
        if(rounded){
            setIsRounded("rounded")
        }
    },[])
    return(
        <label className={"switch"}>
            <input type={"checkbox"} checked={isToggled} onChange={onToggle} />
            <span className={`slider ${isRounded}`} />
        </label>
    )
}


export default Switch
