var setDate = document.getElementById("date");
console.log(setDate);
var newDate = new Date(2100, 11, 21, 18);
console.log(newDate);
setDate.innerHTML = newDate.toLocaleString("en-us", {hour: "2-digit", weekday:"long", month: "long", year:"numeric", day:"numeric"});
