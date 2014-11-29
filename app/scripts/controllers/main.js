'use strict';

/**
 * @ngdoc function
 * @name hwappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hwappApp
 */
angular.module('hwappApp')
  .controller('MainCtrl', function ($http, $scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.apiKey="pXRZzQ01xRQp1xB1kwaKmkAU";
    $scope.encodedStr = "";
    $scope.getB64Encode = function (strToEncode) {
      var authdata = btoa(strToEncode + ":");
      $http.defaults.headers.common.Authorization = 'Basic ' + authdata;
      $scope.myHeaders = $http.defaults.headers;
      $scope.encodedStr = authdata;
    }

    $scope.getProducts = function () {
      // $http.defaults.headers.get.Authorization = 'Basic cFhSWnpRMDF4UlFwMXhCMWt3YUtta0FVOg==';
      // Simple GET request example :
      $http.get('https://app.highwire.com/api/products.json').
      success(function(data, status, headers, config) {
        // this callback will be called asynchronously
        // when the response is available
        $scope.productData = data;
      }).
      error(function(data, status, headers, config) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        console.log(headers);
        $scope.productData = 'failed';
      });


    }
  });
