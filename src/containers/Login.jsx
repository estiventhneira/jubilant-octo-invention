import React from "react";
import "../assets/styles/LoginStyles.scss";
import { Link } from "react-router-dom";

const Login = () => (
  <main className="body-login login-main">
    <section className="login">
      <h2>Inicio de sección</h2>
      <form className="login-form" action="">
        <input className="form-email" placeholder="Correo" type="email" />
        <input
          className="form-password"
          placeholder="Contraseña"
          type="password"
        />
        <Link className="Link" to="/">
          <button className="form-button" type="button">
            <a href="home.html">Inicia Seccion</a>
          </button>
        </Link>
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
          <img src="img/google-icon.webp" alt="" />
          <a href="https://www.google.com">Registrate con Google</a>
        </div>
        <div className="rrss-wrapper">
          <img src="img/twitter-icon.webp" alt="" />
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
);

export default Login;