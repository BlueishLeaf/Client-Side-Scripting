// JavaScript Document
"use strict";

var paras = document.getElementsByTagName("p");
var readMores = document.getElementsByClassName("more");
var images = document.getElementsByTagName("img");

(function(){
    createDivs();
    document.getElementById("leftImage").addEventListener("click",reduceLeftImage,false);
    document.getElementById("footer").addEventListener("mouseout",changeFooter,false);
    document.getElementById("firstLink").addEventListener("click",changePara,false);
    document.getElementById("secondLink").addEventListener("click",changeLink,false);
    
readMores[0].addEventListener("click",changeNinthImage,false);
    
document.getElementById("rightImage").addEventListener("click",contrastBlur,false);
    
document.getElementById("logo").addEventListener("click",styleParagraph,false);    
    
}());

function createDivs(){
    for(var x=0;x<paras.length;x++){
        var newDiv = document.createElement("div");
        paras[x].appendChild(newDiv);
        var newH=document.createElement("h3");
        var newHNode=document.createTextNode("New Header Created");
        newH.appendChild(newHNode);
        newDiv.appendChild(newH);
        styleDivs(newDiv, newH);
        paras[x].appendChild(newDiv);
        
    }
}

function styleDivs(newDiv,newH){
    newDiv.style.height="75px";
    newDiv.style.width="75px";
    newDiv.style.backgroundColor="blue";
    newH.style.fontFamily="Verdana";
    newH.style.fontSize="14px";
}

function reduceLeftImage(){
    var x = document.getElementById("leftImage");
    x.style.width="50%";
    x.style.height="50%";
}

function changeFooter(){
    var x = document.getElementById("footer");
    x.style.backgroundColor="green";
    x.style.border="20px dashed";
}

function changePara(){
    paras[0].style.transform="scale(2,2)";
}

function changeLink(){
    var x = document.getElementById("secondLink");
    x.setAttribute("href","https://www.facebook.com/");
}

function changeNinthImage(){
    images[8].setAttribute("src","images/fidget.jpg");
    images[8].style.border="10px dashed";
}

function contrastBlur(){
    var x = document.getElementById("leftImage");
    var y = document.getElementById("rightImage");
    
    y.style.filter="contrast(150%)";
    x.style.filter="blur(20px)";
}

function styleParagraph(){
    paras[0].style.textAlign="right";
    paras[0].style.textDecoration="line-through";
    paras[0].style.letterSpacing="10px";
    paras[0].style.lineHeight="3";
    paras[0].style.textShadow="10px 12px red";

}