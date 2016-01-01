module.exports = function($interval) {
  return function(options){

        var startTime = 0,
            currentTime = null,
            offset = 0,
            interval = null,
            self = this;

        self.options = options;
        
        if(!self.options.interval){
            self.options.interval = 100;
        }

        self.options.elapsedTime = new Date(0);

        self.running = false;
        
        function pushToLog(lap){
            if(self.options.log !== undefined){
               self.options.log.push(lap); 
            }
        }
         
        self.updateTime = function(){
            currentTime = new Date().getTime();
            var timeElapsed = offset + (currentTime - startTime);
            self.options.elapsedTime.setTime(timeElapsed);
        };

        self.startTimer = function(){
            if(self.running === false){
                startTime = new Date().getTime();
                interval = $interval(self.updateTime,self.options.interval);
                self.running = true;
            }
        };

        self.stopTimer = function(){
            if( self.running === false) {
                return;
            }
            self.updateTime();
            offset = offset + currentTime - startTime;
            pushToLog(currentTime - startTime);
            $interval.cancel(interval);  
            self.running = false;
        };

        self.resetTimer = function(){
          startTime = new Date().getTime();
          self.options.elapsedTime.setTime(0);
          timeElapsed = offset = 0;
        };

        return self;

    };
};