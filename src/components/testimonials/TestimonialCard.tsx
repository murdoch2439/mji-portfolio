import React, {FunctionComponent} from "react"
import './testimonials.css'

type props={
    item:any
}



















const TestimonialCard : FunctionComponent<props> =({item})=>{
    const {name, avatar, comment, job_position} = item
    return(
        <article className={"testimonial"}>
            <div className={"client__avatar"}>
                <img src={avatar} alt={"avatar"} className={"client__avatar-img"} />
            </div>
            <h5 className={"client__name"}>{name}</h5>
            <h6 className={"client__position"}>{job_position}</h6>
            <small  className={"client__review"} >
                {comment}
            </small>
        </article>
    )
}

export default TestimonialCard
