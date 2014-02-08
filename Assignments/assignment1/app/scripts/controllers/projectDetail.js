'use strict';

angular.module('assignment1App')
  .controller('ProjectdetailCtrl', function ($scope, $routeParams) {
  	$scope.pName = 'Project Detail Ctrl';
  	$scope.params = $routeParams;
  	$scope.test = 'test title';
  	$scope.newTest = 'new test';

  	$scope.newData = [
  	{'obj': 'test'}
  	];
  });
