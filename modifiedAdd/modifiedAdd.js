// Modify the previous program such that only multiples of three or five are
var newNumber = prompt("Give me a number!");
if((newNumber%3===0) || (newNumber % 5 ===0)){
    var sum = Number(newNumber) + Number(1);
    console.log(sum);
} else {
    console.log("Sorry, I only add numbers divisible by 3 and 5.");
};

