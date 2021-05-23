import React, { useRef } from "react";
import Input from "./input";

const Reset = (props) => {
  const inputEl = useRef(null);
  const handleClick = (e) => {
    inputEl.current.reset();
  };

  return (
    <>
      <Input ref={inputEl} />
      <button type="button" onClick={handleClick}>
        {props.text}
      </button>
    </>
  );
};

export default Reset;
