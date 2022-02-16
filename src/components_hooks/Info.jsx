import React, { useEffect } from "react";

const Info = () => {
  useEffect(() => {
    console.log("useEffect Info");

    return () => {
      console.log("same as componentWillUnmount");
    };
  }, []);

  return (
    <div>
      <h3>Congrats</h3>
    </div>
  );
};

export default Info;
