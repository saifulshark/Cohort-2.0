// interface User {
//     name: string,
//     age: number
// }


// function helloWorld(name: String){
//     console.log(`Hello ${name}`)
// }


// function functionCaller(callingFunction: Function){
//     callingFunction('Vishnu')
// }

// function isLegal(user: User){
//     if(user.age >= 18){
//         return true
//     }
//     return false
// }


function arraySum(arr: number[]): number{
    let sum: number = 0
    for(let i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    return sum
}


console.log(arraySum([1, 5, 2, 8]))