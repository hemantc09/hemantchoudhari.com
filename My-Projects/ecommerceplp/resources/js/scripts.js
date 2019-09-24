$(document).ready(function() {
	
	//reponsive hamburger menu
	$('.js--nav-icon').click(function() {
		//get the main-nav
		var nav = $('.js--main-nav');
		//open and close box
		nav.slideToggle(200);
	});
	
	
//responsive left side refine nav results 
	$('.js--refine-nav li ol').hide();
    $('.js--refine-nav .select-category').click(function(){
        $(this).siblings('ol').slideToggle();
    });
	
//	
//	document.querySelector('.js--filters-results').addEventListener('click',function() {
//		document.querySelector('.refine-nav').style.display='block';
//	});
//	
//	$('.js--filters-results').click(function() {
//		('.refine-results').show();
//	});
	
});