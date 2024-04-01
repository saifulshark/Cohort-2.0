interface User {
	firstName: string;
	lastName: string;
	age: number;
}

let userData: User[] = [
    {
        firstName: 'Vishnu',
        lastName: 'B V',
        age: 15
    },
    {
        firstName: 'Vishhh',
        lastName: 'dd0',
        age: 22
    }
]

userData.map((data) => {
    if(data.age > 18){
        console.log(data)
    }
})