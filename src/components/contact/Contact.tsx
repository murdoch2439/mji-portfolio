import React, {FunctionComponent, useRef} from 'react';
import './contact.css'
import {MdOutlineMail} from "react-icons/md"
import {RiMessengerLine} from "react-icons/ri"
import {BsWhatsapp} from "react-icons/bs"
import ContactOption from "./ContactOption";
// import emailjs from '@emailjs/browser';
import TextInput from "../textInput/TextInput";

























const options=[
    {
        id:'1',
        title:"Email",
        subTitle:"murdochkalonji@gmail.com",
        action:"mailto:murdochkalonji@gmail.com",
        icon:<MdOutlineMail className={"contact__option-icon"} />,
        actionTitle:"Send a message"
    },
    {
        id:'2',
        title:"Messenger",
        subTitle:"Murdoch Khallz",
        action:"https://m.me/murdoch.khallz",
        icon:<RiMessengerLine className={"contact__option-icon"} />,
        actionTitle:"Send a message"
    },
    {
        id:'3',
        title:"WhatsApp",
        subTitle:"+243 818 081 758",
        action:"https://api.whatsapp.com/send?phone=+243818081758",
        icon:<BsWhatsapp className={"contact__option-icon"} />,
        actionTitle:"Send a message"
    },
]









const Contact : FunctionComponent =()=>{
    const form:any = useRef();
    const sendEmail = async(e:any) => {
        e.preventDefault();
        const formInputs ={name:form.current[0].value, email:form.current[1].value, object:form.current[2].value, message:form.current[3].value}
        // console.log("E target ===>",formInputs)
        // console.log("E target ===>",form.current[1].value)

        // // // e.preventDefault();
        // try{
        //     const response = await emailjs.sendForm('service_qf275h2', 'template_bhnqhc1', form.current, 'osiNwt610-fXn1yTV')
        //     e.target.reset()
        //     console.log("Response from sending email ==>",response.text);
        // }catch(error:any){
        //     console.log("Error on sending mail",error.text);
        // }
    }







    return(
        <section id={"contact"}>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className={"container contact__container"}>
                <div className={"contact__options"}>
                    {/*<article className={"contact__option"}>*/}
                    {/*    <MdOutlineMail />*/}
                    {/*    <h4>Email</h4>*/}
                    {/*    <h5>dummyemail@gom.fr</h5>*/}
                    {/*    <a href={"mailto:dummyemail@gom.fr"}>Send a message</a>*/}
                    {/*</article>*/}






                    {
                        options.map((item, index)=>{
                            return(<ContactOption key={index} item={item} />)
                        })
                    }

                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <TextInput label={"Full Name"} maxLength={30} />
                    <TextInput label={"Your Email"} type={"email"} maxLength={20} />
                    <TextInput label={"What you write for"}  maxLength={100}/>
                    {/*<TextInput label={"Your Email"} type={"email"} isTextArea={true} />*/}
                    {/*<input type={"text"} name={"name"} placeholder={"Your Full Name"} required/>*/}
                    {/*<input type={"email"} name={"email"} placeholder={"Your Email"} required/>*/}
                    <textarea className={"myTextarea"}  name={"message"} rows={14} placeholder={"Your Message"} required />
                    <button type={"submit"} className={"btn btn-primary"}>Send Message</button>
                </form>

            </div>
        </section>
    )
}

export default Contact
