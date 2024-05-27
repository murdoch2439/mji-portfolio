import React, {FunctionComponent} from "react"
import "./testimonials.css"
import client1 from "../../assets/review1.jpg"
import client2 from "../../assets/review4.jpg"
import client3 from "../../assets/review5.jpg"
import petronille from "../../assets/petronille.jpg"
// import client from "../../assets/profile.png"
// import client from "../../assets/profile.png"
import TestimonialCard from "./TestimonialCard";

// import Swiper core and required modules
import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';














const data =[
    {
        id:'1',
        avatar:client1,
        comment:"It was a great experience working with a details oriented person, he always concerns about meeting" +
            " business need.",
        name:"Bryan Diam",
        job_position:"Founder, KolambApp"
    },
    {
        id:'2',
        avatar:petronille,
        comment:"I was looking for website development company to build our website with a payment system integration, I'm so happy with the" +
            " end result and I would recommend him to anyone looking for a great experience.",
        name:"Petronille Mukuna",
        job_position:"Coordinator, Nodaliesse ASBL"
    },
    {
        id:'3',
        avatar:client3,
        comment:"I really appreciated his high level of professionalism, honesty and integrity. beyond hard skills we still like working with great people socially speaking. Murdoch is one of them.",
        name:"Christine Thibault",
        job_position:"CEO, Stopchantage"
    },

]

const Testimonials : FunctionComponent =()=>{
    return(
        <section id={"testimonials"}>
            <h5>Review From Client</h5>
            <h2>Testimonials</h2>
            <Swiper className={"container testimonials__container"}
                    modules={[ Pagination,  ]}
                    spaceBetween={40}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
            >


                {
                    data.map((item, index)=>{
                        return(<SwiperSlide key={index}>
                            <TestimonialCard  item={item} />
                        </SwiperSlide>)
                    })
                }
            </Swiper>
        </section>
    )
}


export default Testimonials
