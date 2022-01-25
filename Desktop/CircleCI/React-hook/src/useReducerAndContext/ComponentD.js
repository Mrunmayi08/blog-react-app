import React, { useContext } from "react";
import { userContext } from "../App";
const ComponentD = () => {
  const userContextvalue = useContext(userContext);
  return (
    <div>
      <button onClick={() => userContextvalue.countdispatch("inc")}>
        Increment
      </button>
      <button onClick={() => userContextvalue.countdispatch("dec")}>
        Decrement
      </button>
      <button onClick={() => userContextvalue.countdispatch("reset")}>
        Reset
      </button>
    </div>
  );
};

export default ComponentD;
