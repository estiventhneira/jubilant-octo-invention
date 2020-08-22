import React from "react";
import { Link } from "react-router-dom";
import googleIcon from "../assets/static/google-icon.webp";
import twitterIcon from "../assets/static/twitter-icon.webp";
import "../assets/styles/LoginStyles.scss";

const SignUp = () => {
  return (
    <>
      <main className="body-login login-main">
        <section className="login">
          <h2>Registrate</h2>
          <form className="login-form" action="">
            <input className="form-email" placeholder="Nombre" type="name" />
            <input className="form-email" placeholder="Correo" type="email" />
            <input
              className="form-password"
              placeholder="Contraseña"
              type="password"
            />
            <Link className="Link" to="/">
              <button className="form-button" type="button">
                <a href="home.html">Registrate</a>
              </button>
            </Link>
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
                ¿Ya tienes cuenta?
                <Link to="/login">Entra aquí</Link>
              </p>
            </section>
          </form>
        </section>
      </main>
    </>
  );
};

export default SignUp;
