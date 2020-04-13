// Write a program that asks the user for a number n and gives them the possibility
// to choose between computing the sum and computing the product of 1,…,n
var newNum = prompt("Give me a number!");
var userChoice = prompt("Choose: add or product. Type in all lowercase.")
if (userChoice == "product"){
    function factorial(){
        var result = 1;
        for(var i = 1; i<=newNum; i++){
        result *= i;
    }
    return result;
    };
    console.log(factorial(newNum));
} else if (userChoice == "add"){
    function add(){
        var result =0;
        for(var i=0; i<=newNum; i++){
            result += i;
        }
        return result;
    };
   console.log(add(newNum));
}
