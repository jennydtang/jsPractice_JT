// Exercise - Pizza
// 1. Create an array of pizza toppings
// 2. Write a function that we can call
// 3. Function should return a string that describes the pizza, example “A delicious
// pizza with Cheese and Pepperoni and Garlic and Peppers.”
var pizzaToppings = ["pepperoni", "pineapple", "jalapenos"];
function pizza(){
    var description = pizzaToppings.join(" and ");
    return description;
}

console.log("You have a pizza with " + pizza() + ".")