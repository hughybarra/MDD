'use strict';

var learnApp = angular.module('learnAppApp', [
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngTouch',
  'firebase'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home/home.html',
        controller: 'HomeCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login/login.html',
        controller: 'LoginCtrl'
      })
      .when('/subjects/:id', {
        templateUrl: 'views/subjectList/subjectList.html',
        controller: 'SubjectlistCtrl'
      })
      .when('/subjects/:id/articles/:id', {
        templateUrl: 'views/articleDetail/articleDetail.html',
        controller: 'ArticledetailCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

learnApp.run(['$firebaseSimpleLogin', '$rootScope', function($firebaseSimpleLogin, $rootScope){
  // conect to server
  var dataRef = new Firebase('https://mddproj.firebaseio.com/');
  // init fire base simple login
  $rootScope.loginObj = $firebaseSimpleLogin(dataRef);
}]);
