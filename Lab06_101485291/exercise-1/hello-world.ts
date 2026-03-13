let firstName: string = "Myles";
let lastName: string = "Smith";

let greet = (first: string, last: string): string => {
    return `Hello ${first} ${last}`;
};

console.log(greet(firstName, lastName));