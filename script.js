$(document).ready(function() {

	var name = prompt("What's your name?","Insert text here...");

	console.log("hey there " + name);

	if(name===null) {
		$("#intro").text("Hey dude why didn't you give me ur name!");
	}

	else {
		if(name.toLowerCase()==="prateek") {
			$("#intro").text("Hey bro check it out I know node.js now :P ");
		}
		else {
			$("#intro").text("Hey " + name + " I guess you know Sharika...isn't she aWeS! ");
		}
	}

});

