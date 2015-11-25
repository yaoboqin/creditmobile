define(function (require) {
  var app = require('js/app');

  app.controller('appCtrl', function($scope, $rootScope){ 
    $scope.test = "aaa";
  })

  app.controller('loginCtrl', function($scope, $location, $rootScope, $ionicPopup) {

  })

  app.controller('MyController', function($scope, $http) {
    $scope.items = [1,2,3];
    $scope.test = "aaa";
    // $scope.doRefresh = function() {
    //   $http.post('/new-items')
    //    .success(function(newItems) {
    //      $scope.items = newItems;
    //    })
    //    .finally(function() {
    //      // 停止广播ion-refresher
    //      $scope.$broadcast('scroll.refreshComplete');
    //    });
  });

});