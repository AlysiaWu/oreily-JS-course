(function Preview (){
	this.init = function () {
		var aLinks = document.getElementByTagName("a");
		for (var i= 0; i < aLinks.length; i++) {
			aLinks[i].onClick = preview; 
		}
	}
	this.preview = function () {
		preventDefault();
		// conso
		var div = document.createElement("div");
		var preImg = document.createElement("img");
		preImg.setAttribute("src", 'https://courses.oreillyschool.com/advancedjavascript/homework/images/image1.jpg');
		div.appendChild(preImg);
	}

})()

