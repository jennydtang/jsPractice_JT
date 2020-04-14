//print out the odd positions of an array
var list = [0,1,2,3,4,5];
for(var i =0; i<list.length; i++){ //loop through list in full length
if(list[i]%2 !== 0){ //if index is not divisible by 2, it is an odd index
        console.log(list[i]);
}
}
