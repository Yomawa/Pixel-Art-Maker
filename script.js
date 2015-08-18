window.onload = function(){
	grid();
	listen();
	addColors();
	listenerColor();
};
var chooseColor="grey";

var boxes = document.getElementsByTagName("div");

function grid(){
	for (var i=0; i<2600; i++){
		var div = document.createElement("div");
		div.style.width= "15px";
		div.style.paddingBottom="15px";
		div.style.margin="1px";
		div.style.float="left";
		div.style.border="1px solid black";
		document.body.appendChild(div);


	}

}


function listen(){
	for (var i=8; i<2600; i++){
		boxes[i].addEventListener("click",color);
	}

}

function color(){
	this.style.backgroundColor=chooseColor;
	
}
//defining red and blue colors
function addColors(){
	
		document.getElementsByTagName("div")[0].style.backgroundColor="red";
		document.getElementsByTagName("div")[1].style.backgroundColor="purple";
		document.getElementsByTagName("div")[2].style.backgroundColor="blue";
		document.getElementsByTagName("div")[3].style.backgroundColor="green";
		document.getElementsByTagName("div")[4].style.backgroundColor="yellow";
		document.getElementsByTagName("div")[5].style.backgroundColor="#FF6633";
		document.getElementsByTagName("div")[6].style.backgroundColor="#00FFCC";
		document.getElementsByTagName("div")[7].style.backgroundColor="#003300";
}

function listenerColor(){
	for (var i=0; i<8; i++){
		boxes[i].addEventListener("click",selected);
	}

}	
function selected(){
	 chooseColor=this.style.backgroundColor;
}	


