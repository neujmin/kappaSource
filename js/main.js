jQuery(document).ready(function ($) {

	/* GLOBAL VARIABLES */
	
	wh = $(window).height();
	ww = $(window).width();

	$( window ).resize(function() {
		wh = $(window).height();
		ww = $(window).width();		
	});


  // MENU

  // $('.toggle-button').click(function () {
  //   $('.entry-picture .gradient, header nav').toggleClass('toggled');
  // });

  // SLIDER

  // var slider = jQuery('.bxslider').bxSlider({
  //   infiniteLoop : false,
  //   preloadImages: 'visible',
  //   pager: false,
  //   mode: 'fade',
  //   easing: 'ease-in-out',
  //   controls: true,
  //   hideControlOnEnd: true,
  //   speed: 600
  // });

  // $('.open-slider').css('opacity', '0');
  // setTimeout(function() {
  //     $('.open-slider').css('opacity', '1');
  //   }, 1500);    


  // $('.open-slider').click(function() {
  //   $('.header-container, .arc-wrapper, .background-wrapper').toggleClass('opened');
  //   setTimeout(function() {
  //     $('.arc-wrapper, .background-wrapper').toggleClass('remove');
  //     $('.leave-picture, .footer-container').toggleClass('remove');
  //   }, 250);    
  //   $('.gradient').css('opacity', '0');
  //   $('.bx-prev, .bx-next').css('z-index', '102');
  //   $('.open-slider').css('opacity', '0');
  //   $('.close-slider').css('opacity', '1');
  //   $('.bx-prev, .bx-next').css('opacity', '1');
  //   setTimeout(function() {
  //     $(' .open-slider').toggleClass('remove');
  //   }, 250);
  // });

  // $('.close-slider').click(function() {
  //   slider.goToSlide(0);
  //   $(' .open-slider').toggleClass('remove');
  //   $('.bx-prev, .bx-next').css('z-index', '1');
  //   $('.bx-prev, .bx-next').css('opacity', '0');
  //   $('.close-slider').css('opacity', '0');
  //   $('.arc-wrapper, .background-wrapper').toggleClass('remove');
  //   setTimeout(function() {
  //       $('.header-container, .arc-wrapper, .background-wrapper').toggleClass('opened');
  //     }, 250);
  //   $('.leave-picture, .footer-container').toggleClass('remove');
  //   $('.gradient, .open-slider').css('opacity', '1');
  // });


  // RESTAURANT

  // RESTAURANT MENU

  // var restaurantMenu = jQuery('.restaurant-menu').bxSlider({
  //   infiniteLoop : false,
  //   preloadImages: 'visible',
  //   pagerCustom: '.restaurant-menu-pager',
  //   mode: 'fade',
  //   easing: 'ease-in-out',
  //   controls: true,
  //   hideControlOnEnd: true,
  //   speed: 600
  // });

  // OFFER-WEDDING

  // IFRAME SCROLL BLOCK

  // $('.scroll-block').click(function () {
  //   $(this).fadeOut();
  // });



  // SCROLL 

  // $(function(){
  //   $('.wedding-menu-page').jScrollPane();
  // });

  // var scroll = $('.wedding-menu-page').jScrollPane();




  // CATEGORY

  // if ($(".category").length > 0) {

  //   $(".text-image-block").each(function () {
  //     var imgSrc = $("img:not(.emoji)", this).attr('src');
  //     var img = '<img src="'+imgSrc+'">';
  //     $("img:not(.emoji)", this).remove();
  //     $(".image", this).html(img);

  //     $(".image", this).click(function () {
  //       $(this).toggleClass("zoom");
  //     });
  //   });
    
  // };



	// SMOOTH SCROLL TOP
  // $(function() {
  //     $('a.backtop').bind('click',function(event){
  //         var jQueryanchor = $(this);
  //         $('html, body').stop().animate({
  //             scrollTop: $(jQueryanchor.attr('href')).offset().top
  //         }, 900,'easeInOutExpo');
  //         event.preventDefault();
  //     });
  // });

  // $('.backtop').hide();
  // $(window).scroll(function () {
  //   if($(this).scrollTop() >= 600) {
  //       $('.backtop').fadeIn(300);
  //   } else {
  //       $('.backtop').fadeOut(300);
  //   }
  // });

  


}); // (document).ready