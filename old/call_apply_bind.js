let student_a = {
  name: "Bhushan",
  printName: function () {
    console.log(this.name);
  },
};
student_a.printName();
let student_b = {
  name: "Sourabh",
};
student_a.printName.call(student_b);

let emp_a = { fnm: "Bhushan", lnm: "Kumbhar" };
let emp_b = { fnm: "Sourabh", lnm: "Patil" };
let emp_c = { fnm: "Abhishek", lnm: "Biranje" };
function printEmp() {
  console.log(this.fnm + " " + this.lnm);
}
printEmp.call(emp_a);
printEmp.call(emp_b);
printEmp.apply(emp_c);

function printEmployeeDetails(designation, salary = 10000) {
  console.log(this.fnm + " " + this.lnm + " " + designation + " " + salary);
}
printEmployeeDetails.call(emp_a, "Backend Developer", 25000); // first will this value and from second it will be argument to that function may be n
printEmployeeDetails.apply(emp_b, ["UI Developer", 15000]); // first will this value and from second it will be argument to that function may be n
// bind takes array as argument for function
let empDetails = printEmployeeDetails.bind(emp_c, "Full stack developer"); // bind will create copy of function to invoke later, it is not invoked by this line
console.log(empDetails);
empDetails();
