'use strict';

angular.module('personalProjectApp')
  .controller('UsersubjectsCtrl', function ($scope, $routeParams) {
  	$scope.subjects = [
  	{title: "Python Basics ",
  	author: "Hugo Ybarra",
  	upVotes: 20,
  	downVotes: 1},

  	{title: "Intro To pythong ",
  	author: "Hugo Ybarra",
  	upVotes: 3,
  	downVotes: 5},

  	{title: "simple game",
  	author: "Hugo Ybarra",
  	upVotes: 200,
  	downVotes: ""},

  	{title: "",
  	author: "",
  	upVotes: "",
  	downVotes: ""}
  	];
  });
