'use strict';

angular.module('newProjApp')
  .controller('MainCtrl', function ($scope) {

  })
  .controller('projectsCntroller', function($scope){
  	$scope.projects = [
  		{
  			'project_name': 'project name',
  			'project_link': 'project link',
  			'about_project': 'about project'
  		},
  	];
  });

