interface User {
	name: string;
	age: number;
    email: string,
}



type modifyParams = Pick<User, 'name' | 'email' | 'age'>;
type modifyAgeOrName = Partial<modifyParams>

const myProfile: Readonly<modifyAgeOrName> = {
    name:"Hashir Ahmed K B",
    age:24,
    email:"ahmedhashir96@gmail.com"
}
// myProfile.age = 35; Cannot assign to 'age' because it is a read-only property.ts(2540)

const updateProfile = (input: modifyAgeOrName, profileinput: modifyAgeOrName) => {
    const profile = profileinput;
    console.log("Recieved Profile:", profile);
    input.name ? profile.name = input.name : input.name;
    input.age ? profile.age = input.age : input.age;
    input.email ? profile.email = input.email : input.email;
    console.log("Upd1ted Profile: ", profile);
}
updateProfile({age:26}, myProfile);
updateProfile({name:"HashirAKB"}, myProfile);

type userProfile = Pick<User, 'name'| 'email'>;

function sumOfAge(user1: User, user2: User) {
  return user1.age + user2.age;
};

const printUserProfile = (user: userProfile) => {
    console.log("The name is:", user.name ,"and email is:", user.email);
}

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

printUserProfile({name: "Hashir", email:"hashir@email.com"});
console.log(result); // Output: 4