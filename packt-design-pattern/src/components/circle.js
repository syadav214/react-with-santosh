import React from "react";
import PropTypes from 'prop-types';

const Circle = ({ x, y, radius, fill }) => {
  return (
    <svg>
      <circle cx={x} cy={y} r={radius} fill={fill} />
    </svg>
  );
};

Circle.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  radius: PropTypes.number,
  fill: PropTypes.string,
};

Circle.defaultProps = {
  x: 30,
  y: 30,
  radius: 30,
  fill: "blue",
};

export default Circle;
