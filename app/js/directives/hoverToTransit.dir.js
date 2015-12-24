module.exports = function(){

	var linker = function(scope, element, attrs) {

		element.hover(
          function () {
            $(this).transition({ scale: 1.3 });
          },
          function () {
            $(this).transition({ scale: 1 });
          }
        ); 
	};

	
	return {
	    restrict: 'AE',
	    replace: false,
	    link: linker  
	};
};