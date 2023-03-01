import React from 'react'
import "./about.css";

import Image from "../../assets/isha.jpg";
import AboutBox from './AboutBox';
import RFile from "../../assets/PO_Resume_GH.pdf";

const About = () => {
  return (
    <section className="about container section" id='about'>
      <h2 className="section__title">About Me</h2>


      <div className="about__container grid">
        <img src={Image} alt="" className="about__img" style={{ borderRadius: '50%' }} />

        <div className="about__data grid">
          <div className="about__info">

            <p className="about__description">🙋🏻‍♀️ Hi! My name's Patricia. </p>
            <p className="about__description">👩🏻‍🎓 Recent Graduate of California State University, Fullerton with a Bachelor of Science in Computer Science.</p>
            <p className="about__description">🌇 Pursuing knowledge, experience, and connections to enhance my technical and professional skills.</p>
            <p className="about__description">⚡ Fun Facts: I enjoy building Ikea Furniture and Model building. I also enjoy playing boardgames with friends and family. 🍳 I currently picked up cooking as a hobby! Whenever I travel, I enjoy taking photos with my trusty Nikon D5300 📸 or Iphone. </p>
            <p className="about__description">👩🏻‍💻 I'm currently looking for a full-time position as a Software Engineer/Developer where I can collaborate with others, learn new techniques and practices from senior engineers. Looking to pursue a Masters Degree in Software Engineering in the future. </p>


            <a href={RFile} className="btn">Download Resume</a>
          </div>
          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Programming Languages</h3>
                <p className="skills__description">Python, SQL, Swift, HTML/CSS, JavaScript, C++, R</p>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Tools and Frameworks</h3>
                <p className="skills__description">VS Code, XCode, Git, Github, , MongoDB, MariaDB, SwiftUI, Node.js, React.js, Chart.js, RStudio, PEGA System</p>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Operating Systems</h3>
                <p className="skills__description">Windows, macOS, Linux, Raspberry Pi</p>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Other relevant skills</h3>
                <p className="skills__description">Agile Methodologies, Broadcom Rally, Visual Paradigm, Figma, Microsoft Office, Mural Digital Whiteboard</p>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Other skills</h3>
                <p className="skills__description">Photography, Detail-oriented, Organizational, Time management, Teamwork, Problem Solving, Communication, Adaptibility, Creativity, Leadership</p>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Gallup Analytics</h3>
                <p className="skills__description">Analytical, Restorative, Discipline, Individualization, Responsibility</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AboutBox />
    </section>

  )
}

export default About
