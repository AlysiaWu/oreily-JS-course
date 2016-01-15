window.onload = init; 

function init(){
	var submit = document.getElementById("submit");
	submit.onclick = calculate;
}


function calculate() {
	console.log("in here");
	var operand1 = document.getElementById("operand1").value;
	console.log(operand1==false);
	var operand2 = document.getElementById("operand2").value;
	var operator = document.getElementById("operator").value;
	if (operand1 == false || operand2 == false || operator == false) {
		alert("please make sure to enter everything!");
	} else {
		try {
			if (isNaN(operand1) || isNaN(operand2)) {
				throw new Error("the operands need to be numbers");
			} 
			else if (operand2 == 0) {
				throw new Error("the divident cannot be zero!");
			}
		    else if (operator == "+") {
				var result = parseInt(operand1)+parseInt(operand2);
			}
			else if (operator == "-") {
				var result = parseInt(operand1)-parseInt(operand2);
			}
			else if (operator == "*") {
				var result = parseInt(operand1)-parseInt(operand2);
			}
			else if (operator == "/") {
				var result = parseInt(operand1)/parseInt(operand2);
			}
			
			console.log(result);
			document.getElementById("result").innerHTML = result;
		}
		catch (ex) {
			alert(ex.message);
		}
	}


	
}
