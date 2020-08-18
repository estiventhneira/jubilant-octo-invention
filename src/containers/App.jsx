import React from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import CarruselItem from "../components/CarruselItem";

import "../assets/styles/App.scss";
import Carrusel from "../components/Carrusel";

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Search />
        <Carrusel titulo="Mi lista">
          <CarruselItem />
          <CarruselItem />
          <CarruselItem />
          <CarruselItem />
          <CarruselItem />
          <CarruselItem />
          <CarruselItem />
          <CarruselItem />
          <CarruselItem />
          <CarruselItem />
          <CarruselItem />
          <CarruselItem />
        </Carrusel>

        <Carrusel titulo="Tendencias">
          <CarruselItem />
          <CarruselItem />
          <CarruselItem />
          <CarruselItem />
          <CarruselItem />
          <CarruselItem />
        </Carrusel>

        <Carrusel titulo="Recomendado">
          <CarruselItem />
          <CarruselItem />
          <CarruselItem />
          <CarruselItem />
          <CarruselItem />
          <CarruselItem />
        </Carrusel>
      </main>
    </div>
  );
};

export default App;
