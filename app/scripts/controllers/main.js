'use strict';

/**
 * @ngdoc function
 * @name mkAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mkAppApp
 */
angular.module('mkAppApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
