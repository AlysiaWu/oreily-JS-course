window.onload = init; 
function init (){
	document.getElementById("generateButton").addEventListener("click", drawBox);
	document.getElementById("clearButton").addEventListener("click", clear);
}

function drawBox (name, color, selectedAmount) {
	var name = document.getElementById("name").value;
	var color = document.getElementById('color').value;
	var amounts = document.getElementsByName("amount");
	var selectedAmount = 0;
	for (var i = 0; i< amounts.length; i++) {
		if(amounts[i].checked) {
				selectedAmount = amounts[i].value;
			}
		}

	for (var i = 1; i <= selectedAmount; i ++) {
		var div = document.createElment("div");
		div.addClass("box");
	}

	var divs = document.getElementByClassName("box");
	

}