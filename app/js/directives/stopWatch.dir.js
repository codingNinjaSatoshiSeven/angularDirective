module.exports = function(StopWatchFactory){

	 return {
             restrict: 'EA',
             scope: true,
             compile: function(tElem, tAttrs){
               if (!tAttrs.options){
                      throw new Error('Must Pass an options object from the Controller For the Stopwatch to Work Correctly.');
               }
               
               return function(scope, elem, attrs){   

                 var stopwatchService = new StopWatchFactory(scope[attrs.options]);
                 
                 scope.startTimer = stopwatchService.startTimer; 
                 scope.stopTimer = stopwatchService.stopTimer;
                 scope.resetTimer = stopwatchService.resetTimer;

                 scope.$on('$destroy', function(node){
                   stopwatchService.cancelTimer(); 
                 });
                 
               };
            }
         };
};