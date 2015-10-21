$("document").ready(function() {
	console.log("ready!")
})

function function1() {
	$("#important-events > ul > li:even").css("background-color", "yellow");
}

function function2() {
	$("body").find("*").each(function() {
		$(this).css("background-color", "white");
	})
	var elementCount = $("body").find("*").length
	console.log(elementCount)
}

function function3() {
	$('*:empty').text("Filled Empties");
}

function function4() {
	$("#empty").hide();
}

function function5() {
	$("#unimportant-events").hide();
}

function function6() {
	$("unimportant-events").show();
}
