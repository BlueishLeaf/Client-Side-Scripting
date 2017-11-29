$(document).ready(function(){
    $("a:nth-child(6)").mouseenter(function() {
        $(this).css("background-color", "#283fc5").css("opacity", "0.6").html("www.kattis.com");
    });

    $(".hideButtons").click(function() {
        $("div:parent").hide();
    });

    $("#person").mouseout(function() {
        $(this).animate({
            height: '70%',
            width: '70%'
        },3000,function(){
            $(this).fadeOut(1000);
        });
    });

    $("ul > li").dblclick(function() {
        $(this).css("background-color","#ff1a8c").css("color","#ffe6f2").css("font","30px Arial");
    });

    $("p + p").click(function() {
        var x = document.getElementsByTagName("ul");
        $("ul").slideUp('slow', function(){
            $("p:eq(3)").after(x);
            $("ul").slideDown();
        });
    });

    $("h3 + p").mouseover(function() {
        $(this).animate({
            fontSize: '20px'
        },2000);
    });
});