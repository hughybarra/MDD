'use strict';

angular.module('learnAppApp')
.controller('LoginCtrl', [ '$scope', '$rootScope', function ($scope, $rootScope) {

	// clicks
	$scope.attemptLogin = function(){
		$rootScope.loginObj.$login('facebook');
		console.log($rootScope.loginObj);
	};
}]);
