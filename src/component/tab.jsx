import React from "react";
const Tab = ({ tabs, onClickHandler }) => {
  const tabEle = (
    <div className="tabContainer">
      <span
        className="tabcls"
        onClick={() => {
          onClickHandler("Homecomp");
        }}
      >
        Home
      </span>
      <span
        className="tabcls"
        onClick={() => {
          onClickHandler("RegisterComp");
        }}
      >
        Register
      </span>
      <span
        className="tabcls"
        onClick={() => {
          onClickHandler("Table");
        }}
      >
        Table
      </span>
      <span
        className="tabcls"
        onClick={() => {
          onClickHandler("StudentComp");
        }}
      >
        Student
      </span>
      <span
        className="tabcls"
        onClick={() => {
          onClickHandler("inputComp");
        }}
      >
        Input
      </span>
      <span
        className="tabcls"
        onClick={() => {
          onClickHandler("OnClickTest");
        }}
      >
        OnClickTest
      </span>
      <span
        className="tabcls"
        onClick={() => {
          onClickHandler("Arrow_and_map");
        }}
      >
        {"Arrow & Map"}
      </span>
    </div>
  );

  return tabEle;
};

export default Tab;
