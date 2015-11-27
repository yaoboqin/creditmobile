define("controllers/homeCtrl", function (require) {
	require("/creditmobile/css/??home.css,products.css");
    var app = require('js/app');
    // dynamic load services here or add into dependencies of state config
    // require('services/listService');
    app.controller('homeCtrl', function($scope, $rootScope) {
        $scope.items = app.get("productService").items();
    });
});