


// var DBZ = [ "#goku", "#vegeta", "#mrRoshi", "#Frieza"]
// 	// $( document ).ready(function () {
$(document).ready(function(){
var gameStarted=false;
var characters= $(".character");
var characters = [
		goku = { 
				name: "goku",
				health:650,
				attack:75,
				counter:35	
					},
	
	 vegeta = {
				name: "vegeta",
				health:675,
				attack:50,
				counter:40
					},
		
	 mrRoshi = {
				name: "mrRoshi",
				health:750,
				attack:80,
				counter:60	
					},
		
	 Frieza = {
				name:"Frieza",
				health:700,
				attack:40,
				counter:70	
					}

];



	$(".character").click(function(){
	if(gameStarted == false){
		for (var i=0; i < characters.length; i++){
			if (characters[i] = this){
				$(".attacker-box").append(characters[i]);
				
				};


				gameStarted=true;
				$(".character").click(function(){
					if (characters [i] = this){
						$(".defender-box").append(characters[i]);

						
						};
					
				});
			}
		}
	

	});


var startpower = 
var supersayan = ".character.attack" + ".character.attack";
var counter = ".character.counter";
var healthAttacker = ".character.health";
var healthDefender = ".character.health";


	$("#attack").click(function(){
		if(healthDefender>=0 && healthAttacker>=0){
			healthDefender=pointsDefender - supersayan;
			healthAttacker=pointsAttacker - counter;
			supersayan=supersayan + startpower;
		document.querySelector("#score").innerHTML = 
		"<p> Success you hit enemy for" + pointsAttacker + "points</p>"+
		"<p> Enemy Countered back for" + pointsDefender + "points</p>";

		}else 
			alert ("GAME OVER!!!!!!!!!!!");
	});

});



