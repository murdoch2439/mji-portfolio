import React, {FunctionComponent,} from "react"
import {useGlobalStore} from "../../store/Context";

const CTA :FunctionComponent =()=>{
    const {setActiveSection}= useGlobalStore()



    return(
        <div className={"cta"}>
            <a
                href={"#portfolio"}
                // download
                className={"btn"}>See my works</a>
            <a href={"#contact"} onClick={()=>setActiveSection("#contact")}  className={"btn btn-primary"}>Let's Talk</a>
        </div>
    )
}

export default CTA
