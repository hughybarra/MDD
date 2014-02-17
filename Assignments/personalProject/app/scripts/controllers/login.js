'use strict';

angular.module('personalProjectApp')
	.controller('LoginCtrl', [ '$scope', '$rootScope', '$location', function ($scope, $rootScope, $location) {
		/*
			Login Controller

			Dependency
			Firebse, scope, angularfire, location

			tasks
			1. connect to fire base
			2. authenticate user
			3. redirect / route user to logged in status
			4. Re route if not logged in
		*/

		if ($rootScope.loginObj.user){
		// send to home page
		view = '/home';
		$location.path(view);
		}

/*
 ██████╗██╗     ██╗ ██████╗██╗  ██╗███████╗
██╔════╝██║     ██║██╔════╝██║ ██╔╝██╔════╝
██║     ██║     ██║██║     █████╔╝ ███████╗
██║     ██║     ██║██║     ██╔═██╗ ╚════██║
╚██████╗███████╗██║╚██████╗██║  ██╗███████║
 ╚═════╝╚══════╝╚═╝ ╚═════╝╚═╝  ╚═╝╚══════
*/
		$scope.attemptLogin = function (){
			console.log('login clicked');
			$rootScope.loginObj.$login('facebook')
			$location.path('/home');
		}
	}]);



