//We start this function to be sure our DOM will be loaded before it start to read our js file






$(function (){


//variabili definite

var next = $("i.fa-angle-right");
var prev = $("i.fa-angle-left");


next.click(function (){

    var active = $(".active");
    var last = $(".last");
    var first = $(".first");
    
    
    if(active.hasClass('last')){

     first.addClass('active');
     last.removeClass('active');
    }
    else {
         $(".active").removeClass("active").next().addClass("active");
    }
    
    
   
} )



prev.click(function (){

    var active = $(".active");
    var last = $(".last");
    var first = $(".first");
    

    if (active.hasClass("first")) {
     
     last.addClass("active");
     first.removeClass("active");
    }
    else {
        active.removeClass("active").prev().addClass("active");

    }



})





    
})