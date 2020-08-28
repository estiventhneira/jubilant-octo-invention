/* eslint-disable react/destructuring-assignment */
import React, { useLayoutEffect } from "react";
import { Redirect } from "react-router-dom";

import { connect } from "react-redux";

import { videoRequest } from "../actions/index";

import "../assets/styles/Components/Player.scss";

const Player = (props) => {
  const { id } = props.match.params;
  const hasPlaying = Object.keys(props.playing).length > 0;

  useLayoutEffect(() => {
    props.videoRequest(id);
  }, []);

  return hasPlaying ? (
    <div className="Player">
      <video controls autoPlay>
        <source src={props.playing.source} type="video/mp4" />
      </video>
      <div className="Player-back">
        <button type="button" onClick={() => props.history.goBack()}>
          Regresar
        </button>
      </div>
    </div>
  ) : (
    <Redirect to="404" />
  );
};

const mapStateToProps = (state) => {
  return {
    playing: state.playing,
  };
};

const mapDispatchToProps = {
  videoRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
