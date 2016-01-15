      var color1= []; 
      var color2= []; 
      var color3= []; 
      var color4= []; 
      var color5= []; 

      color1.push(document.getElementById("color1").value);
      color2.push(document.getElementById("color2").value);
      color3.push(document.getElementById("color3").value);   
      color4.push(document.getElementById("color4").value);
      color5.push(document.getElementById("color5").value);

      localStorage.setItem("color1", color1);
      localStorage.setItem("color2", color2);
      localStorage.setItem("color3", color3);
      localStorage.setItem("color4", color4);
      localStorage.setItem("color5", color5);
      var colors = new Array();
      window.onload = init; 

      function int() {
        var submit = document.getElementById("submit");
        submit.onclick = getColors;
      }

      function getColors(){
        if (localStorage) {
          console.log("local storage", localStorage);
          for (var i = 0; i < localStorage.length; i ++) {
            var key = localStorage.key(i);
            var item = localStorage.getItem(key);
            var colorItem= JSON.parse(item);
            colors.push(colorItem);

              // for (var j = 0; j < colors.length; j ++) {
              //   var li = document.createElement("li");
              //   li.innerHTML += colore + " ";
              //   ul.appendChild(li);
              // }                     
          }         
        }
      }
         function addColorsToPage(){
              var ul = document.getElementById("colors");
              var colorFragment = document.createDocumentFragment();
              for (var j = 0; j < colors.length; j ++) {
                var colorItem = colors[i];
                var li = createNewColorItem(colorItem);
                colorFragment.appendChild(li);
              }
          ul.appendChild(colorFragment);
         }

         function addColorsToPage(colorItem) {
            var ul = document.getElementById("colors");
            var li = createNewColorItem(colorItem);
            ul.appendChild(li);
            document.forms[0].reset();
        }

         function createNewColorItem(colorItem) {
              var li = document.createElement("li");
              li.innerHTML = color;
         }