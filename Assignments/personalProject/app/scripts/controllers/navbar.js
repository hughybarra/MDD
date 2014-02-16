'use strict';

angular.module('personalProjectApp')
  .controller('NavbarCtrl', function ($scope, $rootScope, $location) {
  	console.log('navbar controller running');
  			/*
			Nav bar Controller

			Dependency
			$scope, $rootScope, $location

			general tasks
			1. logout
			2. on logout if no entries were made to new subject remove new subject
			from list.

			init tasks
			1. click function on options button
			2. option to logout
			3. logout function

		*/

/*
 ██████╗██╗     ██╗ ██████╗██╗  ██╗███████╗
██╔════╝██║     ██║██╔════╝██║ ██╔╝██╔════╝
██║     ██║     ██║██║     █████╔╝ ███████╗
██║     ██║     ██║██║     ██╔═██╗ ╚════██║
╚██████╗███████╗██║╚██████╗██║  ██╗███████║
 ╚═════╝╚══════╝╚═╝ ╚═════╝╚═╝  ╚═╝╚══════
*/
  	$scope.navOptions = function(){
  		console.log('nav options clicked');
  	}
  });
