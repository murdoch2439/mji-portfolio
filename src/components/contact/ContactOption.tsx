 import React, {FunctionComponent} from 'react';
 // import {MdOutlineMail} from "react-icons/md";

 type props={
     item:any
 }


















const ContactOption : FunctionComponent<props> =({item})=>{
     const {icon, title, action, subTitle, actionTitle} = item
    return(
        <article className={"contact__option"}>
            {icon}
            <h4>{title}</h4>
            <h5>{subTitle}</h5>
            <a href={action} target={"__blank"}>{actionTitle}</a>
        </article>
    )
}
export default ContactOption
