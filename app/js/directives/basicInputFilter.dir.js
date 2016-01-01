module.exports = function($filter){

	 var linker = function (scope, element, attrs) {
       

        element.on('input', function(event, combo, selection){
        	 var expression = $(this).text();
        	 expression = scope.filter;
        	 console.log(expression);
             scope.$apply(function(){

                scope.filteredData = {};
                var temp = $filter('filter')(scope.data, expression);
                console.log(temp);
                for( var i =0; i< temp.length; i++){

                    scope.filteredData[temp[i]] = temp[i];
                }
                console.log(scope.filteredData);
             });
        });
    };

    return {
        restrict: 'A',
        link: linker,
        scope: {
            data:'=',
            filteredData:'=',
            filter: '='
        }
    };
};