var firstName = "Myles";
var lastName = "Smith";
var greet = function (first, last) {
    return "Hello ".concat(first, " ").concat(last);
};
console.log(greet(firstName, lastName));
