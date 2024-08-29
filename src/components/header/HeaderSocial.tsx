import React, {FunctionComponent} from "react"
import {BsLinkedin} from  "react-icons/bs"
import {FaGithub} from "react-icons/fa"
import {FiDribbble} from "react-icons/fi"






























const HeaderSocial : FunctionComponent =()=>{
    return(
        <div className={"header__socials"}>
          <a href={"https://www.linkedin.com/in/murdoch-kalonji/"} target={"__blank"}>
            <BsLinkedin />
        </a>
          <a href={"https://github.com/murdoch2439"} target={"__blank"}>
              <FaGithub />
          </a>
          <a href={"https://dribbble.com/mr2k"} target={"__blank"}>
              <FiDribbble />
          </a>

        </div>

    )











}

export default HeaderSocial
