//Modify the previous program such that only the users Alice and Bob are greeted with their names
var name = prompt("What is your name?");
if((name == "Alice") ||(name == "Bob")) {
    alert("Nice to meet you " + name);
} else {
    alert("You're not Bob or Alice");
};