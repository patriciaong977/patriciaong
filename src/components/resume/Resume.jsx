import React from 'react'
import "./resume.css"


const Resume = () => {
  return (
    <section className="resume section">
      <h2 className="section__title">Journey</h2>
      {/* <span className="section__subtitle">How it's been so far.</span> */}

      <div className="resume__container container">
        <div className="resume__tabs">
          <div className="resume__button resume__active button--flex">
            <i className="icon-graduation resume__icon"></i> {" "}Education
          </div>

          <div className="resume__button button--flex">
            <i className="icon-briefcase resume__icon"></i> {" "}Experience
          </div>
        </div>

        <div className="resume__sections">
          <div className="resume__content">
            {/* Education */}
            <div className="resume__data">
              <div>
                <h3 className="resume__title"></h3>
                <span className="resume__subtitle">California State University, Fullerton</span>
                  <div className="resume__date">
                    <i className="icon-calendar "></i> 2022 - Present
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
                <h3 className="resume__title"></h3>
                <span className="resume__subtitle">California State University, Fullerton</span>
                  <div className="resume__date">
                    <i className="icon-calendar "></i> 2022 - Present
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
