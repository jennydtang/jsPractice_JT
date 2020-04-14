//find prime numbers
function prime(num){
    if(num < 2) return false;
    for (var i = 2; i < num; i++) {
        if(num%i==0)//if the modulus is 0 when divided by numbers greater than two, it is not a prime number
            return false;
    }
    return true;
}


console.log(prime(6));