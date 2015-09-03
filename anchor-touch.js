// Overlays
var SELECTOR = $('.anchor-touch');

var overlayBindings = function(){
	SELECTOR.on('touch mouseover hover click', function(e){
		e.preventDefault();			
	});
};	
overlayBindings();

SELECTOR.on('transitionend webkitTransitionEnd oTransitionEnd', function(e){
	overlayBindings();
	$(this).unbind('touch mouseover hover click');
	console.log('unbind');
});