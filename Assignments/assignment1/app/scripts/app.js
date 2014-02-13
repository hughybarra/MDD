'use strict';

var App = angular.module('assignment1App', [
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
      .when('/admin',{
        templateUrl: 'views/admin/addProj.html',
        controller: 'AddprojCtrl'
      })
      .otherwise({
        redirectTo: 'views/'
      });
  });
App.run([ "$firebaseSimpleLogin", "$rootScope", function($firebaseSimpleLogin, $rootScope){
    // connect to the server
    var dataRef = new Firebase("https://personalproj.firebaseio.com/");
    // init fire base simple login
    $rootScope.loginObj = $firebaseSimpleLogin(dataRef);
  }]);
