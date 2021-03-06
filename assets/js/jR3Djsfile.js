$(document).ready(function(){
	var slideImages = [ {src: '../img/page/ctf-c-1.jpg'},
	              		{src: '../img/page/ctf-c-2.jpg'},
	              		{src: '../img/page/ctf-c-3.jpg'},
	              		{src: '../img/page/ctf-c-4.jpg'},
	              		{src: '../img/page/ctf-c-5.jpg'} ]
	//var jR3DCarousel;
	
	jR3DCarousel = $('.jR3DCarouselGallery').jR3DCarousel({
		width: 770, 		/* largest allowed width */
		height: 400, 		/* largest allowed height */
		slides: slideImages /* array of images source */
	});
	
	var carouselCustomeTemplateProps =  {
	 		  width: 770, 				/* largest allowed width */
			  height: 400, 				/* largest allowed height */
			  slideLayout : 'fill',     /* "contain" (fit according to aspect ratio), "fill" (stretches object to fill) and "cover" (overflows box but maintains ratio) */
			  animation: 'slide3D', 	/* slide | scroll | fade | zoomInSlide | zoomInScroll */
			  animationCurve: 'ease',
			  animationDuration: 1900,
			  animationInterval: 2000,
			  slideClass: 'jR3DCarouselCustomSlide',
			  autoplay: true,
			  controls: true,			/* control buttons */
			  navigation: ''			/* circles | squares | '' */,
			  perspective: 2200,
			  rotationDirection: 'ltr',
			  onSlideShow: slideShownCallback
				  
		}
	function slideShownCallback($slide){
		console.log("Slide shown: ", $slide.find('img').attr('src'))
	}

	jR3DCarouselCustomeTemplate = $('.jR3DCarouselGalleryCustomeTemplate').jR3DCarousel(carouselCustomeTemplateProps);

  })