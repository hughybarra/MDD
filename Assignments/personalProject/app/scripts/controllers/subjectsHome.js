'use strict';

angular.module('personalProjectApp')
	.controller('SubjectsHomeCtrl', ['$scope', '$location', '$rootScope', '$firebase', function ($scope, $location, $rootScope, $firebase) {

		// setting scope new sub to show original list and hide form
		$scope.newSub = false;

		var URL = 'https://mddproj.firebaseio.com/subjects';

		$scope.items = $firebase( new Firebase(URL));
		//WTF IS REMOTE ITEMS?
		$scope.items.$bind($scope, 'remoteItems');



/*
 ██████╗██╗     ██╗ ██████╗██╗  ██╗███████╗
██╔════╝██║     ██║██╔════╝██║ ██╔╝██╔════╝
██║     ██║     ██║██║     █████╔╝ ███████╗
██║     ██║     ██║██║     ██╔═██╗ ╚════██║
╚██████╗███████╗██║╚██████╗██║  ██╗███████║
 ╚═════╝╚══════╝╚═╝ ╚═════╝╚═╝  ╚═╝╚══════
*/

		// Add subject
		$scope.addSubject = function(){
			// This button swaps the subjects and form hidden states
			console.log("clicked");
			$scope.newSub = true;
		};
		// back button
		$scope.backLink = function(){
			console.log('back');
			$scope.newSub = false;
		};
		// Submit new subject
		$scope.submitNewSubject = function(){
			console.log('subject clicked');


			var url = 'https://mddproj.firebaseio.com/subjects';

			$scope.subjectsHome = $firebase(new Firebase(url));

			$scope.subjectsHome.$add($scope.mainSubjects);

			$scope.subjectsHome = null;
			// swap back to view mode
			// $scope.newSub = false;
		};

		// subject click function
		$scope.subjectClicked = function(){
			console.log('subject clicked');
			console.log(this.$id);
			console.log($location);

			var view = "/subjects/"+this.$id
			$rootScope.currentSelection = view;
			$location.path(view);

		};
  }]);
