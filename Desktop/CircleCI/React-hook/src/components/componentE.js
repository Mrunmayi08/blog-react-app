import React, { useContext } from "react";
import ComponentF from "./componentF";
import { userContext, userHometownContext } from "../App";

function ComponentE() {
  const user = useContext(userContext);
  const homeTown = useContext(userHometownContext);
  return (
    <div>
      {user}-{homeTown}
    </div>
  );
}

export default ComponentE;
