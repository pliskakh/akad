//=require jquery.min.js

// to inlude bootstrap plugins add "=" sign below
//=require javascripts/bootstrap/transition.js
//=require javascripts/bootstrap/collapse.js
//=require javascripts/bootstrap/tab.js

// require javascripts/bootstrap.min.js

//=require slick.min.js
//=require isotope.pkgd.min.js
//=require map.js


; (function ($) {

	var worksGrid = $('.ba-portfolio');

	
	$(window).on('load',function(){
		worksGrid.isotope({
			// options
			itemSelector: '.ba-portfolio__item',
			percentPosition: true,
		});

		$('.ba-portfolio-filter').on('click', '[data-filter]', function (e) {
			e.preventDefault();
			var filterValue = $(this).data('filter');
			worksGrid.isotope({ filter: filterValue });
			$('.ba-active[data-filter]').removeClass('ba-active');
			$(this).addClass('ba-active');
		});
	});
		

	$(document).ready(function () {
		var $slider = $('.ba-slider');

		$slider.slick({
			autoplay: true,
			autoplaySpeed: 3000,
			arrows: false,
			dots: true,
			slide: '.ba-slide'
		});
	});

})(jQuery);






















