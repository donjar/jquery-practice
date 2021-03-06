var size = 640;

function change_size() {
	var sides = prompt("How many squares in one side?");
	if (/^[1-9]\d*$/.test(sides)) {
		$('.column').remove();
		for (var i = 1; i <= sides; i++) {
			$('#container').append("<div class='column'></div>");
		}
		for (var i = 1; i <= sides; i++) {
			$(".column").append("<div class='square' style='width: " + size / sides + "px; height: " + size / sides + "px;'></div>");
		}
		$("#size").html(sides);
	} else {
		alert("Please enter a positive integer.");
		change_size();
	}
}
function random_hue() {
	function random_256() {
		return Math.floor(Math.random() * 256);
	}
	return "rgb(" + random_256() + ", " + random_256() + ", " + random_256() + ")";
}

$(document).ready(function() {
	// Initialization
	for (var i = 1; i <= 16; i++) {
		$("#container").append("<div class='column'></div>");
	}
	for (var i = 1; i <= 16; i++) {
		$(".column").append("<div class='square'></div>");
	}
	
	// Changes color on hovering
	$('#container').on('mouseenter', '.square', function() {
		$(this).css({
			"background": random_hue()
		});
	});
	$('#container').on('mouseleave', '.square', function() {
		$(this).css({
			"background": "#ffffff"
		});
	});

	// Implement button functionality
	$('button').on('click', change_size);
});
