$(document).ready(function(){
	var gridSquare = $('.gridSquare');
	var container = $('.container');
	for (var i = 1; i < 256; i++){
		if (i % 16 == 0){
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
	});
});