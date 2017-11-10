// JavaScript Document
$(function(){
    
    $('#logo').click(function(){
        $(this).css({"background-color":"red", "opacity":"0.25"});
    });    
    
    $('#footer').mouseout(function(){
        $('img').css({"border":"dashed 10px"});
        $('li').css({"font-size":"100px"});
        $('#par1').css({"opacity":"0.25"});
        $('#par2').css({"text-align":"center"});
    });     
    
    $('#quickinfo').click(function(){
        $(this).fadeOut(300).fadeIn(300);
    });  
 
    $('.testimonials').click(function(){
        $(this).remove();
    });  
    
    $('#video').mouseenter(function(){
        $(this).animate({
            width:"100%",
            height:"100%",
            margin:"50px",
            border:"dashed 50px"
        },1500);
    });  
    
});