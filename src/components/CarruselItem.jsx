import React from "react";
import propTypes from "prop-types";

// redux
import { connect } from "react-redux";
import { setFavorite, deleteFavorite } from "../actions";

import deleteIcon from "../assets/static/remove-icon_a56b8107-2c02-49ed-bead-308031b0dd76.webp";

const CarruselItem = (props) => {
  const { cover, title, year, contentRating, duration, id, isList } = props;
  const handleSetFavorite = () => {
    props.setFavorite({
      cover,
      title,
      year,
      contentRating,
      duration,
      id,
    });
  };

  const handledeleteFavorite = (id) => {
    props.deleteFavorite(id);
  };
  return (
    <>
      <div className="carrusel-item">
        <img className="carousel-item__img" src={cover} alt="" />
        <div className="details">
          <div className="carrusel--img--details">
            <img
              alt="Play Bottom"
              src="https://img.icons8.com/flat_round/64/000000/play--v1.png"
            />

            {isList ? (
              <img
                alt="Delete Bottom"
                src={deleteIcon}
                onClick={() => handledeleteFavorite(id)}
              />
            ) : (
              <img
                onClick={handleSetFavorite}
                alt="Plus Bottom"
                src="https://img.icons8.com/flat_round/64/000000/plus.png"
              />
            )}
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

const mapDispatchToProps = {
  setFavorite,
  deleteFavorite,
};

export default connect(null, mapDispatchToProps)(CarruselItem);
