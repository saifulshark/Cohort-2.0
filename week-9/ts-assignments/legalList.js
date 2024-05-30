"use strict";
let userData = [
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
];
userData.map((data) => {
    if (data.age > 18) {
        console.log(data);
    }
});
