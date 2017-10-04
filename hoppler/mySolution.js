// JavaScript Document
"use strict";

//Set up our event listeners
(function(){
	//Add an event listener to the 'logo' div so that when the mouseout event is generated on the logo, call the function changeLogo
	document.getElementById('logo').addEventListener("mouseout", changeLogo, false);
    document.getElementById('homeheader').addEventListener("click",changeHeader,false);
    document.getElementsByTagName('P')[0].addEventListener("click",changePara,false);
}());

function changeLogo()
{
	//Get the logo and place in variable x
	var x = document.getElementById('logo');
	//Reduce the opacity to 20%
	x.style.opacity="0.2";
}

function changeHeader(){
    var x = document.getElementById('homeheader');
    x.style.fontSize="100px";
}

function changePara(){
    var x = document.getElementsByTagName('P');
    for(var y=0;y<=x.length;y++){
        x[y].style.backgroundColor="green";
    }
}