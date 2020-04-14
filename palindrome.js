//check for a palindrome

var word = "abba"; 
function palindrome(){
    for(var i=0; i<word.length; i++){ //make a for loop that goes through the letters
        //check if the first letter(through the length of the word) == to the last letters
        //-1 is the last letter, -i makes it go backward by one
        //if the letters do not match, it is false
        if(word[i] !== word[word.length - 1 -i]){
            return false;
        }else{
            return true;
        }
    }
}

console.log(palindrome(word));