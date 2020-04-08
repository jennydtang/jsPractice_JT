var guess = prompt("See if you can guess my number right. Enter your guess: ");
var givenNum = 13;
if(Number(guess) === givenNum){
    alert("You got it!");
} else if (Number(guess) > givenNum){
    alert("That's too high!");    
} else if (Number(guess) < givenNum){
    alert("That's too low.");
};
