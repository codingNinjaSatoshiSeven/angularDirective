module.exports = function(){

	var linker = function(scope, element, attrs) {
		var direction = attrs.direction;

		element.bind('click', move);
	};

	var move = function(){
		console.log('moving');
		console.log( $( this).text() );
		// set position to absolute or fixed then the animate will work, else not
		$(this).css({position: 'absolute'}); 
		$(this).animate({top: '+=150'});
	};

	return {
	    restrict: 'AE',
	    replace: false,
	    scope: {
	    	direction : '@'
	    },
	    link: linker  
	};
};