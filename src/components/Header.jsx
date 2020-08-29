import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import classNames from "classnames";

import "../assets/styles/Components/Header.scss";
import logo from "../assets/static/logo-platzi-video-BW2.png";
import userIcon from "../assets/static/icons8-usuario-círculo-64.png";

import gravatar from "../utils/gravatar";
import { logoutRequest } from "../actions/index";

const Header = (props) => {
  const { user, isLogin, isRegister } = props;
  const hasUser = Object.keys(user).length > 0;

  const handleLogout = () => {
    props.logoutRequest({});
  };

  const headerClass = classNames("header", {
    isLogin,
    isRegister,
  });
  console.log(isLogin);
  return (
    <header className={headerClass}>
      <Link className="Link" to="/">
        <img className="header__img--logo" src={logo} alt="Platzi Video Logo" />
      </Link>
      <div className="header__nav">
        <div className="header__nav--profile">
          {hasUser ? (
            <img alt="perfil" src={gravatar(user.email)} />
          ) : (
            <img alt="perfil" src={userIcon} />
          )}

          <p>Perfil</p>
        </div>
        <div className="header__ul">
          <ul>
            {hasUser ? (
              <li>
                <a
                  href="https://www.google.com.ve/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {user.email}
                  <br />
                </a>
                <a href="/#logout" onClick={handleLogout}>
                  Cerrar Sesión
                </a>
              </li>
            ) : (
              <li>
                <Link to="/login">Iniciar Sección</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
