import React from 'react';
import "./resume.css";

import Data from "./Data";
import Card from "./Card";

const Resume = () => {
  return (
    <section className="resume container section" id="resume">
      <h2 className="section__title">Experience</h2>
      <div className="resume__container grid">
        <div className="timeline grid">
          {Data.map((val, id) => {
            if (val.category === "education") {
              return (
                <Card
                  key={id}
                  icon={val.icon}
                  title={val.title}
                  school={val.school}
                  year={val.year}
                  desc={val.desc}
                  awards={val.awards}
                  organizations={val.organizations}
                />
              )
            }
          })}
        </div>

        <div className="timeline grid">
          {Data.map((val, index) => {
            if (val.category === "experience") {
              return (
                <Card
                  key={index}
                  icon={val.icon}
                  title={val.title}
                  company={val.company}
                  year={val.year}
                  desc={val.desc}
                />
              )
            }
          })}
        </div>

      </div>
    </section>
  )
}

export default Resume
