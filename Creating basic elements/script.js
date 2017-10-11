"use strict";
(function(){
	document.getElementById("divButton").addEventListener("click", createDiv, false);
}());

function createDiv(){
    var originDiv = document.getElementById("originDiv");
    var newDiv = document.createElement("div");
    var newP = document.createElement("p");
    var pTxtNode = document.createTextNode("Paragraph in div!");
    newP.appendChild(pTxtNode);
    newDiv.appendChild(newP);
    originDiv.appendChild(newDiv);
    styleDiv(newDiv,newP);
    
}

function styleDiv(newDiv,newP){
    newDiv.style.backgroundColor="green";
    newDiv.style.height="150px";
    newDiv.style.width="400px";
    newP.style.font="32px";
    newP.style.border="5px dashed";
}

