"use strict";

function ResizeImage(){
    var image = document.getElementById("image");
    var newHeight= document.getElementById("height").value;
    var newWidth= document.getElementById("width").value;
    
    image.style.height=newHeight+'px';
    image.style.width=newWidth+'px';
}
