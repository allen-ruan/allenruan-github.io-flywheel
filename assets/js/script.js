$(document).ready(function()  {
	$("#wrapper").fullpage();
	
	// jQuery Function Number 1
	$("#main-title").fadeIn(1000)
	$("#names").fadeIn(2500)

	// jQuery Function Number 2
	$("#sidebar > a").hover(function() {
		// jQuery Function Number 3
		$(this).css("background-color", "#74787A")}, function() {
		$(this).css("background-color", "#F7F5F2")
	})

	// jQuery Function Number 4
	$("#page_home").click(function() {
		// jQuery Function Number 5
		$("#page_idea").removeClass("highlight")
		$("#page_build").removeClass("highlight")
		$("#page_test").removeClass("highlight")
		// jQuery Function Number 6
		$(this).addClass("highlight")
	})
	
	$("#page_idea").click(function() {
		$("#page_home").removeClass("highlight")
		$("#page_build").removeClass("highlight")
		$("#page_test").removeClass("highlight")
		$(this).addClass("highlight")
	})

	$("#page_build").click(function() {
		$("#page_idea").removeClass("highlight")
		$("#page_home").removeClass("highlight")
		$("#page_test").removeClass("highlight")
		$(this).addClass("highlight")
	})

	$("#page_test").click(function() {
		$("#page_idea").removeClass("highlight")
		$("#page_build").removeClass("highlight")
		$("#page_home").removeClass("highlight")
		$(this).addClass("highlight")
	})



})