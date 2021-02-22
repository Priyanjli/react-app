import React from "react";

const Student = (props) => {
  return (
    <div className="studentInfoCls">
      <p>Your Name is: {props.name}</p>
      <p>Your RollNo is: {props.rollno}</p>
    </div>
  );
};

export default Student;
