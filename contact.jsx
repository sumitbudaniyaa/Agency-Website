import Footer from "../footer/footer";
import Header from "../header/header";
import "./contact.css";
import { IoCloseOutline } from "react-icons/io5";
import { Link as RouterLink } from "react-router-dom";

import { RiAttachment2 } from "react-icons/ri";

import { useRef, useState } from "react";
import { LuPartyPopper } from "react-icons/lu";
import emailjs from "@emailjs/browser";

const Contact = () => {

  const form = useRef();

  const[issent,setissent] = useState(false)


  const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_bkihtne', 'template_qdgbxep', form.current, {
          publicKey: 'hXpCFOONRGnt0p6Y7',
        })
        .then(
          () => {
            setissent(true);
            e.target.reset();
            setTimeout(() => {
              setissent(false);

          }, 2000);

          },
          (error) => {
            console.log('FAILED...', error.text);
            alert("Sorry! An error occured. Please try later.")
          },
        );
    };



  return (
    <>

<RouterLink to='/'><IoCloseOutline id='closebutton' /></RouterLink>

      <Header />
      <div className="contact">
        <div className="container">
        <p id='text1'>We are always happy to help<img src="angel.png" alt="" /></p>
<p id='text2'>Get in touch</p>

<form ref={form} onSubmit={sendEmail}>
<div className="name-phone-input">
<input id='user_name' type="text" placeholder='Your name' name="user_name" required/>
<input id='user_phone' type="number" placeholder='Your phone' name="user_phone" required />
</div>

<input id='user_email' type="email" placeholder='Your email' name="user_email" required/>

<input type="text" id='about_proj' placeholder='About your project' name="about_proj"/>

{issent ? <button type='submit' id='req-sent-button'>Request sent <LuPartyPopper id='partypopper' /> </button> : <button id='send-req-button' type='submit' value="send">Send Request</button>}


</form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
