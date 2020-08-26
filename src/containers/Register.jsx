import React, { useState } from "react";
import { Link } from "react-router-dom";
import googleIcon from "../assets/static/google-icon.webp";
import twitterIcon from "../assets/static/twitter-icon.webp";
import "../assets/styles/LoginStyles.scss";

const SignUp = () => {
  const [form, setValues] = useState({
    email: "",
    name: "",
    password: "",
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSummit = (event) => {
    console.log(form);
    event.preventDefault();
  };

  return (
    <>
      <main className="body-login login-main">
        <section className="login">
          <h2>Registrate</h2>
          <form onSubmit={handleSummit} className="login-form" action="">
            <input
              name="name"
              onChange={handleInput}
              className="form-email"
              placeholder="Nombre"
              type="name"
            />
            <input
              name="email"
              onChange={handleInput}
              className="form-email"
              placeholder="Correo"
              type="email"
            />
            <input
              name="password"
              onChange={handleInput}
              className="form-password"
              placeholder="Contraseña"
              type="password"
            />
            {/* <Link className="Link" to="/">
            </Link> */}
            <button className="form-button" type="submit">
              Registrate
            </button>
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
