$('.team-carousel').slick({
	arrows: false,
    // autoplaySpeed: 1400, 
	autoplay: true,
	mobileFirst: true,
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
			},
		},
        {
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
                slidesToScroll: 1,
			},
		},
	],
})

// cz 2 film 130
