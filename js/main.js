var doneTransformation = false;

// Smooth scrolling
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length && doneTransformation == false) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1700);
        return false;
      }
      else
      {
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

// Sticky header
$(function() {
  // init ScrollMagic Controller
  var controller = new ScrollMagic.Controller();

  // Scene Handler
  var scene = new ScrollMagic.Scene({
    triggerElement: "#header", // point of execution
    duration: 2100, // pin element for this duration
    triggerHook: 0, // don't trigger until #pinned-trigger1 hits the top of the viewport
    reverse: true // allows the effect to trigger when scrolled in the reverse direction
  })
  .setPin("#header"); // the element we want to pin
  // Add Scenes to ScrollMagic Controller
  controller.addScene([
    scene,
  ]);

  // Transition
  var robot = $('#Robot2'),
  	// pLocs = [0, -268, -536, -804, -1072, -1340, -1608, -1876, -2144],
    pLocs = [0, -247, -494, -741, -988, -1235, -1482, -1729, -1976, -2223],
  	curFrm = 0,
  	lastStep = 0;

  skrollr.init({
  	beforerender: function(o){
  		//  if (curFrm >= 10) {
      //  doneTransformation = true;
  		// 	return;
  		// }
  		if (o.curTop > lastStep + 150) {
        if(curFrm < 9){
          curFrm++;
        }
        var nextFrame = curFrm;
  			robot.css('background-position', pLocs[nextFrame] + 'px 0px');
  			lastStep = o.curTop;
  		}else if(o.curTop < lastStep - 150){
        // if(curFrm<=0){curFrm=9;}
        if(curFrm > 0){
          curFrm--;
        }
        var prevFrame = curFrm;
        robot.css('background-position', pLocs[prevFrame] + 'px 0px');
        lastStep = o.curTop;
      }
  	}
  });
});
