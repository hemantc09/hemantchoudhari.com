$(document).ready(function() {
	
	//reponsive hamburger menu
	$('.js--nav-icon').click(function() {
		//get the main-nav
		var nav = $('.js--main-nav');
		//open and close box
		nav.slideToggle(200);
	});
});