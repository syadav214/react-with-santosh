import React from "react";
import radium from "radium";

const styles = {
  backgroundColor: "red",
  width: 200,
  ":hover": {
    color: "#fff",
  },
};

// radium - will make use psuedo selector and media query in inline-query

const RadiumButton = () => {
  return <button style={styles}>Click Me!</button>;
};

export default radium(RadiumButton);
