//Write a function that returns the largest element in a list.
var numbers = [120, 145, 121, 204];

function bigNumber(numbers){
    return Math.max.apply(null, numbers); //need 2 args or it will return Infinity if arg isn't given, meaning any number is greater than what you already have.
    //math.max()finds the largest number. You can use Math.max(5, 10)
}
console.log(bigNumber(numbers));