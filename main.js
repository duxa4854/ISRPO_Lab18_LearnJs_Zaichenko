let age = 20;
let name = "Andrei";
let isStudent = true;

console.log("Name: ", name);
console.log("Age: ", age);
console.log("Is students: ", isStudent);

let value = 10;
console.log(value);
value = "Теперь это строка";
console.log(value);
value = true;
console.log(value);

let userName = "Андрей";

console.log(`Привет, ${userName}!`);

let price = 99.99;

let temper = -15;

let infinity = 1 / 0;

let notANumber = 0 / 0;

console.log(0.1 + 0.2);

let bigNumber = 9007199254740991n;
let huge = BigInt("12346554788900");

let isAlive = true;
let isWork = true;
let isAdult = age > 18;

let x;
let y = undefined;

let userDate = null;

let id = Symbol("id");

let person = {
  name: "Andrei",
  age: 18,
  isStudent: false,
  sayHello: function () {
    console.log("Привет!");
  },
};

console.log(person.name);

let fruits = ["яблоко", "апельсин", "банан"];
let number = [1, 2, 3, 4, 5];
let mixed = ["тексе", 42, true, null];

function sum(a, b) {
  return a + b;
}

let multiply = function (x, y) {
  return x * y;
};

console.log(sum(5, 3));

let now = new Date();
let birthday = new Date("1995-12-17");

let a = 10;
let b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

console.log(10 + "5");
console.log("10" - 5);

const numbersArray = [1, 2, 3];

numbersArray[0] = 10;
console.log(numbersArray);

//numbersArray =[5,6,7];

const persons = {
  name: "Andrei",
  age: 18,
};
person.age = 50;
person.city = "Volgograd";
console.log(persons);
person = {
  name: "Stas",
};
