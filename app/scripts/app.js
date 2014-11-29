'use strict';

/**
 * @ngdoc overview
 * @name hwappApp
 * @description
 * # hwappApp
 *
 * Main module of the application.
 */
angular
  .module('hwappApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
  // .config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {
  //   $httpProvider.defaults.useXDomain = true;
  //   $httpProvider.defaults.withCredentials = true;
  //   delete $httpProvider.defaults.headers.common["X-Requested-With"];
  //   $httpProvider.defaults.headers.common["Accept"] = "application/json";
  //   $httpProvider.defaults.headers.common["Content-Type"] = "application/json";
  //   }]);
