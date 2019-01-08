/*eslint-env jquery*/

$(document).ready(function(){
    
    /*------------Sticky navigation code below-----------------*/
    
    //based on user scrolling up or down the direction it detects
    $('.js--section-features').waypoint(function(direction){
        //take decision based on direction parameter
        if(direction== "down"){
            /*if the user is scrolling then the class="sticky" gets added to <nav> based on jquery logic belwo*/
            $('nav').addClass('sticky');
        }else{
            $('nav').removeClass('sticky');
        }
    },{
        //this the difference between the section and the appears of the nav
        offset: '60px;'
    });
    

    
    /*------- Scrolling on buttons ----------*/
    
    //on click of I'm hungry btn
    $('.js--scroll-to-plans').click(function(){
        //animate and scroll to top of the js--section-plans with a speed of 1 second
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top},1000);    
    });
    
    
    //on click of show me more
    $('.js-scroll-to-start').click(function(){
        //animate and scroll to top of the js--section-fatures with a speed of 1 second
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top},1000);    
    });
    
    /*------ navigation scrolling smooth css-tricks.com*/
    
    /*select the links element with href element start with # sign and
    if the element exist then scroll*/
    
    $(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });
    
    
    /*-------- animation scroll effects -----------*/
    //on scroll towards the section named js--wp-1
    
    $('.js--wp-1').waypoint(function(direction){
        //add a animated and fadeIn class
        $('.js--wp-1').addClass('animated fadeIn');
    },{
        /*this will control when to display animation*/
        offset: '50%'
    });
    
    $('.js--wp-2').waypoint(function(direction){
        //add a animated and fadeIn class
        $('.js--wp-2').addClass('animated fadeInUp');
    },{
        /*this will control when to display animation*/
        offset: '50%'
    });
    
    $('.js--wp-3').waypoint(function(direction){
        //add a animated and fadeIn class
        $('.js--wp-3').addClass('animated fadeIn');
    },{
        /*this will control when to display animation*/
        offset: '50%'
    });
    
    $('.js--wp-4').waypoint(function(direction){
        //add a animated and pulse class
        $('.js--wp-4').addClass('animated pulse');
    },{
        /*this will control when to display animation*/
        offset: '50%'
    });
    
    /*-----mobile navigation-------*/
    
    $('.js--nav-icon').click(function(){
        //get the main-nav in variable
        var nav = $('.js--main-nav');
//        var icon = $('.js--nav-icon');
//        
//        if(icon.hasClass('"mobile-nav-close'))
//            {
//                icon.add()
//            }
//            
        //open and close the main menu
        nav.slideToggle(200);
    })
	
	
	/*--Maps----*/
	
	var map = new GMaps({
	  div: '.map',
	  lat: 37.3382,
	  lng: -121.8863,
	  zoom: 10
	});
	
//	add marker to the city on a map
	
	map.addMarker({
	  lat: 37.3382,
	  lng: -121.8863,
	  title: 'San Jose'
	  
	});
	
	
	infoWindow: {
  	content: '<p>Our future headquarter San Jose</p>'
	}

	
	
	
});





