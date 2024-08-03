import React, {FunctionComponent} from "react"
import './footerSm.css'


















const FooterSm : FunctionComponent =()=>{
    const currentYear =  new Date().getFullYear();

    return(
        <div className={"footerSm__container"}>
            <div className={"footer__copyright"}>
                <small>&copy; {currentYear} Mji &nbsp;| All rights reserved.</small>
            </div>
        </div>
    )
}

export default FooterSm
