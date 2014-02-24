'use strict';

angular.module('learnAppApp')
.controller('ArticledetailCtrl', ['$scope', '$routeParams', '$firebase', '$location', function ($scope, $routeParams, $firebase, $location) {
	console.log($routeParams);
	console.log($location.$$path);

	var url = 'https://mddproj.firebaseio.com'+$location.$$path;
	$scope.items = $firebase( new Firebase(url));

}]);
