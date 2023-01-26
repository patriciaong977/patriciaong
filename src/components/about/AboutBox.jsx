import React from 'react'

const AboutBox = () => {
  return (
    <div className="about__boxes grid">
      <div className="about__box">
        <i className="about__icon icon-fire"></i>

        <div>
          <h3 className="about__title">18</h3>
          <span className="about__subtitle">Github Repository</span>
        </div>
      </div>

      <div className="about__box">
        <i className="about__icon icon-cup"></i>

        <div>
          <h3 className="about__title">Still Drinking</h3>
          <span className="about__subtitle">Cup of Coffee</span>
        </div>
      </div>

      <div className="about__box">
        <i className="about__icon icon-camera"></i>

        <div>
          <h3 className="about__title">1000+</h3>
          <span className="about__subtitle">Photos Taken</span>
        </div>
      </div>

      <div className="about__box">
        <i className="about__icon icon-wrench"></i>

        <div>
          <h3 className="about__title">32</h3>
          <span className="about__subtitle">Furniture Assembled</span>
        </div>
      </div>

      <div className="about__box">
        <i className="about__icon icon-plane"></i>

        <div>
          <h3 className="about__title">21</h3>
          <span className="about__subtitle">US States Traveled</span>
        </div>
      </div>

      <div className="about__box">
        <i className="about__icon icon-puzzle"></i>

        <div>
          <h3 className="about__title">5</h3>
          <span className="about__subtitle">Gundam Models Built</span>
        </div>
      </div>

    </div>
  )
}

export default AboutBox
