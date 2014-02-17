'use strict';

angular.module('personalProjectApp')
  .controller('SubjectdetailCtrl', function ($scope, $location, $rootScope) {

  			/*
			Subject Detail COntroller

			Dependency
			$firebse, $scope, $rootScope

			general tasks
			1. logout

			init tasks
			1. connect to fire base
			2. grab data on one subject
			3. assign subject vars to scope

			4. rerout if not logged in
		*/

  	console.log("subject detail is running");

/*
 ██████╗██╗     ██╗ ██████╗██╗  ██╗███████╗
██╔════╝██║     ██║██╔════╝██║ ██╔╝██╔════╝
██║     ██║     ██║██║     █████╔╝ ███████╗
██║     ██║     ██║██║     ██╔═██╗ ╚════██║
╚██████╗███████╗██║╚██████╗██║  ██╗███████║
 ╚═════╝╚══════╝╚═╝ ╚═════╝╚═╝  ╚═╝╚══════
*/
  	$scope.swipeItRight = function(){

  		console.log('swiping right');
  		var view = '/subjects/'+$rootScope.userSubjectSelect;
  		$location.path(view);
  	}
  });
