import React from "react";
import { Motion, spring } from "react-motion";

const MotionTransition = () => {
  return (
    <Motion defaultStyle={{ opacity: 0.01 }} style={{ opacity: spring(1) }}>
      {(interpolatingStyle) => {
        return <h1 style={interpolatingStyle}>Hello React</h1>;
      }}
    </Motion>
  );
};

export default MotionTransition;
