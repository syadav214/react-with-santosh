import React, { useRef } from "react";
import Input from "./input";

const Reset = () => {
  const inputEl = useRef(null);
  const handleClick = (e) => {
    inputEl.current.reset();
  };

  return (
    <>
      <Input ref={inputEl} />
      <button type="button" onClick={handleClick}>
        Reset
      </button>
    </>
  );
};

export default Reset;
