

$(document).ready(function(){
	console.log("race js linked");

	var p1 = $("#p1");
	var p2 = $("#p2");
	var t1 = $("#t1");
	var t2 = $("#t2");
	var obs = $(".obstacle");

	  // var intervalID = window.setInterval(race, 5);
	function race(){
		t1.animate({
			// track starts. Plus will make it go down
			"margin-top": "+=4px"
		},5,"swing");
		obs.animate({
			// track starts
			"margin-top": "+=4px"
		},5,"swing");

	}
	// var margin = 
	generateObs();

	function generateObs() {
		var height = $(".track_one").height();
		var section = Math.floor(height/6);
		var $board = $('.board');
		var distance = section;


 		for(var i=0; i<6; i ++){

			// create new obs and append it at the location
			// base on the board's height
			$board.append(`<div class="obstacle" id="${i}"></div`);
				// distance = distance + i;
			$(`#${i}`).animate({
				"margin-top": `+=${distance}`

			});
			distance = distance + section;

		}


	}

	// Keypad A.S for P1 
	$(document).on("keydown", function(e){
		/*
			##### PLAYER 1 #####
		*/


		if(e.which === 65){
			// Pressed 'a' to move left
			p1.animate({
				"margin-left": "-=30px"

			}, 100);
		} else if(e.which === 83){
			// Pressed 's' to move right
			p1.animate({
				"margin-left": "+=30px"

			}, 100);
		}
		if(e.which === 69){
			// Pressed 'e' speed up
			t1.animate({
				"margin-top": "+=30px"

			}, 100);
		} else if(e.which === 82){
			// Pressed 'r' to shoot
			// coming soon..
			t1.animate({
				"margin-top": "-=30px"

			}, 100);
		}

		/*
			##### PLAYER 2 #####
		*/
		// if(e.which === 75){
		// 	// Pressed 'k' to move left
		// 	p2.animate({
		// 		"margin-left": "-=30px"

		// 	}, 100);
		// } else if(e.which === 76){
		// 	// Pressed 'l' to move left
		// 	p2.animate({
		// 		"margin-left": "+=30px"

		// 	}, 100);
		// }

		// if(e.which === 219){
		// 	// Pressed '[' speed up
		// 	t2.animate({
		// 		"margin-top": "+=30px"

		// 	}, 100);
		// } else if(e.which === 221){
		// 	// Pressed ']' to shoot
		// 	// coming soon..
		// 	t2.animate({
		// 		"margin-top": "-=30px"

		// 	}, 100);

		// }



	});

});