var robot = $('#Robot'),
	pLocs = [0, -268, -536, -804, -1072, -1340, -1608, -1876, -2144],
	curFrm = 0,
	lastStep = 0;

skrollr.init({
	beforerender: function(o){
		if (curFrm >= 9) {
			return;
		}
		if (o.curTop > lastStep + 5) {
			robot.css('background-position', pLocs[curFrm++]+ 'px 0px');
			lastStep = o.curTop;
		}
	}
});
