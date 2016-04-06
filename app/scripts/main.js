/*global $:true*/
'use strict';
$(function(){
  $(window).on('scroll.sticky', function(){
    console.log('triggered', $(window).scrollTop(), this);
    if ($(window).scrollTop() > 200) {
      console.log('in', $('.navbar-header'));
			$('.navbar-header').addClass('hovering');
		} else {
      $('.navbar-header').removeClass('hovering');
    }
  });

  function showImages(el) {
          var windowHeight = $( window ).height();
          $(el).each(function(){
              var thisPos = $(this).offset().top;

              var topOfWindow = $(window).scrollTop();
              if (topOfWindow + windowHeight - 200 > thisPos ) {
                  $(this).addClass('fadeIn');
              } else {
                  $(this).removeClass('fadeIn');
              }
          });
      }

      // if the image in the window of browser when the page is loaded, show that image
      showImages('.block');


      // if the image in the window of browser when scrolling the page, show that image
      $(window).scroll(function() {
              showImages('.block');
      });

      // function hideImages(el) {
      //     var windowHeight = jQuery( window ).height();
      //     $(el).each(function(){
      //         var thisPos = $(this).offset().top;
      //
      //         var topOfWindow = $(window).scrollTop();
      //         if (topOfWindow + windowHeight - 900 > thisPos ) {
      //             $(this).addClass('fadeOut');
      //         }
      //     });
      // }


});
