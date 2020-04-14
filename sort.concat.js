//Write a function that merges two sorted lists into a new sorted list. [1,4,6],[2,3,5]
// → [1,2,3,4,5,6]. You can do this quicker than concatenating them followed by a
// sort.

var str1=[4,3,1,2];
var str2=["b","a","d","c"];
function concatenate(){
    return str1.sort() + " " + str2.sort();
}

console.log(concatenate());