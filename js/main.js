// Smooth scrolling
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 600);
        return false;
      }
    }
  });
});

// Set svg to width and height of window
var svg = $('#svg').find('svg')[0];
svg.setAttribute('width',  $(window).width() + 'px');
svg.setAttribute('height',  $(window).height() + 'px');

// Stop judging me
$( window ).resize(function() {
svg.setAttribute('width',  $(window).width() + 'px');
});