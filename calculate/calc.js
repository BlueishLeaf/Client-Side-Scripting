
"use strict";
var numArray = new Array(4);

function getNums()
{    
    numArray[0] = parseInt(document.getElementById('num1').value);
    numArray[1] = parseInt(document.getElementById('num2').value);
    numArray[2] = parseInt(document.getElementById('num3').value);
    numArray[3] = parseInt(document.getElementById('num4').value);

    calcNums(numArray);
    addNums(numArray);
    subtractNums(numArray);
    multiplyNums(numArray);
    divideNums(numArray);
}

function calcNums(numArray)
{
    
    var addedTotal= numArray[0];
    var subtractedTotal= numArray[0];
    var multipliedTotal= numArray[0];
    var dividedTotal= numArray[0];
    
    for(var x=1;x<4;x++)
    {
        addedTotal+=numArray[x];
        subtractedTotal-=numArray[x];
        multipliedTotal*=numArray[x];
        dividedTotal/=numArray[x];
    }
    showAnswer(addedTotal,subtractedTotal,multipliedTotal,dividedTotal);
}

function addNums(numArray)
{
    var message = "The addition is: "
    var total=0;
    for(var x=0;x<4;x++)
    {
        total+=numArray[x];
    }
    displayAnswer(message,total);
}

function subtractNums(numArray)
{
    var message = "The subtraction is: "
    var total = numArray[0];
    for(var x=1;x<4;x++)
    {
        total-=numArray[x];
    }
    displayAnswer(message,total);
}

function multiplyNums(numArray)
{
    var message = "The multiplication is: "
    var total = numArray[0];
    for(var x=1;x<4;x++)
    {
        total*=numArray[x];
    }
    displayAnswer(message,total);
}

function divideNums(numArray)
{
    var message = "The division is: "
    var total = numArray[0];
    for(var x=1;x<4;x++)
    {
        total*=numArray[x];
    }
    displayAnswer(message,total);
}

function displayAnswer(message,total)
{
    document.getElementById('answer').innerHTML+=message+total;
}

function showAnswer(addedTotal,subtractedTotal,multipliedTotal,dividedTotal)
{
    document.getElementById('answer1').innerHTML= "The addition is "+addedTotal;
    document.getElementById('answer2').innerHTML= "The addition is "+subtractedTotal;
    document.getElementById('answer3').innerHTML= "The addition is "+multipliedTotal;
    document.getElementById('answer4').innerHTML= "The addition is "+dividedTotal;

}