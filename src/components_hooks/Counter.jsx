import React, { useEffect, useLayoutEffect, useState } from "react";
import Info from "./Info";

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    alert("aleko");
  }, []);

//   useLayoutEffect(() => {
//     alert("aleko");
//   }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>

      {count === 10 && <Info />}
    </div>
  );
};

export default Counter;
