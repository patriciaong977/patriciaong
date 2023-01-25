import React from 'react';
import "./sidebar.css";
import Logo from "../../assets/logo.svg";

const sidebar = () => {
  return (
    <aside className='aside'>
      {/* --- Logo --- */}
      <a href="#home" className="nav__logo">
        {/* <img src={Logo} alt="" /> */}
      </a>

      {/* --- Icons --- */}
      <nav className="nav">
        <div className="nav__menu">
          <ul className="nav__list">

            {/* -- Home -- */}
            <li className="nav__item">
              <a href="#home" className="nav__link">
                <i className="icon-home"></i>
              </a>
            </li>

            {/* -- About -- */}
            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i className="icon-user-female"></i>
              </a>
            </li>

            {/* -- Resume -- */}
            <li className="nav__item">
              <a href="#resume" className="nav__link">
                <i className="icon-graduation"></i>
              </a>
            </li>

            {/* -- Portfolio -- */}
            <li className="nav__item">
              <a href="#portfolio" className="nav__link">
                <i className="icon-layers"></i>
              </a>
            </li>

            {/* -- Contact -- */}
            <li className="nav__item">
              <a href="contact" className="nav__link">
                <i className="icon-bubble"></i>
              </a>
            </li>

          </ul>
        </div>
      </nav>

      {/* --- Footer --- */}
      <div className="nav__footer">
        {/* -- Copyright-- */}
        <span className="copyright">&copy; 2023-2024.</span>
      </div>
    </aside>

  )
}

export default sidebar
