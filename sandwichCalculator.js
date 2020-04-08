function sandwichCalculator (slicesOfBread, slicesOfCheese){
    var sandwich = slicesOfBread / 2;

    if((slicesOfBread > 1)&&(slicesOfCheese > 0)&&(slicesOfCheese<sandwich)) {
        sandwich = slicesOfCheese;
        console.log(sandwich);
        return sandwich;
    } else if ((slicesOfCheese>=sandwich)&&(slicesOfBread>1)){
        return(sandwich);
    } else if ((slicesOfBread<2)|| (slicesOfCheese=0)){
        console.log("No sandwiches");
        return 0;
    }
    
}
console.log(sandwichCalculator(6, 12));