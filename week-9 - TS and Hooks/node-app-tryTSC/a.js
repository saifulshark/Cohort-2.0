"use strict";
const GreetMe = ({ input }) => {
    const name = input;
    console.log("Hai " + name);
};
const user = { input: "Hashir" };
GreetMe(user);
