 /* ======================================
-----------------------------------------
    Real Estate | HTML Template
    Version: 1.0
 ---------------------------------------
 =======================================*/


'use strict';


$(window).on('load', function() {
    /*------------------
        Preloder
    --------------------*/
    $(".loader").fadeOut();
    $("#preloder").delay(400).fadeOut("slow");

});

(function($) {
    /*------------------
        Design Slider
    --------------------*/

	/*------------------
		Features Slider
	--------------------*/
	$('.features-slider').owlCarousel({
		nav: true,
		dots:false,
		margin: 30,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		responsive : {
			0 : {
				items: 1,
			},
			576 : {
				items: 2,
				
			},
			768 : {
				items: 3,
			},
			991 : {
				items: 4,
			},
			1200 : {
				items: 5,
			}
		}
	});
	
	/*------------------
		About Slider
	--------------------*/
	$('.about-slider').owlCarousel({
		loop: true,
		nav: true,
		dots:false,
		autoplay: true,
		items: 1,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
	});

	/*------------------------------
		Property Features Slider
	-------------------------------*/
	$('.property-features-slider').owlCarousel({
		nav: true,
		dots:false,
		items: 3,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		margin: 30,
		responsive : {
			0 : {
				items: 1,
				margin: 40,
			},
			576 : {
				items: 2,
				margin: 20,
			},
			768 : {
				items: 3,
				margin: 20,
			},
			991 : {
				items: 3,
				margin: 30,
			}
		}
	});
    
    
    
})(jQuery);
