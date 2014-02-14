'use strict';

var App = angular.module('personalProjectApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ngTouch'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/login/login.html',
        controller: 'LoginCtrl'
      })
      .when('/home', {
        templateUrl: 'views/subjectsHome/subjectsHome.html',
        controller: 'SubjectsHomeCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

App.directive('mynav',function(){
  console.log('directive is running');
  return {
    restrict: 'E',
    // templateUrl: 'views/nav/nav.html'
    // Fix the margin on this junk. The optionsbox on the right needs fixing
    template: '<nav class="navbar navbar-inverse" role="navigation" ><p class="navbar-text lead">Welcome to Hugo\'s Workshop</p> <span class="navbar-text pull-right glyphicon glyphicon-th-list"></span</nav>'
  };
});

App.directive('addSubjectForm', function(){
  console.log('add subject form running');
  return{
    restrict: 'E',
    templateURL: 'views/directives/addSubjectForm.html'
  };
});