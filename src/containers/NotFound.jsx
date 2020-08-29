import React from "react";
import "../assets/styles/NotFound.scss";
import Header from "../components/Header";

const NotFound = () => {
  return (
    <>
      <Header />
      <main className="error">
        <section>
          <h3>página no encontrada</h3>
          <h1 className="hinge animated">404</h1>
        </section>
      </main>
    </>
  );
};

export default NotFound;
