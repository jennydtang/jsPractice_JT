var num = prompt("Let's find a multiplication table for: ");
var table = " ";
for(i=1; i<=12;i++){
    table += i+ " x " + num+ " = " + (i*num) + "\n";
}
console.log(table);
