//You can generate a random integer between 0 and 500 using the following code:
// Write a jQuery function that iterates over everything on the page using each,
//makes them all position:absolute, and assigns random top and left values. You
//need to use each here to give them all different random values

$('.box').each(function(){
    var randomTop = Math.floor(Math.random()*500) ;
        console.log(randomTop);
    var randomLeft = Math.floor(Math.random()*500);
        console.log(randomLeft);
    $(this).css(
    {
        "position":"absolute",
        "top": randomTop + "px",
        "left": randomLeft + "px",
    })
})

