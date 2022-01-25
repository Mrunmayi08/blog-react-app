import React, { memo, useMemo } from "react";

const Count = ({ text, count }) => {
  console.log("count rendered", count);
  return (
    <div>
      {text}-{count}
    </div>
  );
};

export default React.memo(Count);
