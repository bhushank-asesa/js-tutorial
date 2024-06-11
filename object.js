const person = {
  ageInYears: 15,
  get age() {
    return this.ageInYears;
  },
  set addAge(age) {
    this.ageInYears = age;
  },
};
const employee = new Object();

person.name = "Bhushan";
employee.post = "React Developer";
person.addAge = 20;
// console.log(person, employee, person.age);

function NewPerson(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

NewPerson.prototype.nationality = "India"; // assign default value and can access via object.key
const child = new NewPerson("first", "last", 15, "blue");
// console.log(child, child.firstName, child.nationality);

for (let key in child) {
  console.log(key, child[key]);
}
