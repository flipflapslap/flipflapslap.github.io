var numberOfSquares = 8;
var area = numberOfSquares * numberOfSquares;

$(document).ready(function(){
	var gridSquare = $('.gridSquare');
	var container = $('.container');
	var gridSquareHeight = 500 / numberOfSquares;
	var gridSquareWidth = 500 / numberOfSquares;
	
	gridSquare.height(gridSquareHeight);
	gridSquare.width(gridSquareWidth);

	for (var i = 1; i < area; i++){
		if (i % numberOfSquares == 0){
			(container).append("<br/>");
			gridSquare.clone().appendTo(container);
		} else {
			gridSquare.clone().appendTo(container);
		}
	}
});

$(document).ready(function(){
	$('.gridSquare').hover(function(){
		$(this).css("background-color", "black");
	})
});

$(document).ready(function(){
	$("#button").click(function(){
		$(".gridSquare").css("background-color", "pink");
		numberOfSquares = prompt("Enter number of Squares");
		area = numberOfSquares * numberOfSquares;
	});
});

