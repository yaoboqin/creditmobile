seajs.use(["angular", "angular-animate", "angular-sanitize", "angular-ui-router", "angular-async-loader", "ionic", "ionic-angular", "js/app-route"], function () {
    angular.element(document).ready(function () {
        angular.bootstrap(document, ['app']);
        angular.element(document).find('body').attr('ng-app', 'app');
    });
});