$(document).ready(function(){
	var gridSquare = $('.gridSquare');
	var container = $('.container');
	var lineBreak = ("<br/>");
	for (var i = 1; i < 256; i++){
		if (i % 16 == 0){
			(container).append("<br/>");
			gridSquare.clone().appendTo(container);
		} else {
			gridSquare.clone().appendTo(container);
		}
	}
});
