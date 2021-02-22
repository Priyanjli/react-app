import React from "react";
const Table = (props) => {
  const { data } = props; // object disstructring
  const TR = data.map((item, index) => {
    const { Name, address, contectNo } = item;
    return (
      <tr key={index}>
        <td>{Name}</td>
        <td>{address}</td>
        <td>{contectNo}</td>
      </tr>
    );
  });
  return (
    <>
      <table className="table">
        <tr className="tr">
          <th>Company</th>
          <th>Contact</th>
          <th>Country</th>
        </tr>
        {TR}
      </table>

      <h1>"my Table Component"</h1>
    </>
  );
};
export default Table;
