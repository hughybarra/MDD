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




// App.directive('mynav',function(){
//   return {
//     restrict: 'E',
//     // templateUrl: 'views/nav/nav.html'
//     // Fix the margin on this junk. The optionsbox on the right needs fixing
//     template:'<div ng-controller="NavbarCtrl">'+
//     '<nav class="navbar navbar-inverse col-xs-12" role="navigation">'+
//     '<p class="navbar-text lead">Welcome to Hugo\'s Workshop</p>'+
//     ' <span class="navbar-text pull-right glyphicon glyphicon-th-list" ng-click="navOptions()"></span>'+
//     '</nav>'+
//     '</div>'
//   };
// });

App.run(['$firebaseSimpleLogin', '$rootScope', function($firebaseSimpleLogin, $rootScope){
  // connect to the server
  var dataRef = new Firebase('https://mddproj.firebaseio.com/');
  // init fire base simple login
  $rootScope.loginObj = $firebaseSimpleLogin(dataRef);
}]);

// App.directive('addSubjectForm', function(){
//   console.log('add subject form running');
//   return{
//     restrict: 'E',
//     templateURL: 'views/directives/addSubjectForm.html'
//   };
// });

