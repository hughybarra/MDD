

var App = angular.module('chatApp', ['ngRoute']);

App.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl : 'page.tpl',
			controller: 'ProjectList'
		})
		.when ('/detail/:id',{
			templateUrl: 'detail.tpl',
			controller: 'ProjectDetail'
		})
});

App.controller('ProjectList', function($scope){
	$scope.actionTime = function(){
		console.log('user', $scope.user);
	}
});

App.controller('ProjectDetail', function($scope, $routeParams){
	$scope.idDisplay = $routeParams.id;
	console.log('loading Detail', $routeParams.id);
});