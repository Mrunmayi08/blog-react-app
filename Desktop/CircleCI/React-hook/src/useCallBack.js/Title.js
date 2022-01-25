import React, { useMemo } from "react";

const Title = () => {
  console.log("title rendered");
  return <div className="title">useCallback Implementation</div>;
};

export default React.memo(Title);
