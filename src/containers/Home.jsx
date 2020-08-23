import React from "react";
import { connect } from "react-redux";
import Search from "../components/Search";
import CarruselItem from "../components/CarruselItem";

import "../assets/styles/App.scss";
import Carrusel from "../components/Carrusel";

const Home = () => {
  return (
    <>
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
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    mylist: state.mylist,
    trends: state.trends,
    originals: state.originals,
  };
};

export default connect(mapStateToProps, null)(Home);
