var userInfo = [
  { Name: "rohan", address: "kanpur", contectNo: 65427123, id: 123 },
  { Name: "ramesh", address: "lucknow", contectNo: 54678902, id: 124 },
  { Name: "roshni", address: "shahajahanpur", contectNo: 98764567, id: 123 },
  { Name: "kritika", address: "rampur", contectNo: 89765435, id: 345 },
  { Name: "riya", address: "aagra", contectNo: 98765678, id: 127 },
  { Name: "anmol", address: "hisar", contectNo: 98754367, id: 345 },
  { Name: "agastya", address: "kuruchetra", contectNo: 82134567, id: 567 },
  { Name: "rahul", address: "puna", contectNo: 98768754, id: 321 },
];

var len = userInfo.length;
for (index = 0; index < len; index++) {
  document.write(
    userInfo[index].name +
      "  " +
      userInfo[index].address +
      "  " +
      userInfo[index].contectNo +
      userInfo[index].id +
      "<br>"
  );
}
export default userInfo;
