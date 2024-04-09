/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
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
  add(number) {
    this.result += number;
  }
  subtract(number) {
    this.result -= number;
  }
  multiply(number) {
    this.result *= number;
  }
  divide(number) {
    if ( number == 0) {
      throw new Error("Division by zero not possible")
    }
    this.result /= number;
  }
  clear () {
    this.result = 0;
  }
  getResult() {
    return this.result;
  }
  apply_operation(operation, num1, num2) {
    if (operation == '+') {
      /* console.log(`Adding ${num1} ${num2}`); */
      return num1+num2;
    }
    else if (operation == '-') {
      /* console.log(`Subtracting ${num2} ${num1}`); */
      return num2-num1;
    }
    else if (operation == '*') {
      /* console.log(`Mutliplying ${num1} ${num2}`); */
      return num1*num2;
    }
    else if (operation == '/') {
      /* console.log(`Dividing ${num2} ${num1}`); */
      if (num1 == 0) {
        throw new Error("Division by zero by not possible");
      }
      return num2/num1;
    }
    else {
      throw new Error("Invalid arithmetic string");
    }
  }



  calculate(str) {
    str = str.replace(/\s/g, '');
    /* console.log(str); */
    const invalidCharRegex = /[^0-9\+\-\*\/()\.]+/;
    if ( invalidCharRegex.test(str) ) {
      throw new Error("Invalid arithmetic string");
    }
    /* this.result = eval(str);
    if (this.getResult() === Infinity) {
      throw new Error("Division by zero error");
    } */
    let operator_stack = [];
    let value_stack = [];
    const expr_len = str.length;
    const priority_map = new Map();
    priority_map.set('(', 5);
    priority_map.set('/', 4);
    priority_map.set('*', 3);
    priority_map.set('+', 2);
    priority_map.set('-', 1);
    priority_map.set(undefined, 0);
    let num = '';
    let operation = '';
    for(let i = 0; i < expr_len; i++) {
      if((parseInt(str[i]) >= 0 && parseInt(str[i])<= 9) || (str[i] == '.')) {
        while(i < expr_len && ((parseInt(str[i]) >= 0 && parseInt(str[i])<= 9) || (str[i] == '.'))) {
            num += str[i];
            i++;
        }
        value_stack.push(Number(num));
        /* console.log(`Value stack: ${value_stack}`); */
        i--;
        num = '';
      }
      else {
        if (str[i] == '(') {
          operator_stack.push(str[i]);
        }
        else if (str[i] == ')') {
          // Pop and calculate until first '(' found 
           while (operator_stack[operator_stack.length-1] != '(') {
              operation = operator_stack.pop();
              value_stack.push(this.apply_operation(operation, value_stack.pop(), value_stack.pop()));
           }
           operator_stack.pop();
        }
        else if(operator_stack[operator_stack.length-1] != '(' && priority_map.get(operator_stack[operator_stack.length-1]) >= priority_map.get(str[i]) ) {
          // if top of stack operator has higher precedence than current token then pop the operator from the stack and calculate and then push the current cperator
          operation = operator_stack.pop();
          value_stack.push(this.apply_operation(operation, value_stack.pop(), value_stack.pop()));
          operator_stack.push(str[i]);
        }
        else {
          operator_stack.push(str[i]);
        }
        
      }
      /* console.log(`Operator stack: ${operator_stack}`); */
      }
      // After the string is parsed and stacks are built, we evaluate
      while(operator_stack.length != 0) {
        operation = operator_stack.pop();
        value_stack.push(this.apply_operation(operation, value_stack.pop(), value_stack.pop()));
      }
      this.result = value_stack.pop();
    }
    
  
  }




module.exports = Calculator;
