import React from "react";
import "../assets/styles/Components/Search.scss";

const Search = () => {
  return (
    <section className="busqueda">
      <h2>¿Qué deseas ver hoy?</h2>
      <input className="home-input" type="text" placeholder="Busca Aquí..." />
    </section>
  );
};

export default Search;
