

$(document).ready(function(){
	console.log("race js linked");

	// All of these arent being used...
	// Please scroll all the way down to key event handling section for core code.
	// Everything in between are commented out for in progres...

	// var obsDiv = $(".obstacle");
	var y = [];
	var x = [];
	var radius = 10;
	// r = 10 cuz from css width of obstacle
	var r = [];
	var test = 0;
	var $obs = $('.obstacle');

	// PLEASE SKIP ALL UNTIL YOU SEE ######### THATS WHERE IT BEGINS
	// Below code doesnt come into play in the rollback version...
	//generateObs(30);
	// var intervalID = window.setInterval(race, 1000);
	// function race(){
	// 	t1.animate({
	// 		// track starts. Plus will make it go down
	// 		// 4 px ideal
	// 		"margin-top": "+=100px"

	// 	},5,"swing",);

	// 	$obs.animate({
	// 		// track starts
	// 		"margin-top": "+=100px"
	// 	},5,"swing");

	// 	// checkCollision();
	// }


	// Fill out an array of obstacle's x and y coordinate to check
	// against player's x and y coordinate
	// obsW : obstacle's width from css file
	// obsH : obstacle's height from css file
	// pX, pY, pW, are player's x,y coordinate and width

	// doesnt work ...
	// function checkCollision() {
	// 	var tempArr = {x:null,y:null};
	// 	var obsPosition = [];
	// 	var pW = 50;
	// 	var obsW = 100; 
	// 	var obsH = 100;
	// 	var pX = Math.floor($('#p1').offset().left);
	// 	var pY = Math.floor($('#p1').offset().top);

	// 	debugger;

	// 	for( var i=0; i<$obs.length ; i++){
	// 		tempArr.x = (Math.floor($obs.eq(i).offset().left));
			
	// 		if(Math.floor($obs.eq(i).offset().top) < 0) {
	// 			tempArr.y = Math.floor($obs.eq(i).offset().top);
	// 		} else tempArr.y = Math.floor($obs.eq(i).offset().top);
	// 		obsPosition.push(tempArr);

	// 		// instead of poping the temp array now, do it after 
	// 		// we did the collision detection
	// 	}
	// 	tempArr
	// 	console.log("1st X and Y: " + obsPosition[0].x + obsPosition[0].y +
	// 					" 2nd X and Y: " + obsPosition[1].x + obsPosition[1].y);

	// 	 pX is 103pY is 845
	// 	(obsPosition[1].x + 100 > 103) && (obsPosition[1].x + 100 < 103 + 50) && (obsPosition[1].y + 100 > 845)
	// 	(300+100> 103) && (300 + 100 < 153) && (300 + 100 > 845)	
		
	// 	for(var i =0; i <obsPosition.length; i++){
	// 		if(
	// 			(  (obsPosition[i].x + obsW > pX) && (obsPosition[i].x + obsW < pX + pW) && (obsPosition[i].y + obsH > pY)  ) ||
	// 			(  (obsPosition[i].x < pX) && (obsPosition[i].x + obsW > pX) && (obsPosition[i].y + obsH > pY)  ) ||
	// 			(  (obsPosition[i].x < pX + pW) && (obsPosition[i].x > pX) && (obsPosition[i].y + obsH > pY)  )) {
	// 			console.log("collided");
	// 		} 
	// 		else console.log("obsPosition: " + obsPosition + "pX is " + pX + " pY is " + pY);
	// 	}
	// 	debugger;

	// 	for(var i = 0; i < tempArr.length; i++){
	// 		tempArr.pop();
	// 		}
	// 	for(var i = 0 ; i <obsPosition.length; i++){
	// 		obsPosition.pop();
	// 	}
	// };

	// function generateObs(numberObs) {
	// 	var height = $(".track_one").height();
	// 	var width = $(".track_one").width();
	// 	var segments = Math.floor(height/numberObs);
	// 	var temp = 0;
	// 	var $board = $('.board');

	// 	// Generate random x coordinates and fixed y 
	// 	// coordinates of obstacles
	// 	for(var j=0; j<numberObs; j++){
	// 		x.push(Math.floor(Math.random()*width));
	// 	}
	// 	for(var k=0; k<numberObs; k++){
	// 		y.push(temp);
	// 		temp = temp + segments;
	// 		r.push(radius);
	// 	}


 // 		for(var i=0; i<numberObs; i ++){
	// 		// create new obs and append it at the location
	// 		// base on the board's height
	// 		$board.append(`<div class="obstacle" id="${i}"></div`);
	// 			// distance = distance + i;
	// 		$(`#${i}`).animate({
	// 			"margin-top": `+=${y[i]}`,
	// 			"margin-left": `+=${x[i]}`
	// 		});
	// 		// ySection = ySection + ySection;
	// 	}
	// } // End of generateObs

	//##########################################################
	//###################### Workable version here #############
	// p1_y and p2_y are counters that keep track how far the 
	// players have move up the screen, and that is used to
	// to determine the winner
	var p1 = $("#p1");
	var p2 = $("#p2");
	var t1 = $("#t1");
	var t2 = $("#t2");
	var end_one = $("#end1");
	var end_two = $("#end2");
	var p1_y =1950;
	var p2_y = 1950;
	var gameEnd = false;
	// Just an initial alert to tell how its being played
	var intervalID = setInterval(toAlert, 500);
	function toAlert(){
		alert("Player Red press 'a' to move up. Player Green press 'k' to move up");
		clearInterval(intervalID);
	}
	
	$(document).on("keydown", function(e){
		/*
			##### PLAYER 1 #####
		*/
		if(gameEnd) return;		
		if(e.which === 65){
			
			// Pressed 'a' to move up
			t1.animate({
				"margin-top": "+=30px",
				
			}, 1, function(){
				end_one.animate({
					"margin-top": "+=30px",
				}, 1);
				if(end_one.offset().top > p1.offset().top) {
					alert("Player Red Wins");
					gameEnd = true;
				}
			});

		} 

		if(e.which === 75){
			
			// Pressed 'k' for p2 to move up
			t2.animate({
				"margin-top": "+=30px"

			}, 1, function() {
				end_two.animate({
					"margin-top": "+=30px",
					
				}, 1);
				if(end_two.offset().top > p2.offset().top) {
					alert("Player Green Wins");
					gameEnd = true;
				}

			});

		} 
	});

});