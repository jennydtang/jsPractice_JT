// Write a program that asks the user for a number n and prints the sum of the
// numbers 1 to n
var newNumber = prompt("Give me a number!");
//var sum = Number(newNumber) + Number(1);
var sum = Number(newNumber) *  (Number(newNumber) + Number(1))/2; //this formula adds the numbers before it up to the current number
//for(var i = 0; i <=n; i++){  //do the same using a for Loop
//     total +=i
// }
console.log(sum);
