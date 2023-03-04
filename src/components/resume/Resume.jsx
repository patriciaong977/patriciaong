import React from 'react'
import "./resume.css"


const Resume = () => {
  return (
    <section className="resume section">
      <h2 className="section__title">Resume</h2>
      {/* <span className="section__subtitle">How it's been so far.</span> */}

      <div className="resume__container container">
        <div className="resume__tabs">
          <div className="resume__button resume__active button--flex">
            <i className="icon-graduation resume__icon"></i>Education
          </div>

          <div className="resume__button button--flex">
            <i className="icon-briefcase resume__icon"></i>Experience
          </div>
        </div>

        <div className="resume__sections">
          <div className="resume__content">

            {/* Education */}
            <div className="resume__data">
              <div>
                <h3 className="resume__title">California State University, Fullerton</h3>
                <span className="resume__subtitle">Bachelors of Science in Computer Science</span>
                  <div className="resume__date">
                    <i className="icon-calendar"></i> January 2020 - May 2022
                  </div>
              </div>

              <div>
                <span className="resume__rounder"></span>
                <span className="resume__line"></span>
              </div>
            </div>

            {/* Experience */}
            <div className="resume__data">
              <div></div>

              <div>
                <span className="resume__rounder"></span>
                <span className="resume__line"></span>
              </div>

              <div>
                <h3 className="resume__title">Farmers Insurance Group</h3>
                <span className="resume__subtitle">IT Agile Development Intern</span>
                  <div className="resume__date">
                    <i className="icon-calendar "></i> June 2021 - August 2021
                  </div>
              </div>


            </div>


            {/* Education */}
            <div className="resume__data">
              <div>
                <h3 className="resume__title">Cypress College</h3>
                <span className="resume__subtitle">Liberal Arts AA Degree: Math and Science Emphasis</span>
                  <div className="resume__date">
                    <i className="icon-calendar"></i> June 2015 - December 2019
                  </div>
              </div>

              <div>
                <span className="resume__rounder"></span>
                <span className="resume__line"></span>
              </div>
            </div>

            {/* Experience */}
            <div className="resume__data">
              <div></div>

              <div>
                <span className="resume__rounder"></span>
                <span className="resume__line"></span>
              </div>

              <div>
                <h3 className="resume__title">BEST Tutoring</h3>
                <span className="resume__subtitle">Academic K-12 Tutor/Teacher</span>
                  <div className="resume__date">
                    <i className="icon-calendar"></i> September 2017 - January 2020
                  </div>
              </div>


            </div>

          </div>


        </div>
      </div>
    </section>
  )
}

export default Resume
