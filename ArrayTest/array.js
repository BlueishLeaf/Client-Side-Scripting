"use strict";
function AddArray(){
    var stringArray = new Array(5);
    var largest="";
    for(var x=0;x<5;x++){
        stringArray[x]=document.getElementById(x).value;
        if (largest < stringArray[x]){
            largest=stringArray[x];
        }
    }
    alert(largest);
}