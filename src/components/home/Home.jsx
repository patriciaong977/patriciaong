import React from 'react';
import "./home.css";

import Me from "../../assets/isha.jpg";
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import { TypeAnimation } from 'react-type-animation';


const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">

        <img src={Me} alt="" className="home___img" style={{ borderRadius: '50%' }} />

        {/* <h1 className="home__name">Patricia Ong</h1>
        <span className="home__education">Welcome!</span> */}

        <TypeAnimation
              sequence={[
                'Hello! 👋',
                1000, // Waits 1s
                '🙋‍♀️ I am',
                1000, // Waits 2s
                'Patricia Ong',
                4000,
                () => {
                  console.log('Done typing!');
                }
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: 'var(--h1-font-size)', fontWeight: 'var(--font-bold)', marginTop: '1.5rem', marginBottom: '0.5rem', color: 'var(--title-color)'}}
            />

        <HeaderSocials />
        <text className="home__description">✨ This site's still a work in progress! ✨ </text>

        <br />
        <br />

        <a href="#contact" className="btn">Contact Me! ✉ </a>

        <ScrollDown />

      </div>

    </section>
  )
}

export default Home
