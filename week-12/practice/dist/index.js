"use strict";
const myProfile = {
    name: "Hashir Ahmed K B",
    age: 24,
    email: "ahmedhashir96@gmail.com"
};
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
