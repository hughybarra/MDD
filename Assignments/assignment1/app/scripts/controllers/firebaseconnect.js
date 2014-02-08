'use strict';

angular.module('assignment1App')
  .controller('FirebaseconnectCtrl', function ($scope, $firebase) {
  	console.log('firebase connect running');
  	// tutorial page
  	// https://www.firebase.com/quickstart/angularjs.html
 	var peopleRef = new FireBase("http://personalproj.firebaseIO.com");
	// Automatically syncs everywhere inrealtime
	$scope.people = $firebase(peopleRef);

	console.log($scope);
	console.log($scope.people);
  });
//