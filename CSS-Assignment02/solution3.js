$(document).ready(function(){
    //Initialise plugin
     $('.tooltip1').tooltipster({
         theme: 'tooltipster-punk', //Choosing theme of tooltip
         animation: 'grow', //Can set animation type
         delay: 0 //Setting delay between the trigger and the tooltip appearing
     });

    $('.tooltip2').css("background-color","black").css("font-color","#ff6666").css("text-align","center").tooltipster({
        animation: 'swing',
        delay: 300,
        arrow: false, //Disable arrow
        trigger: 'click' //Set tooltip trigger to on click rather than the default hover
    });

    $('.tooltip3').tooltipster({
        content: "Tooltips can appear on any side", //Alternate way to using 'title' in the html
        animation: 'slide',
        delay: 100,
        side: "left" //Change side of the tooltip
    });

    $('.tooltip3').tooltipster({
        content: "It can even have multiple instances on one element",
        animation: 'slide',
        delay: 100,
        multiple: true, //Set to true so this element can utilise multiple tooltips
        side: "right"
    });

});