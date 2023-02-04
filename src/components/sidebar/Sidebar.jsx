import React from 'react';
import "./sidebar.css";
import Logo from "../../assets/logo.svg";

const Sidebar = () => {
  const [toggle, showMenu] = React.useState(false);
  return (
    <>
      <aside className={toggle ? "aside show-menu" : "aside"}>
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
              <a href="#contact" className="nav__link">
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

      <div className={toggle ? "nav__toggle nav__toggle-open" : "nav__toggle"} onClick={() => showMenu(!toggle)}>
        <i className="icon-menu"></i>
      </div>
    </>
  )
}

export default Sidebar
