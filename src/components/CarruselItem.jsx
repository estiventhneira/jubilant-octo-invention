import React from "react";

const CarruselItem = () => {
  return (
    <>
      <div className="carrusel-item">
        <img
          src="https://images.pexels.com/photos/4171211/pexels-photo-4171211.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
          alt=""
          width="100%"
        />
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
          <p>Titulo Descriptivo</p>
          <p>2019 +16 114 min</p>
        </div>
      </div>
    </>
  );
};

export default CarruselItem;
