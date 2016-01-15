(function Preview (window){
	this.init = function () {
		var aLinks = document.getElementsByTagName("a");
		console.log(aLinks);
		for (var i= 0; i < aLinks.length; i++) {
			aLinks[i].onclick = this.preview;

		}
		var close = document.getElementsByClassName("close")[0];
		console.log(close);
		close.onclick = this.close;
	}
	this.preview = function (e) {
		console.log("onclick");
		e.preventDefault();
		var preview = e.target.getAttribute("data-preview");
		var el = document.querySelectorAll("[data-preview=" + preview + "]")[0];
		
		var imageSrc = el.getAttribute("href");

		var imageEl = document.getElementById("previewImage");
		imageEl.setAttribute("src", imageSrc);
		var containerEl = document.getElementById("container");
		containerEl.className = "showOverlay";
	}

	this.close = function(e) {
		console.log("close function");
		var containerEl = document.getElementById("container");
		containerEl.className = "";


	}
	// this.appendImage() = function() {

	// }
	window.Preview = this;

})(window)

