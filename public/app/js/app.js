// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('HHR', ['ionic', 'HHR.controllers', 'HHR.routes', 'HHR.services', 'HHR.filters'])

.config(['$ionicConfigProvider','$interpolateProvider', function($ionicConfigProvider, $interpolateProvider) {

    // $ionicConfigProvider.scrolling.jsScrolling(false);
    // $ionicConfigProvider.views.transition('android');
    // $ionicConfigProvider.views.maxCache(0);
    // $interpolateProvider.startSymbol('<%');
    // $interpolateProvider.startSymbol('%>');
}])

.run(function($ionicPlatform) {
});
