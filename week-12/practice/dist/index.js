"use strict";
const users = {
    'abc123': { name: 'John Doe', age: 30, email: 'johndoe@example.com' },
    'xyz789': { name: 'Jane Doe', age: 25, email: 'janedoe@example.com' },
    'def456': { name: 'Alice Smith', age: 28, email: 'alicesmith@example.com' },
    'ghi012': { name: 'Bob Johnson', age: 35, email: 'bobjohnson@example.com' },
    'jkl345': { name: 'Carol White', age: 32, email: 'carolwhite@example.com' },
    'mno678': { name: 'David Brown', age: 40, email: 'davidbrown@example.com' },
    'pqr901': { name: 'Eva Green', age: 22, email: 'evagreen@example.com' },
    'stu234': { name: 'Frank Black', age: 45, email: 'frankblack@example.com' },
    'vwx567': { name: 'Grace Blue', age: 29, email: 'graceblue@example.com' },
    'yza890': { name: 'Henry Gold', age: 33, email: 'henrygold@example.com' }
};
console.log(users);
console.log(users['yza890']);
console.log(users['yza890'].name);
console.log(users['yza890'].age);
console.log(users['yza890'].email);
const usersMap = new Map();
usersMap.set('xyz789', { name: 'Jane Doe', age: 25, email: 'janedoe@example.com' });
usersMap.set('def456', { name: 'Alice Smith', age: 28, email: 'alicesmith@example.com' });
usersMap.set('ghi012', { name: 'Bob Johnson', age: 35, email: 'bobjohnson@example.com' });
usersMap.set('jkl345', { name: 'Carol White', age: 32, email: 'carolwhite@example.com' });
usersMap.set('mno678', { name: 'David Brown', age: 40, email: 'davidbrown@example.com' });
usersMap.set('pqr901', { name: 'Eva Green', age: 22, email: 'evagreen@example.com' });
usersMap.set('stu234', { name: 'Frank Black', age: 45, email: 'frankblack@example.com' });
usersMap.set('vwx567', { name: 'Grace Blue', age: 29, email: 'graceblue@example.com' });
usersMap.set('yza890', { name: 'Henry Gold', age: 33, email: 'henrygold@example.com' });
console.log(usersMap.get('mno678'));
const myProfile = {
    name: "Hashir Ahmed K B",
    age: 24,
    email: "ahmedhashir96@gmail.com"
};
// myProfile.age = 35; Cannot assign to 'age' because it is a read-only property.ts(2540)
const updateProfile = (input, profileinput) => {
    const profile = profileinput;
    console.log("Recieved Profile:", profile);
    input.name ? profile.name = input.name : input.name;
    input.age ? profile.age = input.age : input.age;
    input.email ? profile.email = input.email : input.email;
    console.log("Upd1ted Profile: ", profile);
};
updateProfile({ age: 26 }, myProfile);
updateProfile({ name: "HashirAKB" }, myProfile);
function sumOfAge(user1, user2) {
    return user1.age + user2.age;
}
;
const printUserProfile = (user) => {
    console.log("The name is:", user.name, "and email is:", user.email);
};
// Example usage
const result = sumOfAge({
    name: "harkirat",
    age: 20,
    email: "email.example.com"
}, {
    name: "raman",
    age: 21,
    email: "email.example2.com"
});
printUserProfile({ name: "Hashir", email: "hashir@email.com" });
console.log(result); // Output: 4
