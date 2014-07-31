'use strict';

/**
 * @ngdoc function
 * @name mkAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the mkAppApp
 */
angular.module('mkAppApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
