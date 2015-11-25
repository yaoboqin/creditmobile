define("controllers/listCtrl", function (require) {
    var app = require('js/app');
    // dynamic load services here or add into dependencies of state config
    // require('services/listService');
    app.controller('listCtrl', function ($scope, $rootScope) {
        $scope.items = app.get('listService').list();
    });
});