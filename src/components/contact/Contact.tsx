import React, {FunctionComponent, useRef, useState} from 'react';
import './contact.css'
import {MdOutlineMail} from "react-icons/md"
import {RiMessengerLine} from "react-icons/ri"
import {BsCheck, BsWhatsapp} from "react-icons/bs"
import ContactOption from "./ContactOption";
import emailjs, {EmailJSResponseStatus} from '@emailjs/browser';
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
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [emailSent, setEmailSent] = useState(false)
    const form:any = useRef();
    const sendEmail = async(e:any) => {
        e.preventDefault();
        setIsSubmitting(true)
        const formInputs:any ={fullName:form.current[0].value, email:form.current[1].value, phone:form.current[2].value, subject:form.current[3].value, message:form.current[4].value}
        console.log("E target ===>",formInputs)

        try{
           const response = await emailjs.send('service_4g3mrik', 'template_qtbqx7e', formInputs, {
               publicKey: 'XIMcLh0iWKbyugbzS',
           })

            if(response.status === 200){
                setIsSubmitting(false)
                e.target.reset()
                setEmailSent(true)
                console.log("Response from sending email ==>",response.text);
            }

         }catch(error:any){
            console.log("Error on sending mail",error.text);
            if (error instanceof EmailJSResponseStatus) {
                console.log('EMAIL JS FAILED...', error);
                return;
            }
            console.log('ERROR', error);


         }
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
                {
                    emailSent
                        ?
                        <div className={"flex-direction"}>
                            <div>
                                <div className={"flex-direction check-circle"}>
                                    <div className={"flex-direction circle"}>
                                        {/*<FaRegCheckCircle  className={"checkIcon"}/>*/}
                                        <BsCheck className={"checkIcon"}/>
                                    </div>


                                </div>
                                <p className={""}> Your message has been sent successfully!</p>
                                <div className={"flex-direction"}>

                                    <button className={"btn btn-primary"} type={"button"}
                                            onClick={(state) => setEmailSent(!state)}
                                    >Send another Message?
                                    </button>
                                </div>
                            </div>


                        </div> :
                        <form ref={form} onSubmit={sendEmail}>
                            <TextInput label={"Full Name"} name={"fullName"} maxLength={30}/>
                            <TextInput label={"Your Email"} type={"email"} name={"email"} maxLength={20}/>
                            <TextInput label={"Your Phone"} type={"tel"} name={"phone"} maxLength={20}/>
                            <TextInput label={"What you write for"} type={'"text'} name={"subject"} maxLength={100}/>
                            {/*<TextInput label={"Your Email"} type={"email"} isTextArea={true} />*/}
                            {/*<input type={"text"} name={"name"} placeholder={"Your Full Name"} required/>*/}
                            {/*<input type={"email"} name={"email"} placeholder={"Your Email"} required/>*/}
                            <textarea className={"myTextarea"} name={"message"} rows={14} placeholder={"Your Message"}
                                      required/>
                            <button type={"submit"} className={"btn btn-primary"} disabled={isSubmitting}>{ isSubmitting ? "Submitting" : "Send Message" }</button>
                        </form>

                }


            </div>
        </section>
    )
}

export default Contact
