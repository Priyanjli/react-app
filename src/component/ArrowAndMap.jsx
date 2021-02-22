import React from "react";

const ArrowAndMap = () => {
  //-------------------------------------------
  const myInfo = ["My Name is: rahul", "my id is: 123"];
  const myNewinfo = (x, i) => {
    if (i == 0) {
      return x + "Saxena";
    } else {
      return x + "new Id";
    }
  };
  const NewMyInfo = myInfo.map(myNewinfo);

  //-------------------------------------------

  //  -------------Example 1  Start---------------
  const NameList = [
    { firstName: "Anmol", lastName: "verma" },
    { firstName: "Rasmi", lastName: "Rastogi" },
    { firstName: "Alka", lastName: "Singh" },
    { firstName: "Mohit", lastName: "Misra" },
    { firstName: "Shikha", lastName: "Pandy" },
    { firstName: "Priyanka", lastName: "Gupta" },
  ];

  const GetFullNameAll1 = (item) => {
    return item.firstName + "  " + item.lastName;
  };
  const newNameList = NameList.map(GetFullNameAll1);
  //  -------------Example 1  End---------------

  //  -------------Example 2  Start-------retrun only values--------
  const Names = [
    "Anmol",
    "Rasmi",
    "Himanshu",
    "Anubha",
    "Rubi",
    "shudhanshu",
    "Priyanka",
    "alka",
    "Mohit",
  ];
  const getFullName = (x) => {
    return x + " " + "Saxena";
  };
  const fullNames = Names.map(getFullName);

  //  -------------Example 2  End---------------

  //  -------------Example 3  Start-----With element return ----------
  const NameList3 = [
    { firstName: "Anmol", lastName: "verma" },
    { firstName: "Rasmi", lastName: "Rastogi" },
    { firstName: "Alka", lastName: "Singh" },
    { firstName: "Mohit", lastName: "Misra" },
    { firstName: "Shikha", lastName: "Pandy" },
    { firstName: "Priyanka", lastName: "Gupta" },
  ];

  const GetFullNameAll = (item) => {
    const fullN = item.firstName + "  " + item.lastName;
    return <p>{item.firstName + "  " + item.lastName}</p>;
  };
  const newNameListElements = NameList3.map(GetFullNameAll);

  //  -------------Example 3  End---------------
  debugger;
  return (
    <>
      <h1>{JSON.stringify(NewMyInfo)}</h1>
      <p>{NewMyInfo + <br />}</p>
      <p>{fullNames}</p>
      <p>{newNameList.join(" , ")}</p>
      <h3>My name list elements</h3>
      <p>{newNameListElements}</p>
    </>
  );
};

export default ArrowAndMap;
