'use strict';

angular.module('personalProjectApp')
	.controller('SubjectsHomeCtrl', ['$scope', '$location', '$rootScope', '$firebase', function ($scope, $location, $rootScope, $firebase) {
		/*
			Subject Home Controller


			Dependency
			Firebse, scope

			general tasks
			1. logout
			2. on logout if no entries were made to new subject remove new subject
			from list.

			init tasks
			1. connect to fire base
			2. set the url
			3. fetch and set scope items


			4. assign subject vars to scope
			5. get a count of all content within subjects
			6. assign counter to scope
			7. rerout if not logged in

			add a subject
			1. on click pop up a form with a single text input for subject name
			2. on submit send to surver and update server.
			3. callback function should auto update on init tasks


			on subject click
			1. subject click should redirect to specific subject page

			html
			1. loop through subjects
			2. Assign directives to subjects
		*/

		// setting scope new sub to show original list and hide form
		$scope.newSub = false;

		var URL = 'https://mddproj.firebaseio.com/subjectsHome';

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

			/*
			connect to firebase using angular fire
			1. declare firebase project url
			2. set scope var to new fire base object
			3. form validation
			4. add child to firebase
			5. reset the form
			*/


			var url = 'https://mddproj.firebaseio.com/subjectsHome';

			$scope.subjectsHome = $firebase(new Firebase(url));

			$scope.subjectsHome.$add($scope.mainSubjects);

			$scope.subjectsHome = null;
			// swap back to view mode
			$scope.newSub = false;
		};

		// subject click function
		$scope.subjectClicked = function(){
			console.log('subject clicked');
			console.log(this.$id);
			console.log($location);

			var view = "/subjects/"+this.$id
			$location.path(view);
		};
  }]);
