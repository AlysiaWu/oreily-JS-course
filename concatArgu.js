function concatArguments() {
	var result = “”; 
	for (var i = 0; i < arguments.length; i ++) {
	result + = arguments[i] + “ “;
	}
	console.log result;
}
