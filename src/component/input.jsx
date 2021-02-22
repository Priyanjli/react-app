import React, { useState } from "react";

const Input = () => {
  const [userName, setUserName] = useState("Rahul Saxena");
  const OnKeyDown = (e) => {
    const name = e.target.value;
    setUserName(name);
  };

  return (
    <>
      <label>Please enter your name : </label>
      <input value={userName} onChange={userName}></input>
      {"   "} : {"  "}
      <label>{userName}</label>
    </>
  );
};
export default Input;
