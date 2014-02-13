'use strict';

angular.module('assignment1App')
  .controller('AddprojCtrl', ['$scope', '$firebase', function ($scope, $firebase) {
  	/*
		This controller connects to the fire base using angular fire
		and controls all add project functionality
  	*/

  	// declare new url pointing at firebase project location
  	var url = 'https://personalproj.firebaseio.com/myprojects';
  	// set scope varaible to new firebase object
  	$scope.projects = $firebase( new Firebase(url));

  	$scope.submitNewProject = function(){
  		// Form Validation

  		// on submit click add a new child to firebase.
 		$scope.projects.$add($scope.proj);
 		// reset the form
 		$scope.proj = null;

  	}

  }]);
