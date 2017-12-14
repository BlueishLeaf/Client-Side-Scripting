$(document).ready(function(){
    $("#twentytwentyBox1").twentytwenty({
        click_to_move: true,
        no_overlay: true
    });
    $("#twentytwentyBox2").twentytwenty({
        click_to_move: false,
        orientation: "vertical",
        default_offset_pct: 0.9,
        before_label: "Before Photoshop",
        after_label: "After Photoshop"
    });
    $("#twentytwentyBox3").twentytwenty({
        click_to_move: true,
        move_slider_on_hover: true,
        before_label: "Foggy",
        after_label: "Clear"
    });
});