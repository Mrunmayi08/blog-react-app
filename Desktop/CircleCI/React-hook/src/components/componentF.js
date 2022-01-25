import React from "react";
import { userContext } from "../App";
import { userHometownContext } from "../App";
function ComponentF() {
  return (
    <div>
      <userContext.Consumer>
        {(user) => {
          <userHometownContext.Consumer>
            {(homeTown) => {
              return (
                <div>
                  user {user} from {homeTown}
                </div>
              );
            }}
          </userHometownContext.Consumer>;
        }}
      </userContext.Consumer>
    </div>
  );
}

export default ComponentF;
