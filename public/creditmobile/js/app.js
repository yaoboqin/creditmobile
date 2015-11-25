define("js/app", function (require, exports, module) {

    var app = angular.module('app', ['ionic', 'ui.router']);

    // initialze app module for async loader
    asyncLoader.configure(app);

    module.exports = app;
});