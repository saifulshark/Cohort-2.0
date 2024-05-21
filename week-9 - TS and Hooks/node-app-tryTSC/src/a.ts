const GreetMe = (input: string) => {
    const name: string = input;
    console.log("Hai "+ name);
}

const user = "Hashir";
GreetMe(user);

const CalculateSum = (inputOne: number, inputTwo: number) => {
    const sum: number = inputOne + inputTwo;
    console.log("The sume is "+sum);
    return sum;
}

CalculateSum(2,8);

const isLegal = ( age: number) => {
    if( age > 18 ){
        return true;
    }
    else{
        return false;
    }
}

console.log(isLegal(20));
console.log(isLegal(8));
//The TS compiler can oversee the type of the returned varible.
//TypeInference
let result = isLegal(35);

const DelayExcecution = (callback: () => {}, delay: number) => {
    setTimeout(callback,delay);
}

DelayExcecution(() => CalculateSum(4,8), 3000);

interface Person{
    name: string,
    age: number,
    greet(phrase: string): void
}

class Employee implements Person {
    name: string;
    age: number;

    constructor(inputOne: string, inputTwo:number){
        this.name = inputOne;
        this.age = inputTwo;
    }

    greet(phrase: string): void {
        console.log("hello "+phrase+" "+ this.name);
    }
}

const emp1 = new Employee("Hashir",20);
emp1.greet("Employeee");

type User = {
    name: string,
    age: number,
    id: number | string
}

function printUser(input: User){
    console.log(input)
}

const personOne  = {
    name: "Hashir",
    age: 28,
    id: "2342ewdf"
};

printUser(personOne);

type memberInfo = {
    name: string,
    age: number,
    id: string
};

interface proMemberInfo{
    name: string;
    age: number;
    id: string,
    purchasedCourse: string;
    purchasedDate: Date;
};

type proMemberOne = memberInfo & proMemberInfo;
type potentialMember = memberInfo | proMemberInfo;

const userXO: proMemberOne = {
    name:"Hashir",
    age:23,
    id:"0x432",
    purchasedCourse:"Web 3 Bootcamp",
    purchasedDate: new Date()
}

//how I fixed the faulty method.
const userXO2: potentialMember = {
    name:"AKB",
    age:38,
    id:"0xehfb443",
}

console.log(userXO);
console.log(userXO2);

type Directions = "up"| "down" | "left" | "right";

function doSomething(direction: Directions) {
    console.log("Went "+direction);
}

doSomething("up");
doSomething("down");
doSomething("left");
doSomething("right");
doSomething("round"); //'round' won't work because we're using enum here using TS type.