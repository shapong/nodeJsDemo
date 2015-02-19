$(document).ready(function() {

	var name = prompt("What's your first name?","First name...");

	console.log("hey there " + name);

	if(name===null) {
		$("#intro").text("Hey dude why didn't you give me ur name!");
	}

	else {
		if(name.toLowerCase()==="prateek") {
			$("#intro").text("Hey bro check it out...I know how to put a node.js app on aws now :P ");
		}
		else if(name.toLowerCase()==="varsha") {
			$("#intro").text("Hey doobs...you should start coding...u will suck less than me :P");
		}
		else {
			$("#intro").text("Hey " + name + " I guess you know Sharika...isn't she aWeS! ");
		}
	}

});

