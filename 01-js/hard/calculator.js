/*
  Implement a class `Calculator` having below methods
    - initialise a this.result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note:
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor() {
    this.result = 0;
  }

  add(a) {
    this.result += a;
  }

  subtract(a) {
    this.result -= a;
  }

  multiply(a) {
    this.result *= a;
  }

  divide(a) {
    if (a !== 0) {
      this.result /= a;
    } else {
      throw new Error("Division by zero");
    }
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }

  calculate(str) {
    const expression = str.replace(/\s/g, "");
    if (!/^[\d.\-+*/()]+$/.test(expression)) {
      throw new Error("Invalid String Expression");
    }

    let numbers = [];
    let operators = [];
    let openBrackets = 0;
    let i = 0;

    while (i < expression.length) {
      if (/\d/.test(expression[i])) {
        let val = "";
        while (i < expression.length && (/\d/.test(expression[i]) || expression[i] === '.')) {
          val += expression[i];
          i++;
        }
        numbers.push(parseFloat(val));
        i--;
      } else if (expression[i] === "(") {
        operators.push(expression[i]);
        openBrackets++;
      } else if (expression[i] === ")") {
        openBrackets--;
        if (openBrackets < 0) throw new Error("Unbalanced parentheses in expression");
        while (operators.length > 0 && operators[operators.length - 1] !== "(") {
          let val2 = numbers.pop();
          let val1 = numbers.pop();
          let op = operators.pop();
          numbers.push(this.applyOp(val1, val2, op));
        }
        operators.pop(); // Remove the '(' from stack
      } else if (["+","-","*","/"].includes(expression[i])) {
        while (operators.length > 0 && this.precedence(operators[operators.length - 1]) >= this.precedence(expression[i])) {
          let val2 = numbers.pop();
          let val1 = numbers.pop();
          let op = operators.pop();
          if (val2 === 0 && op === "/") {
            throw new Error("Division by zero");
          }
          numbers.push(this.applyOp(val1, val2, op));
        }
        operators.push(expression[i]);
      }
      i++;
    }

    // Check if the parentheses are balanced
    if (openBrackets !== 0) {
      throw new Error("Unbalanced parentheses in expression");
    }

    while (operators.length > 0) {
      let val2 = numbers.pop();
      let val1 = numbers.pop();
      let op = operators.pop();
      if (val2 === 0 && op === "/") {
        throw new Error("Division by zero");
      }
      numbers.push(this.applyOp(val1, val2, op));
    }

    this.result = numbers.pop();
    return this.result;
  }

  precedence(op) {
    if (op === "+" || op === "-") return 1;
    if (op === "*" || op === "/") return 2;
    return 0;
  }

  applyOp(a, b, op) {
    switch (op) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "*":
        return a * b;
      case "/":
        return a / b;
    }
    return 0;
  }
}

module.exports = Calculator;
