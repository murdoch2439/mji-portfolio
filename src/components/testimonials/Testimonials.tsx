import React, {FunctionComponent} from "react"
import "./testimonials.css"
import client1 from "../../assets/bonny.jpg"
import client3 from "../../assets/mto.jpeg"
import petronille from "../../assets/petronille.jpg"
import TestimonialCard from "./TestimonialCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Pagination, } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data =[
    {
        id:'1',
        avatar:client1,
        comment:"It was a positive experience to work with you, you are such a details oriented person and always concerned with the overall experience while addressing client needs.",
        name:"Bony Isamene",
        job_position:"President, ADIT Diaspora"
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
        name:"Obed MUTENGA",
        job_position:"CEO, Smart Sport Agency"
    },
]



const Testimonials : FunctionComponent =()=>{
    return(
        <section id={"testimonials"}>
            <h5>Review From Client</h5>
            <h2>Testimonials</h2>

            <Swiper
                className={"container testimonials__container"}
                spaceBetween={40}
                modules={[Pagination]}
                slidesPerView={1}
                // onSlideChange={() => console.log('slide change')}
                // onSwiper={(swiper:any) => console.log(swiper)}
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
