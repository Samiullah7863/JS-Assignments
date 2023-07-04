


// Create a function which accepts the list of company's employees data (i.e. name, gender, age, designation, etc) as first argument and employee name as second argument. 
// that function would return the data of the employee which name matches the name from the argument.


function myFunc(employeesData, employeeName) {
  for (let employeeData of employeesData) {
    if (employeeData.name === employeeName) {
      return employeeData;
    }
  }

  return "No user found with name: " + employeeName;
}

let dataArr = [
  {
    name: "Samiullah",
    gender: "Male",
    age: 22,
    designation: "SQA Engineer",
  },
  {
    name: "John",
    gender: "Male",
    age: 32,
    designation: "Software Engineer",
  },
  {
    name: "Maryam",
    gender: "Female",
    age: 25,
    designation: "Sr. SQA Engineer",
  },
  {
    name: "Ali",
    gender: "Male",
    age: 17,
    designation: "Intern",
  },
];

console.log(myFunc(dataArr, "Samiullah"));
