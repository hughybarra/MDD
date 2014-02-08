'use strict';

angular.module('assignment1App', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'firebase'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/landing/landing.html',
        controller: 'MainCtrl'
      })
      .when('/projects', {
        templateUrl: 'views/projects/projects.html',
        controller: 'MyprojectsCtrl'
      })
      .when('/projectDetail/:id', {
        templateUrl: 'views/projectDetail/projectDetail.html',
        controller: 'ProjectdetailCtrl'
      })
      .otherwise({
        redirectTo: 'views/'
      });
  });
