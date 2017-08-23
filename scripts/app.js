

$(document).ready(function(){
	console.log("race js linked");

	var p1 = $("#p1");
	var p2 = $("#p2");

	// Keypad A.S for P1 
	$(document).on("keydown", function(e){
		if(e.which === 65){
			// Pressed 'a' to move left
			$("#p1").animate({
				"margin-left": "-=30px"

			}, 100);
		} else if(e.which === 83){
			// Pressed 'a' to move left
			$("#p1").animate({
				"margin-left": "+=30px"

			}, 100);
		}

		if(e.which === 75){
			// Pressed 'a' to move left
			$("#p2").animate({
				"margin-left": "-=30px"

			}, 100);
		} else if(e.which === 76){
			// Pressed 'a' to move left
			$("#p2").animate({
				"margin-left": "+=30px"

			}, 100);
		}

	});

});