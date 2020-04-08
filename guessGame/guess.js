var guess = prompt("See if you can guess my number right. Enter your guess: ");
var givenNum = 13;
if(guess = givenNum){
    console.log("You got it!");
} else if (guess > givenNum){
    console.log("That's too high!");    
} else if (guess < givenNum){
    console.log("That's too low.");
};
