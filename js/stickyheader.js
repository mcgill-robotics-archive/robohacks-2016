$(function() {
  // init ScrollMagic Controller
  var controller = new ScrollMagic.Controller();

  // Scene Handler
  var scene = new ScrollMagic.Scene({
    triggerElement: "#header", // point of execution
    duration: 1200, // pin element for this duration
    triggerHook: 0, // don't trigger until #pinned-trigger1 hits the top of the viewport
    reverse: true // allows the effect to trigger when scrolled in the reverse direction
  })
  .setPin("#header"); // the element we want to pin
  // Add Scenes to ScrollMagic Controller
  controller.addScene([
    scene,
  ]);
});
