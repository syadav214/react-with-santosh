import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import './transition.css';

const Transition = () => {
  return (
    <ReactCSSTransitionGroup
      transitionName="fade"
      transitionAppear={true}
      transitionAppearTimeout={500}
    >
      <h1>Hello React</h1>
    </ReactCSSTransitionGroup>
  );
};

export default Transition;
