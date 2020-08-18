import React from "react";
import "../assets/styles/Components/Header.scss";
import logo from "../assets/static/logo-platzi-video-BW2.png";
import userIcon from "../assets/static/icons8-usuario-círculo-64.png";

const Header = () => {
  return (
    <header className="header">
      <img className="header__img--logo" src={logo} alt="Platzi Video Logo" />
      <div className="header__nav">
        <div className="header__nav--profile">
          <img alt="perfil" src={userIcon} />
          <p>Perfil</p>
        </div>
        <div className="header__ul">
          <ul>
            <li>
              <a
                href="https://www.google.co.ve/"
                target="_blank"
                rel="noreferrer"
              >
                Cuenta
              </a>
            </li>
            <li>
              <a href="/">Cerrar Sección</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
