var givenNum = 13;
var guessNumber = 1;

while (guessNumber >= 0){
    //place guess inside so that it reads as part of the loop and continues after one attempt
    var guess = prompt("See if you can guess my number right. Enter your guess: ");

if(Number(guess) === givenNum){
    alert("You got it! Got it in " + guessNumber + " tries");
    console.log("Got it in " + guessNumber + " tries.") 
    break; //place a break so that it will stop after getting the right guess
} else if (Number(guess) > givenNum){
    alert("That's too high!");  
    guessNumber = guessNumber +1;
} else if (Number(guess) < givenNum){
    alert("That's too low.");
     guessNumber = guessNumber +1;
}
};
