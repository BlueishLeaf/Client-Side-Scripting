//NOTE: You may need to refresh the page once or twice to get the three instances to show
$(document).ready(function(){
    //Initialise the plugin
    $("#twentytwentyBox1").twentytwenty({
        click_to_move: true, //User can click anywhere on the image to move the slider
        no_overlay: true //Disables overlay on images
    });
    $("#twentytwentyBox2").twentytwenty({
        click_to_move: false,
        orientation: "vertical", //Change orientation of slider
        default_offset_pct: 0.9, //Set how much of the first image is visible
        before_label: "Before Photoshop", //Change label of first image
        after_label: "After Photoshop" //Change label of second image
    });
    $("#twentytwentyBox3").twentytwenty({
        click_to_move: true,
        move_slider_on_hover: true, //User can hover anywhere on image to move slider
        before_label: "Foggy",
        after_label: "Clear"
    });
});