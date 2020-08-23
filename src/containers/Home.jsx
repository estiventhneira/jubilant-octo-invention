/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { connect } from "react-redux";
import Search from "../components/Search";
import CarruselItem from "../components/CarruselItem";

import "../assets/styles/App.scss";
import Carrusel from "../components/Carrusel";

const Home = ({ mylist, trends, originals }) => {
  return (
    <>
      <main>
        <Search />
        {mylist.length > 0 && (
          <Carrusel titulo="Mi lista">
            {mylist.map((item) => (
              <CarruselItem key={item.id} {...item} isList />
            ))}
          </Carrusel>
        )}

        <Carrusel titulo="Tendencias">
          {trends.map((item) => (
            <CarruselItem key={item.id} {...item} />
          ))}
        </Carrusel>

        <Carrusel titulo="Recomendado">
          {originals.map((item) => (
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
