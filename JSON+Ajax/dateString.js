var myRegExp = /[0-9]{4}.(0[1-9]|1[1-2]).(0[1-9]|[1-2][0-9]|3[0-1]) ([0-9]|1[0-2]):[0-5][0-9](a|p)m/; 
function dateFormat(date) {
	if(date.match(myRegExp)) {
		var formattedDate = "Date: " + date.substring(0,10) + ", Time: " + date.substring(11, date.length);
		console.log(formattedDate);
	}
}

dateFormat("2012.07.20 5:00pm");
dateFormat("2012.07.20 10:00pm");
dateFormat("2012.10.01 5:00am");
dateFormat("2012.12.05 10:00am");
	