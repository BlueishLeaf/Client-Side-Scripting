// JavaScript Document

//This function gets called when we double click on the textbox
function changeTextbox()
{
	//NOTE: We are not getting the contents of the textbox, we are getting the textbox itself.
	var x = document.getElementById('txt1');
	//We can use the setAttribute method to alter the textbox attributes.
	//This will overwrite existing attributes if we have previous values
	x.setAttribute("value", "can no longer be used");
	x.setAttribute("disabled", "true");
	x.setAttribute("type", "file");
	//When altering stlyes, it is generally not a good idea to use
	//setAttribute - use the following approach instead
	x.style.height="300px";
	x.style.width="150px";
	x.style.opacity="0.2";
    x.style.backgroundImage="ITSligo_logo.png";
    x.style.backgroundColor="black";
}


//This function gets called when we move the mouse away from the button
function changeButton()
{
	var x = document.getElementById('btn1');
	alert("The variable x holds a data type which is: " + typeof(x));
	x.setAttribute("type", "image");
	x.setAttribute("src","http://itsligo.ie/files/2015/03/Eclipse-Sligo1-e1427106151825.jpg");
	//Again, don't use setAttribute for styling changes
	x.style.border = "dashed";
	x.style.transform="rotate(45deg)";
    x.style.height="500px";
    x.style.width="1500px";
}

function changeParagraph()
{
	var x = document.getElementById('par1');
	x.setAttribute("contenteditable", "true");
	x.setAttribute("spellcheck", "true");
    x.setAttribute("align","center");
	x.style.fontSize="24px";
	x.style.backgroundColor="cyan";
    x.style.fontFamily="Arial";
    x.style.borderStyle="dotted";
    x.style.fontWeight="bold";
    var position = 0;
    var id = setInterval(frame, 5);
    function frame(){
        if (position == 500){
            clearInterval(id);
        }
        else{
            position++;
            x.style.top=position+'px';
        }
    }
}
