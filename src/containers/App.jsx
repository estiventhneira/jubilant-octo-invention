import React from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import CarruselItem from "../components/CarruselItem";
import useInitialState from "../hooks/useInitialState";

import "../assets/styles/App.scss";
import Carrusel from "../components/Carrusel";

const App = () => {
  const InitialState = useInitialState("http://localhost:3000/initialState");
  return (
    <div className="App">
      <Header />
      <main>
        <Search />
        {InitialState.mylist.length > 0 && (
          <Carrusel titulo="Mi lista">
            {InitialState.mylist.map((item) => (
              // eslint-disable-next-line react/jsx-props-no-spreading
              <CarruselItem key={item.id} {...item} />
            ))}
          </Carrusel>
        )}

        <Carrusel titulo="Tendencias">
          {InitialState.trends.map((item) => (
            // eslint-disable-next-line react/jsx-props-no-spreading
            <CarruselItem key={item.id} {...item} />
          ))}
        </Carrusel>

        <Carrusel titulo="Recomendado">
          {InitialState.originals.map((item) => (
            // eslint-disable-next-line react/jsx-props-no-spreading
            <CarruselItem key={item.id} {...item} />
          ))}
        </Carrusel>
      </main>
    </div>
  );
};

export default App;
