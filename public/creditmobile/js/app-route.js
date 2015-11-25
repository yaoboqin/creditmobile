define("js/app-route", function (require) {
    var app = require('js/app');

    app.run(['$state', '$stateParams', '$rootScope', function ($state, $stateParams, $rootScope) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    }]);

    app.config(['$stateProvider', '$urlRouterProvider', '$ionicConfigProvider', function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

        $ionicConfigProvider.platform.android.navBar.alignTitle('center'); 
        $ionicConfigProvider.platform.android.tabs.position('bottom'); 

        $urlRouterProvider.otherwise('/tab/home');

        $stateProvider
            .state('list', {
                url: '/list',
                templateUrl: 'creditmobile/tpl/list.html',
                controllerUrl: 'controllers/listCtrl',
                controller: 'listCtrl',
                dependencies: ['services/listService']
            })
            .state('tabs', {
              url: "/tab",
              abstract: true,
              templateUrl: "creditmobile/tpl/tabs.html"
            })
            .state('tabs.home', {
              url: "/home",
              views: {
                'home-tab': {
                  templateUrl: "creditmobile/tpl/home.html",
                  controllerUrl: 'controllers/homeCtrl',
                  controller: 'homeCtrl'
                }
              }
            })
            .state('tabs.facts', {
              url: "/facts",
              views: {
                'home-tab': {
                  templateUrl: "creditmobile/tpl/facts.html"
                }
              }
            })
            .state('tabs.facts2', {
              url: "/facts2",
              views: {
                'home-tab': {
                  templateUrl: "creditmobile/tpl/facts2.html"
                }
              }
            })
            .state('tabs.account', {
              url: "/account",
              views: {
                'account-tab': {
                  templateUrl: "creditmobile/tpl/account.html"
                }
              }
            })
            .state('tabs.product', {
              url: "/product",
              views: {
                'product-tab': {
                  templateUrl: "creditmobile/tpl/product.html"
                }
              }
            })
            .state('tabs.more', {
              url: "/more",
              views: {
                'more-tab': {
                  templateUrl: "creditmobile/tpl/more.html"
                }
              }
            });
    }]);
});