'use strict';

/**
 * @ngdoc function
 * @name hwappApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the hwappApp
 */
angular.module('hwappApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
