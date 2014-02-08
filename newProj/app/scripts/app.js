'use strict';

angular.module('newProjApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/landing/landing.html'
        controller: 'MainCtrl'
      })
      .when('/projects', {
        templateUrl: 'views/projects/projects.html',
        controller: 'projectsController'
      })
      .when('/contact', {
        templateUrl:'',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
