var h1 = document.createElement("h1");
var text = document.createTextNode("this is a h1");
h1.appendChild(text);
document.getElementById("header").appendChild(h1);

var p = document.createElement("p");
var text = document.createTextNode("this is a p");
p.appendChild(text);
h1.appendChild(text);
document.getElementById("1_23_2012").appendChild(p);