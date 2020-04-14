//Use three functions to compute sum in list: for-loop, while-loop, and recursion


//for-loop
// var list=[1,2,3,4]; //find the total of items in a list
// var sum = 0;
// for(var i = 0; i<=list.length; i++){
//     sum = sum + i;
// } 
// console.log(sum);



//using a while loop
// var list = [1, 2, 3, 4]
// var i = 0;
// var sum = 0;

// while(i<=list.length) {
//     sum += i;
//     i++;

// }
// console.log(sum);


//using recursion
//Reduce: calculate a single value on all items of an array
var numbers = [1,2,3,4]

var sum = numbers.reduce(function(sum,current){
    return sum + current;  //current = numbers from array; sum starts at 0, takes it away and goes to the 
    //next number.Sum is 0,1,3,6
    //0+1==1 
    //2+1==3
    //3+3==6
    //4+6==10
}, 0);//instantiates at 0

console.log(sum);