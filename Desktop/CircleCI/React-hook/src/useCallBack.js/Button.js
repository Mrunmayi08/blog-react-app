import React from "react";

const Button = ({ onclick, text }) => {
  console.log("Button rendered");
  return (
    <div className="title">
      <button onClick={onclick}>{text}</button>
    </div>
  );
};

export default React.memo(Button);
