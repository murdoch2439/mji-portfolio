import React, {FunctionComponent} from "react"
import "./textInput.css"

type Props={
    type?:string,
    label:string,
    isTextArea?:boolean,
    maxLength:number,
}













const TextInput : FunctionComponent<Props> =({type, label, isTextArea, maxLength})=>{
    return(
        <div className={"form"}>
            {
                isTextArea ? <textarea  name={"message"} rows={7} placeholder={"Your Message"} required /> :
                    <>
                        <input type={type||"text"} id={"email"} maxLength={maxLength}  className={"form__input"} autoComplete={"off"} placeholder={" "} required/>
                        <label htmlFor={"email"} className={"form__label"}>{label}</label>
                    </>
            }
          {/*<input type={type||"text"} id={"email"}  className={"form__input"} autoComplete={"off"} placeholder={" "}/>*/}
          {/*<label htmlFor={"email"} className={"form__label"}>{label}</label>*/}
        </div>
    )
}
export default TextInput
