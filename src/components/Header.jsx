import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/Components/Header.scss";
import logo from "../assets/static/logo-platzi-video-BW2.png";
import userIcon from "../assets/static/icons8-usuario-círculo-64.png";

const Header = () => {
  return (
    <header className="header">
      <Link className="Link" to="/">
        <img className="header__img--logo" src={logo} alt="Platzi Video Logo" />
      </Link>
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
              <Link to="/login">Iniciar Sección</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
