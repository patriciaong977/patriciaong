import React from 'react';
import "./about.css";

import Image from "../../assets/isha.jpg";

const About = () => {
  return (
    <section className="about container section" id='about'>
      {/* About Title */}
      <h2 className="section__title">About Me</h2>

      {/* About Img */}
      <div className="about__container grid">
        {/* <img src={Image} alt="" className="about__img" style={{borderRadius: '50%'}} /> */}
      </div>

      <br></br>

      {/* About Info */}
      <div className="about__data grid">
        <div className="about__info">
          <p className="about__description">
            🙋‍♀️ Hi! My name's Patricia Ong. I have experience in mobile development, and web development.
            <p> 😄 She/Her </p>
            <p> 👩🏻‍🎓 Recent Graduate of California State University, Fullerton (CSUF) with a Bachelor of Science in Computer Science. 🐘 . </p>
            <p>🌇 Born in the Philippines. Living in the US and eager to pursue knowledge, experience, and connections to enhance my technical and professional capabilities. </p>
            <p> 🌱Currently learning, everything. 😆</p>
            <p>💻 I hope to one day work in the tech field. As a female Filipino immigrant, I hope to work with a diverse team.</p>
            <p>⚡ Fun fact: I like building Ikea furniture, and Gundam Models. As well as taking travel photos with my trusty Nikon D5300 or Iphone. </p>
          </p>

          <br></br>

          <a href="" className="btn">Download Resume</a>
        </div>

        <br></br>

        <div className="about__skills grid">
          <div className="skills__data">
            <div className="skills__titles">
              <h3 className="skills__name">Development</h3>
              <span className="skills__number">90%</span>
            </div>

            <div className="skills__bar">
              <span className="skills__percentage"></span>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default About
