// var zombie = $('#zombie'),
// 	pLocs = [0, -250, -500, -750, -1000, -1250, -1500],
// 	curFrm = 0,
// 	lastStep = 0,

// 	animationCycle, backPosy;

var robot = $('#Robot'),
	pLocs = [0, -268, -536, -804, -1072, -1340, -1608, -1876, -2144],
	curFrm = 0,
	lastStep = 0;

skrollr.init({
	beforerender: function(o){
		if (curFrm >= 9) {
			return;
		}
		if (o.curTop > lastStep + 2) {
			// if(curFrm>=9){curFrm=0;}
			robot.css('background-position', pLocs[curFrm++]+ 'px 0px');
			lastStep = o.curTop;
		// } else if (o.curTop < lastStep - 2){
		// 	// if (curFrm<=-1){curFrm=9;}
		// 	robot.css('background-position', pLocs[curFrm--] + 'px 0px');
		// 	lastStep = o.curTop;
		}
	}
});