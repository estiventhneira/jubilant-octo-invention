import React from "react";
import propTypes from "prop-types";

const CarruselItem = ({ cover, title, year, contentRating, duration }) => {
  return (
    <>
      <div className="carrusel-item">
        <img className="carousel-item__img" src={cover} alt="" />
        <div className="details">
          <div className="carrusel--img--details">
            <img
              alt="Plus Bottom"
              src="https://img.icons8.com/flat_round/64/000000/plus.png"
            />
            <img
              alt="Plus Bottom"
              src="https://img.icons8.com/flat_round/64/000000/play--v1.png"
            />
          </div>
          <p>{title}</p>
          <p>{`${year} ${contentRating} ${duration}min`}</p>
        </div>
      </div>
    </>
  );
};

// eslint-disable-next-line react/no-typos
CarruselItem.propTypes = {
  cover: propTypes.string,
  title: propTypes.string,
  year: propTypes.number,
  contentRating: propTypes.string,
  duration: propTypes.number,
};

export default CarruselItem;
