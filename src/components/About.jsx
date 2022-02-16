import React from "react";
// import { useHistory, useLocation } from "react-router-dom";

const About = () => {
  // let history = useHistory();

  function handleClick() {
    // console.log(location);
    // history.push("/home");
  }

  return (
    <div>
      <h2>About</h2>
      <button type="button" onClick={handleClick}>
        Go home
      </button>
    </div>
  );
};

export default About;
