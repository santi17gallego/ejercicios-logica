// Create an Object
const person = {
    name: "John",
    age: 30,
    city: "New York"
  };
  
  // Create an Array
const myArray = Object.values(person);

console.log(myArray)


function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
    this.fullName = function() {
      return this.firstName + " " + this.lastName;
    };
}


const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");
const mySister = new Person("Anna", "Rally", 18, "green");

const mySelf = new Person("Johnny", "Rally", 22, "green");

console.log(myFather.fullName())