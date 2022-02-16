import React, { useRef } from "react";

const LearningRefs = () => {
  const inputRef = useRef(null);

  const onClick = () => {
    console.log(inputRef);
    inputRef.current.focus();
    inputRef.current.value = "test value";
  };

  return (
    <div>
      <h1>Learning Refs</h1>
      <input ref={inputRef} type="text" />
      <button onClick={onClick}>Focus the input</button>
    </div>
  );
};

export default LearningRefs;
