"use strict";
var numArray = new Array(4);
function getNums(){    
    for(var x=0;x<4;x++){
        var tbox = "num"+x.toString();
        numArray[x]=parseInt(document.getElementById(tbox).value);
    }
    calcNums(numArray);
}
function calcNums(numArray){
    showAnswer("The addition of elements is ", (numArray[0]+numArray[1]+numArray[2]+numArray[3]));
    showAnswer("The subtraction of elements is ", (numArray[0]-numArray[1]-numArray[2]-numArray[3]));
    showAnswer("The multiplication of elements is ", (numArray[0]*numArray[1]*numArray[2]*numArray[3]));
    showAnswer("The division of elements is ", (numArray[0]/numArray[1]/numArray[2]/numArray[3]));
}
function showAnswer(message,answer){
    document.getElementById('answer').innerHTML+="<br/>"+ message+answer + "<br/>";
}