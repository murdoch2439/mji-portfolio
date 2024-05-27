import React, {FunctionComponent} from "react"
import './footerSm.css'
// import {FaFacebookF} from "react-icons/fa"
// import {FiInstagram} from "react-icons/fi"
// import {IoLogoTwitter} from "react-icons/io"


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
