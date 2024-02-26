import './ContactForm.css'
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import logo from '../../assets/images/logo.png'
import {FaPhone,FaEnvelope,FaYoutube,FaInstagramSquare,FaFacebookSquare} from "react-icons/fa";

const ContactForm = () => {
const form = useRef();

const sendEmail = (e) => {
    e.preventDefault();

    emailjs
        .sendForm(
        "service_deekylo",
        "service_deekylo",
        form.current,
        "replace with user id"
    )
    .then(
        (result) => {
        console.log(result.text);
        console.log("message sent");
        },
        (error) => {
        console.log(error.text);
        }
    );
};

    return (
        <div className="contactform">
            <div className="titel">إتصل بنا</div>
        <div className="styledcontactform">
            <form ref={form} onSubmit={sendEmail}>
                <label> اسمك </label>
                <input type="text" name="user_name" />
                <label>بريدك الإلكتروني</label>
                <input type="email" name="user_email" />
                <label>رسالتك </label>
                <textarea name="message" />
                <input type="submit" value="إرسال" />
                    <div className='conactes'>
                        <p >تجدنا أيضا هنا</p>
                        <div className='conactes-icon'>
                            <a href="tel:+4915201686913" ><span><FaPhone /></span> </a><br/>
                            <a href="mailto:Alhuda.rostock@gmail.com"><span ><FaEnvelope /></span></a>
                            <a href="mailto:Alhuda.rostock@gmail.com"><span ><FaFacebookSquare /></span></a>
                            <a href="mailto:Alhuda.rostock@gmail.com"><span ><FaInstagramSquare /></span></a>
                            <a href="mailto:Alhuda.rostock@gmail.com"><span ><FaYoutube /></span></a>
                        </div>
                    </div>   
            </form>
            </div>
            <img src={logo} alt=''/>
        </div>
    );
};

export default ContactForm;