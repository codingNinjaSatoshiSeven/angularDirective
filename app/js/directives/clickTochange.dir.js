module.exports = function(){
	return {
	    restrict: 'AE',
	    replace: true,
	    template: '<p style="background-color:{{color}}; width: 50px; height: 50px">',
	    link: function(scope, elem, attrs) {
	      elem.bind('click', function() {
	        
	        scope.$apply(function() {
	            var index = Math.round(Math.random()*(scope.color.length-1));
	            console.log('index is ', index);
	            scope.color = scope.colors[index];
	        });
	      });
	    }
	};
};