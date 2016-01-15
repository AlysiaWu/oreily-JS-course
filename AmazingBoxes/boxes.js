window.onload = init; 
function init (){
	document.getElementById("generateButton").addEventListener("click", generate);
	document.getElementById("clearButton").addEventListener("click", clear);
	

}
function Box(id, name, color, x, y) {
		this.id = id;
		this.name = name;
		this.color = color; 
		this.x = x;
		this.y = y;
	}
	var counter = 1;
	var boxes = [];
function generate (name, color, selectedAmount) {
	var name = document.getElementById("name").value;
	var color = document.getElementById('color').value;
	var amounts = document.getElementsByName("amount");
	var selectedAmount = 0;
	// get the selected amount and also add up to the counter;
	for (var i = 0; i< amounts.length; i++) {
		if(amounts[i].checked) {
				selectedAmount = amounts[i].value;	
				console.log(selectedAmount);			
			}
		}

	for (var i = 1; i <= selectedAmount; i ++) {
		var div = document.createElement("div");
		var sceneDiv = document.getElementById("scene");
		var x = Math.floor(Math.random() * (sceneDiv.offsetWidth-101));
		var y = Math.floor(Math.random() * (sceneDiv.offsetHeight-101));
        sceneDiv.appendChild(div);
		div.style.backgroundColor = color;
		div.style.left = x + "px";
		div.style.top= y + "px";
		div.className ="box";

		console.log(boxes);
		console.log(new Box(counter, name, color, x, y));
		boxes.push(new Box(counter, name, color, x, y));
		console.log(boxes);
		console.log("counter", counter);
		div.id=counter;
		function alert(counter, name, color, x, y) {
			alert(counter, name, color, x, y);
		}
		div.addEventListener("click", alert);
			counter +=1;
	}

}

function clear(e) {
	var allBoxes= document.getElementsByClassName("box");
	allBoxes.parent.removeChild(div);

}
 
