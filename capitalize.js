// Exercise - Capitalise every element
// 1. Write a short function to capitalise every element of the array.
// 2. You must use the Array#map function and the String#uppercase function.

var littleLetters = ["need", "to", "capitalize", "this"];
var bigLetters = littleLetters.map(function(bigger){
    return bigger.toUpperCase();
});
console.log(bigLetters);