import React from 'react';
import "./home.css";

import Me from "../../assets/isha.jpg";

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="" className="home___img" style={{borderRadius: '50%'}}/>
        <h1 className="home__name">Patricia Ong</h1>
        <span className="home__education">Recent Graduate</span>
      </div>
    </section>
  )
}

export default Home
