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
});
