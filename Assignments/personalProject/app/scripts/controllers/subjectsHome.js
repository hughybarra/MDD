'use strict';

angular.module('personalProjectApp')
	.controller('SubjectsHomeCtrl', function ($scope) {
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
			2. grab all subject vars
			3. assign subject vars to scope
			4. get a count of all content within subjects
			5. assign counter to scope

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
		$scope.subjects = [
		{subjectName: "Python", contributers: 5},
		{subjectName: "Cold Fusion", contributers: 3},
		{subjectName: "PHP", contributers: 7 },
		{subjectName: "Javascript", contributers: 3},
		{subjectName: "AngularJS", contributers: 5},
		{subjectName: "Jquery", contributers: 8 },
		{subjectName: "Jquery UI", contributers: 9},
		{subjectName: "Actionscript", contributers: 10 },
		{subjectName: "NodeJS", contributers: 20},
		];

		// Add subject
		$scope.addSubject = function(){
			console.log("clicked");

		};
  });
