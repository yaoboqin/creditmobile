define("controllers/tabCtrl", function (require) {

    var app = require('js/app');
    // dynamic load services here or add into dependencies of state config
    // require('services/listService');
    app.controller('tabCtrl', function($scope, $rootScope) {
    	 $scope.$on('$stateChangeSuccess', function(evt, next, current) {
            if(next.name=="tabs.home" || next.name=="tabs.product"){ 

                seajs.use(["zepto", "js/circleProgress"], function($){ 
                  function drawCycle(){ 
                    var c = $(".cycle"),p,id;
                      for(var i=0; i<c.length; i++){ 
                        p = c.eq(i).data("percent");
                        circleProgress({
                          selector: $(".cycle").eq(i),
                          progress: p, // default: 100
                          duration: 500, // default: 1000
                          color: '#7c2327', // default: 'rgb(52, 145, 204)'
                          bgColor: '#c0b9a9', // default: 'rgb(230, 230, 230)'
                          textColor: '#7c2327', // default: 'black'
                          progressWidth: 0.15, // default: 0.25 (r)
                          fontScale: 0.5, // default: 0.4 (r)
                          toFixed: 0  // default: 0
                        });
                      }
                  }

                  drawCycle();
                  
                })
            }
       });
    })
});