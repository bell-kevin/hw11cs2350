//script here

console.log("catScript running!");

window.addEventListener("load", addListeners);

function addListeners(){
	console.log("addListeners active!");
	
	document.getElementById("playfulnessRating").addEventListener("change", changeNumToys);
	document.getElementById("likesFoodRating").addEventListener("change", changeNumMeals);
	document.getElementById("energyRating").addEventListener("change", changeNumNaps);
	
	document.getElementById("bioCheck").addEventListener("change", function(){
		console.log("bioCheck change active!");
		
		if(document.getElementById("bioCheck").checked){
			document.getElementById("bioContent").style.display = "block";
		}else {
			document.getElementById("bioContent").style.display = "none";
		}
	});
	
	document.getElementById("friendsCheck").addEventListener("change", function(){
		console.log("friendsCheck change active!");
		
		if(document.getElementById("friendsCheck").checked){
			document.getElementById("friendsContent").style.display = "block";
		}else {
			document.getElementById("friendsContent").style.display = "none";
		}
	});

}

function changeNumToys(){
	console.log("changeNumToys active!");
	
	var play = parseFloat(document.getElementById("playfulnessRating").value);
	
	if(play == 0){
		document.getElementById("toys").value  = 0;
	}else if (play >= 1 && play <= 3){
		document.getElementById("toys").value  = 1;
	}else if (play >= 4 && play <= 7){
		document.getElementById("toys").value  = 2;
	}else if (play >= 8 && play < 11){
		document.getElementById("toys").value  = 3;
	}else{
		document.getElementById("toys").value  = NaN;
	}
	
	updateTotalCost();
}

function changeNumMeals(){
	console.log("changeNumMeals active!");
	
	var eat = parseFloat(document.getElementById("likesFoodRating").value);
	
	if(eat == 0){
		document.getElementById("meals").value  = 2;
	}else if (eat >= 1 && eat <= 3){
		document.getElementById("meals").value  = 3;
	}else if (eat >= 4 && eat <= 7){
		document.getElementById("meals").value  = 4;
	}else if (eat >= 8 && eat < 11){
		document.getElementById("meals").value  = 5;
	}else{
		document.getElementById("meals").value  = NaN;
	}
	
	updateTotalCost();
}

function changeNumNaps(){
	console.log("changeNumNaps active!");
	
	var sleep = parseFloat(document.getElementById("energyRating").value);
	
	if(sleep == 0){
		document.getElementById("naps").value  = 10;
	}else if (sleep >= 1 && sleep <= 3){
		document.getElementById("naps").value  = 6;
	}else if (sleep >= 4 && sleep <= 7){
		document.getElementById("naps").value  = 4;
	}else if (sleep >= 8 && sleep < 11){
		document.getElementById("naps").value  = 2;
	}else{
		document.getElementById("naps").value  = NaN;
	}
	
	updateTotalCost();
}

function updateTotalCost(){
	console.log("updateTotalCost active!");
	
	var toysTotal = (20*parseFloat(document.getElementById("toys").value));
	var foodTotal = (10*parseFloat(document.getElementById("meals").value));
	
	var total = toysTotal+foodTotal;
	
	document.getElementById("toysCost").value  = toysTotal;
	document.getElementById("foodCost").value  = foodTotal;
	document.getElementById("totalCost").value  = total;
}