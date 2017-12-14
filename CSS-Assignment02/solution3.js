$(document).ready(function(){
     $('.tooltip1').tooltipster({
         theme: 'tooltipster-punk',
         animation: 'grow',
         delay: 0
     });

    $('.tooltip2').css("background-color","black").css("font-color","#ff6666").css("text-align","center").tooltipster({
        animation: 'swing',
        delay: 300,
        arrow: false,
        trigger: 'click'
    });

    $('.tooltip3').tooltipster({
        content: "Tooltips can appear on any side",
        animation: 'slide',
        delay: 100,
        side: "left"
    });

    $('.tooltip3').tooltipster({
        content: "It can even have multiple instances on one element",
        animation: 'slide',
        delay: 100,
        multiple: true,
        side: "right"
    });

});