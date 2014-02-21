'use strict';

angular.module('personalProjectApp')
  .directive('newSubjectForms', function () {
    return {
      templateUrl: 'views/directives/newSubjectForms.html',
      restrict: 'E',
      controller: function ($scope, $firebase) {
      	// show instructions on page load
      	$scope.inputPrompt = true;

      	// exmple variable
      	$scope.mainArticle = [];

      	var URL = 'https://mddproj.firebaseio.com/userSubjects';
      	$scope.items = $firebase( new Firebase(URL));
      	//WTF IS REMOTE ITEMS?
		$scope.items.$bind($scope, 'remoteItems');

		console.log($scope.items);

		/* delete this when done */



		/* delete this when done */


		$scope.appendToArticle = function(){
			// hide instructions on click
			$scope.inputPrompt = false;

			if (typeof $scope.NUSubject.comment != undefined){
				// append this to end of main article
				$scope.mainArticle.push({
					"type": 'NUSMessage',
					"message": $scope.NUSubject.comment
				})
			}

			if (typeof $scope.NUSubject.link != undefined){
				//append this to the end of main article
				console.log($scope.NUSubject.webLink);
				$scope.mainArticle.push({
					"type": 'NUSLink',
					"message": $scope.NUSubject.webLink
				})
			}


			// empty the input fields
			$scope.NUSubject.comment = '';
			$scope.NUSubject.link = '';

		}
		$scope.saveProject = function(){
			// 3 way bind the variable

			// if blank tarsh the form
		}
      },
      link: function postLink(scope, element, attrs) {

      },
    };
  });
