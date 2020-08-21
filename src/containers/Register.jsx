import React from "react";
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
            <button className="form-button" type="button">
              <a href="home.html">Registrate</a>
            </button>
            <div className="rrss">
              <div className="rrss-wrapper">
                <img src={googleIcon} alt="" />
                <a href="www.google.com">Registrate con Google</a>
              </div>
              <div className="rrss-wrapper">
                <img src={twitterIcon} alt="" />
                <a href="www.twitter.com">Registrate con Twitter</a>
              </div>
            </div>
            <section className="sign-up">
              <p>
                ¿Ya tienes cuenta?
                <a href="login.html">Entra aquí</a>
              </p>
            </section>
          </form>
        </section>
      </main>
    </>
  );
};

export default SignUp;
