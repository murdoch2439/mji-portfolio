import React, {FunctionComponent} from "react"
import './portfolio.css'
import PortfolioItem from "./PortfolioItem";
import noda from "../../assets/noda1.png"
import trav from "../../assets/trav.png"
import taxi from "../../assets/tax.png"
import grocery from "../../assets/gro.png"
import dic from "../../assets/dic.png"
import ssa from "../../assets/ssa.jpeg"
import adit from "../../assets/adit.jpeg"
import granapreme from "../../assets/granapreme.jpeg"
import fondasi from "../../assets/fondasi.jpeg"
import Dashboard from "../../assets/Dashboard.png"
import Reading from "../../assets/Reading.png"
import sr7 from "../../assets/sr7.jpg"


 const data =[
     {id: "1", title:"i7Sms", cover:Dashboard,  github:"https://github.com", demo:"https://www.figma.com/proto/qiROfr8pDxH25EhZbhFFzj/i7sms?node-id=123-444&p=f&t=pVdPFamW2UW5TEVu-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1", work:["UX Design"]},
     {id: "222", title:"Smart Sport Agency", cover:ssa,  github:"https://github.com", demo:"https://ssadrc.com", work:["UX Design", "Fullstack Development"]},
     {id: "2", title:"Granapreme Construction", cover:granapreme,  github:"https://github.com", demo:"https://granapremeconstruction.com", work:["Web Development"]},
     {id: "3", title:"ADIT Diaspora", cover:adit,  github:"https://github.com", demo:"https://adit-diaspora.com", work:["Web Development"]},
     {id: "4", title:"Orphelinat notre dame de liesse", cover:noda, github:"https://github.com", demo:"https://nodaliesse.com", work:["Web Development"]},
     {id: "8", title:"Fullstack development & copy writing", cover:dic, github:"https://github.com", demo:"https://www.figma.com/proto/HdJ0apbneCIFEcho2SRUNx/Digital-invest-corporate?scaling=min-zoom&page-id=0%3A1&starting-point-node-id=1%3A2&node-id=1%3A2&hide-ui=1", work:["UX Design",]},

     // {id: "5", title:"Product design for taxi booking application", cover:taxi, github:"https://github.com", demo:"https://www.figma.com/proto/rW8qDLxkYCa2mdHx41oDtg/Takeseat?type=design&node-id=204-2&t=EO710uJrS6uwhpNC-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=204%3A2", work:["UX Design",]},
     {id: "9", title:"Fondation Silinta", cover:fondasi,  github:"https://github.com", demo:"https://fondationsilinta.com", work:["Web Development"]},

     {id: "4", title:"sur7.com", cover:sr7, github:"https://github.com", demo:"https://nodaliesse.com", work:["UX Design", "Mobile Development"]},
     {id: "18598", title:"Reading App", cover:Reading,  github:"https://github.com", demo:"https://www.youtube.com/shorts/F8JBZu4c87U", work:["UX Design", "Mobile Development"]},

     // {id: "6", title:"Branding and UI Design for reservation website", cover:trav, github:"https://github.com", demo:"https://www.figma.com/proto/YmOM40MjivW6XqSIG3uMHk/Trip-planer?node-id=2%3A2&starting-point-node-id=2%3A2&scaling=min-zoom", work:["UX Design",]},
     // {id: "7", title:"Rebranding of grocery eCommerce", cover:grocery,  github:"https://github.com", demo:"https://www.figma.com/proto/TdFNIsIkUMFodv1ktCrJpX/Grocery?node-id=136%3A206&scaling=min-zoom&page-id=136%3A205&starting-point-node-id=136%3A206", work:["UX Design",]},
 ]




const Portfolio : FunctionComponent =()=>{
    return(
        <section id={"portfolio"}>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>
            <div className={"container portfolio__container"}>

               {/*    <h3>This is a portfolio item title</h3>*/}
               {/*    <a href={"https://github.com"} className={"btn"} target={"_blakc"}>Github</a>*/}
               {/*    <a href={"https://github.com"} className={"btn btn-primary"} target={"_blank"}>Live Demo</a>*/}


                {data.map((item, index)=> <PortfolioItem key={index} item={item} /> )}
                {/*<PortfolioItem title={"This is a portfolio item title"} cover={image} />*/}
                {/*<PortfolioItem title={"This is a portfolio item title"} cover={image3} />*/}
                {/*<PortfolioItem title={"This is a portfolio item title"} cover={image3} />*/}
                {/*<PortfolioItem title={"This is a portfolio item title"} cover={image} />*/}
            </div>
        </section>
    )
}

export default Portfolio
