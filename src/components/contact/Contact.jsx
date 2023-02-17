import React, { useRef } from 'react';
import "./contact.css";

import emailjs from '@emailjs/browser';

const Contact = () => {

  // EmailJS
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_m2x58hc',
        'template_e0sj7me',
        form.current,
        'WKlnj9Ib1VmnEcMWX')
      .then(
        (result) => {
          console.log(result.text);
          console.log("Email sent successfully! 📧")
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (

    <section className="contact container section" id='contact'>
      <h2 className="section__title">WORK IN PROGRESS!</h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <p className="contact__details">I know forms are stinky. 🦨💨
            <br /> Send me an email instead! ¯\_(ツ)_/¯</p>
        </div>

       {/* Contact Form */}
        <form action="" ref={form} onSubmit={sendEmail}  className="contact__form" >
          <div className="contact__form-group">

            <div className="contact__form-div">
              <input type="text" name="from_Name" className="contact__form-input" placeholder='Insert your name' required/>
            </div>

            <div className="contact__form-div">
              <input type="email" name="from_Email" className="contact__form-input" placeholder='Insert your email'required/>
            </div>
          </div>

          <div className="contact__form-div">
              <input type="text" name="from_Subject" className="contact__form-input" placeholder='Insert your subject'required/>
          </div>

          <div className="contact__form-div contact__form-area">
            <textarea name="message" id="" cols="30" rows="10"  className='contact__form-input' placeholder='Write your message here' required></textarea>
          </div>

          <button className="btn" type="submit" value="Send">Send Message! 💬</button>
        </form>
      </div>
    </section>
  )
}


export default Contact
