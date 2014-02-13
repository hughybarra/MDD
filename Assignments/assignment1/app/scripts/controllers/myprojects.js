'use strict';

angular.module('assignment1App')
  .controller('MyprojectsCtrl', function ($scope, $firebase) {
  	// get project data from fire base using Angular fire

  	// set the url
  	var URL = 'https://personalproj.firebaseio.com/myprojects';
  	// fetch and set scope items
  	$scope.items = $firebase(new Firebase(URL));

  	$scope.items.$bind($scope, 'remoteItems');
  });
