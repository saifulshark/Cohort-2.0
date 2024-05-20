"use strict";
const GreetMe = (input) => {
    const name = input;
    console.log("Hai " + name);
};
const user = "Hashir";
GreetMe(user);
const CalculateSum = (inputOne, inputTwo) => {
    const sum = inputOne + inputTwo;
    console.log("The sume is " + sum);
    return sum;
};
CalculateSum(2, 8);
const isLegal = (age) => {
    if (age > 18) {
        return true;
    }
    else {
        return false;
    }
};
console.log(isLegal(20));
console.log(isLegal(8));
let result = isLegal(35);
const DelayExcecution = (callback, delay) => {
    setTimeout(callback, delay);
};
DelayExcecution(() => CalculateSum(4, 8), 3000);
class Employee {
    constructor(inputOne, inputTwo) {
        this.name = inputOne;
        this.age = inputTwo;
    }
    greet(phrase) {
        console.log("hello " + phrase + " " + this.name);
    }
}
const emp1 = new Employee("Hashir", 20);
emp1.greet("Employeee");
function printUser(input) {
    console.log(input);
}
const personOne = {
    name: "Hashir",
    age: 28,
    id: "2342ewdf"
};
printUser(personOne);
