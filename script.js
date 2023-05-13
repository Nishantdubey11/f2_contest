/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
  let studentsWithMarksOver50 = arr.filter(student => student.marks > 50);
  let studentNames = studentsWithMarksOver50.map(student => student.name);
  console.log(studentNames);
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  arr.forEach(student => {
    if (student.marks > 50)
    {
      console.log(student);
    }
  });
}

function addData() {
  //Write your code here, just console.log
  let newStudent = { id: 4, name: "susan", age: "20", marks: 45 };
  arr.push(newStudent);
  console.log(newStudent);
}

function removeFailedStudent() {
  //Write your code here, just console.log
  console.log(arr.filter(student => student.marks >= 50));
}

function concatenateArray() {
  //Write your code here, just console.log
  let newArray =
  [
    { id: 5, name: "alex", age: "21", marks: 90 },
    { id: 6, name: "emma", age: "19", marks: 65 },
    { id: 7, name: "ryan", age: "20", marks: 75 }
  ];

  let concatenatedArray = arr.concat(newArray);
  console.log(concatenatedArray);
}
