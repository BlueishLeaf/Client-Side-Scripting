"use strict";
var numArray=new Array(10);

function CreateArray(){
	for(var x=0;x<10;x++){
		numArray[x]=document.getElementById("txt"+x).value;
	}
}

function SortAscending(){
	CreateArray();
	for(var x=0;x<10;x++){
		for(var y=x+1;y<10;y++){
			if (numArray[x]>numArray[y]){
				var temp=numArray[x];
				numArray[x]=numArray[y];
				numArray[y]=temp;
			}
		}
	}
	PrintResult();
}

function SortDescending(){
	CreateArray();
	for(var x=0;x<10;x++){
		for(var y=x+1;y<10;y++){
			if (numArray[x]<numArray[y]){
				var temp=numArray[x];
				numArray[x]=numArray[y];
				numArray[y]=temp;
			}
		}
	}
	PrintResult();
}

function PrintResult(){
	for(var x=0;x<10;x++){
		document.getElementById("output").innerHTML+=numArray[x]+"<br>";
	}
}


