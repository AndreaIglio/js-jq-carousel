//We start this function to be sure our DOM will be loaded before it start to read our js file






$(function (){

//variabili definite

var next = $('i.fa-angle-right');
var prev = $('i.fa-angle-left');




next.click(function ( ){

   
    $(".active").removeClass("active").next().addClass("active");

   

} )



prev.click(function (){



    $(".active").removeClass("active").prev().addClass("active");
    // if($(".active, .first))
        
    



})






    
})