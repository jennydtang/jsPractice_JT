var str1=[1,2,3,4];
var str2=["a","b","c","d"];
var newStr=[];

function concatenate(){
    if(str1.length>0 && str2.length>0){
        for(var i=0; i<str1.length; i++){
            return str1.shift() + " " + str2.shift();
        }
    }
}
console.log(concatenate());
