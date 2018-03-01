$(function() {

	$(".slider__wr").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		draggable: false,
		arrows: true,
		fade: true,
		autoplay: true,
		autoplaySpeed: 4000,
		prevArrow: '<button class="slick-prev slider_prev"><svg aria-hidden="true" data-prefix="fas" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="svg-inline--fa fa-chevron-left fa-w-10"><path fill="currentColor" d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z" class="svg_path"></path></svg></button>',
		nextArrow: '<button class="slick-next slider_next"><svg aria-hidden="true" data-prefix="fas" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="svg-inline--fa fa-chevron-right fa-w-10"><path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" class="svg_path"></path></svg></button>',
	});

	$('.slider__item').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		mainClass: 'mfp-img-mobile',
		image: {
			verticalFit: true
		}
	});

	$(".js_modal").magnificPopup({
		type: 'inline',
		mainClass: 'mfp-fade'
	});

	$(".news__wr").stick_in_parent({
		offset_top: 30
	});

	$(".mobile__menu").on("click", function(e) {
		e.preventDefault();
		$(".nav__wr").addClass("nav_active");
	});

	$(".mobile__close, .nav__link").on("click", function(e) {
		e.stopPropagation();
		$(".nav__wr").removeClass("nav_active");
	});

	$(".news__item, .news__archive").animated("fadeInLeft");

});
