'use strict';

angular.module('personalProjectApp')
  .controller('UsersubjectsCtrl', ['$scope', '$routeParams',
    '$location', '$rootScope', '$firebase' ,function ($scope, $routeParams, $location, $rootScope, $firebase) {

    // maybe come up with a better way to swap these out?
    // try using directives or figuring out how to do this with directives


    // set up our fire base

    var URL = 'https://mddproj.firebaseio.com/'+$location.$$url;
    // console.log(URL);
    $scope.items = $firebase( new Firebase(URL));
    //WTF IS REMOTE ITEMS?
    $scope.items.$bind($scope, 'remoteItems');

    console.log($scope.items);
/*
 ██████╗██╗     ██╗ ██████╗██╗  ██╗███████╗
██╔════╝██║     ██║██╔════╝██║ ██╔╝██╔════╝
██║     ██║     ██║██║     █████╔╝ ███████╗
██║     ██║     ██║██║     ██╔═██╗ ╚════██║
╚██████╗███████╗██║╚██████╗██║  ██╗███████║
 ╚═════╝╚══════╝╚═╝ ╚═════╝╚═╝  ╚═╝╚══════
*/
    $scope.newSubjectPartTwo = function(){
      console.log('newSub part two');
      // error check the input field

      if (typeof $scope.NUSubject.title === undefined){

          // add an error class to the field

      }else{
        $rootScope.tempVar = $scope.NUSubject.title;

        $scope.formOne = false;
        $scope.formTwo = true;
      }

    }
    $scope.formSwap = function(){
      $scope.showForm = true;
      $scope.formOne = true;
    }
    $scope.hideForm = function(){
      $scope.showForm = false;

      // empty out the form here!
    }


    $scope.addNewSubject = function(){
      console.log('add new subject');

    };
  	$scope.subjectSection = function(){
      console.log(this.$id);
      $rootScope.userSubjectSelect = this.$id;
      console.log($rootScope.userSubjectSelect);
  		var view = "/subjectDetail/"+this.$id
  		$location.path(view);
  	};
    $scope.swipeItRight = function(){
      console.log('swiping right');
      var view = '/home';
      $location.path(view);
    }
  }]);
