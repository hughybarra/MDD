'use strict';
// yo angular:directive navdir

App.directive('optionsBar', function(){
  return {
    controller: function($scope){

    	$scope.someFunc = function(){
    		console.log("some function ran");
    	}

    },
    restrict: 'E',
    templateUrl: 'views/directives/optionsBar.html'
  }
})