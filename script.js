$(document).ready(function(){
	initGrid(3);
	newGrid();
	randomize();
})

function initGrid(numberOfSquares){
	var gridSquare = $('.gridSquare');
	var container = $('.container');
	var gridSquareSize = 500 / numberOfSquares;
	var area = numberOfSquares * numberOfSquares;
	
	gridSquare.height(gridSquareSize);
	gridSquare.width(gridSquareSize);

	for (var i = 1; i < area; i++){
		gridSquare.clone().appendTo(container);
	}
	hover();
}

function newGrid(){
	$("#reset").click(function(){
		var input = prompt("Enter number of Squares");
		$('.container').empty();
		$('.container').append("<div class = gridSquare> </div>");		
		initGrid(input);
		hover();
	})
}

function randomize(){
	$('#randomize').click(function(){
		$('.gridSquare').hover(function(){ 
			$(this).css("background-color", '#' + Math.floor(Math.random()*16777215).toString(16));
		})
	})
}

function hover(){
	$('.gridSquare').hover(function(){
		$(this).css("background-color", "#9d9dfb");
	})
}






