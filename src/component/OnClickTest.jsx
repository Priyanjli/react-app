import React, { useState } from "react";

const OnClickTest = () => {
  const [count, SetCount] = useState(0);

  const InCrNum = () => {
    SetCount(count + 1);
  };
  return (
    <>
      <h3>{count}</h3>
      <button onClick={InCrNum}>clickme</button>
    </>
  );
};
export default OnClickTest;
