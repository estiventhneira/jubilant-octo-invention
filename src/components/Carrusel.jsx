import React from "react";
import TituloDeCarrusel from "./TituloDeCarrusel";
import "../assets/styles/Components/Carrusel.scss";

const Carrusel = ({ titulo, children }) => {
  return (
    <section className="carrusel">
      <TituloDeCarrusel titulo={titulo} />
      <div className="carrusel-contenedor">{children}</div>
    </section>
  );
};

export default Carrusel;
