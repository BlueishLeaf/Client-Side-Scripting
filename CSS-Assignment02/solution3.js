$(document).ready(function(){
     $('.tooltip1').tooltipster({
         theme: 'tooltipster-punk',
         animation: 'grow',
         delay: 0
     });

    $('.tooltip2').css("background-color","black").css("font-color","white").css("text-align","center").tooltipster({
        animation: 'swing',
        delay: 300,
        trigger: 'click'
    });

    $('.tooltip3').tooltipster({
        animation: 'fade',
        delay: 100,
        trackOrigin: true
    });
});