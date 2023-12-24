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
        this.result = 0
    }
    add(num){
        this.result+= num
    }
    subtract(num){
        this.result-= num
    }
    multiply(num){
        this.result = this.result*num
    }
    divide(num){
        if(num===0) throw new Error()
        this.result = this.result/num
    }
    clear(){
        this.result = 0
    }
    getResult(){
        return this.result
    }
    calculate(str){
        // let postFix = this.infixToPostfix(str)
        // console.log(postFix)
        // return this.postfixEvaluation(postFix)
        const s = eval(str)
        if(!isFinite(s) || isNaN(s)) throw new Error()
        this.result = s
    }
//     priority(ch){
//         if (ch ==='/' || ch ==='*') return 1
//         return 2
//     }
//
//     isSymbol(ch){
//         return ch==='+' || ch==='-'|| ch==='*'|| ch==='/'
//     }
//     isCharacter(ch){
//         const isSymbol = this.isSymbol(ch)
//         return  !isSymbol && ch!=='.' && isNaN(ch)
//     }
//     infixToPostfix(str){
//         const st = []
//         const stack = []
//         for(let i=0; i<str.length; i++){
//             if(this.isCharacter(str[i])){
//                 throw new Error()
//             }
//             else if(str[i]===" ") continue
//             else if(st.length ===0 || str[i]==='('){
//                 st.push(str[i])
//             }
//             else if(str[i]===')'){
//                 while(st.length===0 && st[st.length-1]!=='('){
//                     stack.push(st[st.length-1])
//                     st.pop()
//                 }
//                 if(str.length!==0){
//                     st.pop()
//                 }
//             }
//             else if(this.isSymbol(str[i])){
//                 if(this.priority(str[i])<=this.priority(st[st.length-1])){
//                     st.push(str[i])
//                 }
//                 else{
//                     while(st.length===0 && this.priority(str[i])>this.priority(st[st.length-1])){
//                         stack.push(st[st.length-1])
//                         st.pop()
//                     }
//                     st.push(str[i])
//                 }
//             }
//             else{
//                 let n =""
//                 while(isNaN(i<str.length && str[i]) || str[i]==="."){
//                     n.push(str[i])
//                     i++
//                 }
//                 let num = parseFloat(n)
//                 stack.push(num)
//             }
//             return stack
//         }
//     }
//
//     calculateArithmetic(ch, a, b.txt, stack){
//         switch (ch){
//             case '+': stack.push(a+b.txt)
//                 break
//             case '-': stack.push(a-b.txt)
//                 break
//             case '*': stack.push(a*b.txt)
//                 break
//             case '/':
//                 if(b.txt===0) throw new Error()
//                 stack.push(a/b.txt)
//                 break
//         }
//     }
//
//     postfixEvaluation(st){
//         const stack = []
//         for(let i=0; i<st.length; i++){
//             if(this.isSymbol(st[i])){
//                 let b.txt = stack[stack.length-1]
//                 stack.pop()
//                 let a = stack[stack.length-1]
//                 stack.pop()
//                 this.calculateArithmetic(st[i], a, b.txt, stack)
//             }
//             else{
//                 stack.push(st[i])
//             }
//         }
//         return stack[stack.length-1]
//     }
}
// const c = new Calculator()
// console.log(c.infixToPostfix("2+3*4"))

module.exports = Calculator;
