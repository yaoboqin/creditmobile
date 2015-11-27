define("controllers/productCtrl", function (require) {
	require("/creditmobile/css/??products.css");
    var app = require('js/app');
    // dynamic load services here or add into dependencies of state config
    // require('services/listService');
    app.controller('productCtrl', function($scope, $rootScope) {
        $scope.items = app.get("productService").items();
      	// seajs.use(["zepto", "js/circleProgress"], function($){ 
       //    var c = $(".cycle"),p,id;
       //    for(var i=0; i<c.length; i++){ 
       //      p = c.eq(i).data("percent");
       //      circleProgress({
       //        selector: $(".cycle").eq(i),
       //        progress: p, // default: 100
       //        duration: 500, // default: 1000
       //        color: '#7c2327', // default: 'rgb(52, 145, 204)'
       //        bgColor: '#c0b9a9', // default: 'rgb(230, 230, 230)'
       //        textColor: '#7c2327', // default: 'black'
       //        progressWidth: 0.15, // default: 0.25 (r)
       //        fontScale: 0.5, // default: 0.4 (r)
       //        toFixed: 0  // default: 0
       //    });
       //    }
          
       //  })
    });
});