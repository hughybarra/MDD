'use strict';

/*
██╗   ██╗ █████╗ ██████╗ ███████╗
██║   ██║██╔══██╗██╔══██╗██╔════╝
██║   ██║███████║██████╔╝███████╗
╚██╗ ██╔╝██╔══██║██╔══██╗╚════██║
 ╚████╔╝ ██║  ██║██║  ██║███████║
  ╚═══╝  ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝
*/
var App = angular.module('personalProjectApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ngTouch',
  'firebase'
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
      .when('/subjects/:id', {
        templateUrl: 'views/userSubjects/userSubjects.html',
        controller: 'UsersubjectsCtrl'
      })
      .when('/subjectDetail/:id',{
        templateUrl:'views/subjectDetail/subjectDetail.html',
        controller: 'SubjectdetailCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

App.run(['$firebaseSimpleLogin', '$rootScope', function($firebaseSimpleLogin, $rootScope){
  // connect to the server
  var dataRef = new Firebase('https://mddproj.firebaseio.com/');
  // init fire base simple login
  $rootScope.loginObj = $firebaseSimpleLogin(dataRef);
}]);


