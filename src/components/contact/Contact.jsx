import React from 'react';
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact container section" id='contact'>
      <h2 className="section__title">WORK IN PROGRESS!</h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Hello! THIS PAGE IS NOT USABLE YET. STILL A WORK IN PROGRESS👋 </h3>
          <p className="contact__details">I know forms are stinky. 🦨💨
            <br /> Send me an email instead! ¯\_(ツ)_/¯</p>
        </div>

        <form action="" className="contact__form" >
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input type="text" className="contact__form-input" placeholder='Insert your name' required/>
            </div>

            <div className="contact__form-div">
              <input type="email" className="contact__form-input" placeholder='Insert your email'required/>
            </div>
          </div>

          <div className="contact__form-div">
              <input type="text" className="contact__form-input" placeholder='Insert your subject'required/>
          </div>

          <div className="contact__form-div contact__form-area">
            <textarea name="" id="" cols="30" rows="10" className='contact__form-input' placeholder='Write your message here' required></textarea>
          </div>

          <button className="btn">Send Message! 💬</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
