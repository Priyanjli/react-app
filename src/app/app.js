import React, { useState } from "react";
import Footer from "../component/footer";
import Input from "../component/input";
import TableComponent from "../component/TableWithStaticData";
import Table from "../component/Table";
import Student from "../component/Student";
import SingUp from "../component/singup";
import Header from "../component/Header";
import Tab from "../component/tab";
import Home from "../component/Home";
import OnClickTest from "../component/OnClickTest";
import ArrowAndMap from "../component/ArrowAndMap";

const App = () => {
  const [component, setComponent] = useState("Arrow_and_map");
  // var userInfo = [
  //   { Name: "rohan", address: "kanpur", contectNo: 65427123, id: 123 },
  //   { Name: "ramesh", address: "lucknow", contectNo: 54678902, id: 124 },
  //   { Name: "roshni", address: "shahajahanpur", contectNo: 98764567, id: 123 },
  //   { Name: "kritika", address: "rampur", contectNo: 89765435, id: 345 },
  //   { Name: "riya", address: "aagra", contectNo: 98765678, id: 127 },
  //   { Name: "anmol", address: "hisar", contectNo: 98754367, id: 345 },
  //   { Name: "agastya", address: "kuruchetra", contectNo: 82134567, id: 567 },
  //   { Name: "rahul", address: "puna", contectNo: 98768754, id: 321 },
  // ];
  let renderComponets = null;
  switch (component) {
    case "Homecomp":
      renderComponets = <Home></Home>;
      break;
    case "RegisterComp":
      renderComponets = <SingUp></SingUp>;
      break;
    case "StudentComp":
      renderComponets = <Student></Student>;
      break;
    case "inputComp":
      renderComponets = <Input></Input>;
      break;
    case "OnClickTest":
      renderComponets = <OnClickTest />;
      break;
    case "Arrow_and_map":
      renderComponets = <ArrowAndMap />;
      break;

    //   renderComponets = <OnClickTest />;

    // case "Home":
    //   renderComponets = <Home />;
    //   break;
  }

  return (
    <>
      <Header></Header>
      <Tab onClickHandler={setComponent}></Tab>
      {renderComponets}
      {/* <TableComponent />
      <Table data={userInfo}></Table>
      <Student name="rahul" rollno="123" />
      <SingUp /> */}
      <Footer />
    </>
  );
};
export default App;
