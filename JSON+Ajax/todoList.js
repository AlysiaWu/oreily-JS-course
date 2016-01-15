window.onload = init;

function init() {
    getToDoData();
}

function getToDoData() {
    var request = new XMLHttpRequest();
    request.open("GET", "todoList.json");
    request.onreadystatechange = function() {
        var div = document.getElementById("todoList");
        if (this.readyState == this.DONE && this.status == 200) {
            var type = request.getResponseHeader("Content-Type");
            console.log("Content-type: " + type);
            console.log("Status: " + this.statusText);
            if (this.responseText != null) {
                div.innerHTML = this.responseText;
            }
            else {
                var error = document.getElementById("status");
                error.innerHTML = this.status;
            }
        }
    };
    request.send();
} 