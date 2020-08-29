import React, { useState } from "react";
import "../assets/styles/LoginStyles.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Header from "../components/Header";

import { loginRequest } from "../actions";

import twitterIcon from "../assets/static/twitter-icon.webp";
import googleIcon from "../assets/static/google-icon.webp";

const Login = (props) => {
  const [form, setValues] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSummit = (event) => {
    event.preventDefault();
    props.loginRequest(form);
    props.history.push("/");
  };

  return (
    <>
      <Header isLogin />
      <main className="body-login login-main">
        <section className="login">
          <h2>Inicio de sección</h2>
          <form className="login-form" action="" onSubmit={handleSummit}>
            <input
              autoComplete="username"
              name="email"
              onChange={handleInputChange}
              className="form-email"
              placeholder="Correo"
              type="email"
            />
            <input
              autoComplete="current-password"
              name="password"
              onChange={handleInputChange}
              className="form-password"
              placeholder="Contraseña"
              type="password"
            />
            {/* <Link className="Link" to="/"> */}
            <button className="form-button" type="submit">
              <span>Inicia Seccion</span>
            </button>
            {/* </Link> */}
            <div className="form-details">
              <div>
                <input type="checkbox" name="recuerdame" id="recuerdame" />
                <span>Recuérdame</span>
              </div>
              <a href="/">¿Olvidate tú Contraseña?</a>
            </div>
          </form>
          <div className="rrss">
            <div className="rrss-wrapper">
              <img src={googleIcon} alt="" />
              <a href="https://www.google.com">Registrate con Google</a>
            </div>
            <div className="rrss-wrapper">
              <img src={twitterIcon} alt="" />
              <a href="https://www.twitter.com">Registrate con Twitter</a>
            </div>
          </div>
          <section className="sign-up">
            <p>
              ¿Aún no tienes cuenta?
              <Link to="/register">¡Registrate!</Link>
            </p>
          </section>
        </section>
      </main>
    </>
  );
};

const matchDispatchToProps = {
  loginRequest,
};

export default connect(null, matchDispatchToProps)(Login);
