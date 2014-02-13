'use strict';

angular.module('assignment1App')
  .controller('ProjectdetailCtrl',['$scope', '$firebase','$routeParams', function ($scope, $firebase, $routeParams) {
  	 // get project data from fire base using Angular fire

  	 // set the url
  	var URL = 'https://personalproj.firebaseio.com/myprojects/'+ $routeParams.id;
  	// fetch and set scope items
  	$scope.items = $firebase(new Firebase(URL));
  }]);
