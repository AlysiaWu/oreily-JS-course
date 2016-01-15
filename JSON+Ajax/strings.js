window.onload = init; 

function init() {
	var searchButton = document.getElementById("searchButton");
	searchButton.onclick = searchText;	

}

function searchText() {
	var searchTerm = document.getElementById("searchTerm").value; 
	var textToSearch = document.getElementById("textToSearch").value;
	searchTerm = searchTerm.trim();
	textToSearch = textToSearch.trim();
	if (searchTerm == null || searchTerm == "") {
		alert ("please enter a string to search for"); 
		return;
	}
	if (textToSearch == null || textToSearch == "") {
		alert ("Please enter some text to search");
		return;
	}
	// if (searchTerm == textToSearch) {
	// 	alert ("Found 1 instance of " + searchTerm);
	// } else {
	// 	alert ("No innstance of " + searchTerm + " found !");
	// }
	var pos =0;
	var count = 0; 
	while (pos >=0) {
		pos = textToSearch.toUpperCase().indexOf(searchTerm.toUpperCase(), pos);
		if (pos>= 0) {
			count++; 
			pos++;
		}
	}

	alert ("Found " + count + " instance of " +searchTerm);

}