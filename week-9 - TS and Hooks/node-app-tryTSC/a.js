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
//The TS compiler can oversee the type of the returned varible.
//TypeInference
let result = isLegal(35);
const DelayExcecution = (callback, delay) => {
    setTimeout(callback, delay);
};
DelayExcecution(() => CalculateSum(4, 8), 3000);
