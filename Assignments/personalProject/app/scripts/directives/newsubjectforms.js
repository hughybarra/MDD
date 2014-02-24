'use strict';

angular.module('personalProjectApp')
  .directive('newSubjectForms', function () {
    return {
			templateUrl: 'views/directives/newSubjectForms.html',
			restrict: 'E',
			controller: function ($scope, $firebase, $rootScope, $location) {
				// setting scope var for redirect
				$scope.currentPage = $location.$$url;
				console.log($location);

		      	// show instructions on page load
		      	$scope.inputPrompt = true;

		      	$scope.mainArticle = [];

		      	$scope.article = {};

		      	// console.log($rootScope.currentSelection);
		      	var URL = 'https://mddproj.firebaseio.com/'+$location.$$url;
		      	// console.log(URL);
		      	// var URL = 'https://mddproj.firebaseio.com/userSubjects';
		      	$scope.items = $firebase( new Firebase(URL));
		      	//WTF IS REMOTE ITEMS?
				$scope.items.$bind($scope, 'remoteItems');

				// console.log($scope.items);


				$scope.appendToArticle = function(){
					// hide instructions on click
					$scope.inputPrompt = false;

					// THIS LOGIC NEEDS TO BE FIXED

					// typeof(variable) != "undefined" && variable !== null
					if (!$scope.NUSubject.comment || /^\s*$/.test($scope.NUSubject.comment )){
						// console.log('comment broke');
						// error class here
					}else{
						// console.log('comment worekd');

						// append this to end of main article
						$scope.mainArticle.push({
							"type": 'NUSMessage',
							"message": $scope.NUSubject.comment
						})
						$scope.NUSubject.comment = "";
					}
					// THIS LOGIC NEEDS TO BE FIXED
					if (!$scope.NUSubject.webLink || /^\s*$/.test($scope.NUSubject.webLink )){
						// console.log('link broke');
						// error class here
					}else{
						// console.log('link ran');
						//append this to the end of main article
						// console.log($scope.NUSubject.webLink);
						$scope.mainArticle.push({
							"type": 'NUSLink',
							"message": $scope.NUSubject.webLink
						})
						$scope.NUSubject.webLink = '';
					}

					$scope.superAwesomeForm.$setPristine();
				}
				$scope.saveProject = function(){
					console.log('running');
					// check for values inside of object
					// setting the scope variabel to our new object
					// this is probably a horrible way of doing this but i'm still trying to figure out
		      		// how this angular crap works.
					$scope.article.articleTitle = $rootScope.tempVar;
					$scope.article.message = $scope.mainArticle;

					// validate the data. If blank trash the form
					// 3 way bind the variable
					$scope.items.$add($scope.article);

			  		// THERE HAS GOT TO BE A BETTER WAY TO DO THIS CRAP!

			  		$scope.showForm = false;
        			$scope.formTwo = false;
				}
		},
		link: function postLink(scope, element, attrs) {
			// console.log(scope);

		},
    };
  });
