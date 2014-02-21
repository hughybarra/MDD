'use strict';

angular.module('personalProjectApp')
  .controller('UsersubjectsCtrl', ['$scope', '$routeParams',
    '$location', '$rootScope', '$firebase' ,function ($scope, $routeParams, $location, $rootScope, $firebase) {
        /*
      user Subject COntroller

      Dependency
      Firebse, scope, $routeParams, $location, $rootScope

      general tasks
      1. logout

      init tasks
      1. Connect to firebase
      2. grab all user subjects
      3. assign subject vars to scope

      add a subject
      1. on click pop up a form with a single text input for subject name
      2. on submit send to surver and update server.
      3. callback function should auto update on init tasks


      on subject click
      1. subject click should redirect to specific subject page

      html
      1. loop through subjects
      2. Assign directives to subjects
    */

    // maybe come up with a better way to swap these out?
    // try using directives or figuring out how to do this with directives
    $scope.showForm = false;

    // initializing vars

  	// $scope.subjects = [
  	// {title: "Python Basics ",
  	// author: "Hugo Ybarra",
  	// upVotes: 20,
  	// downVotes: 1},

  	// {title: "Intro To pythong ",
  	// author: "Hugo Ybarra",
  	// upVotes: 3,
  	// downVotes: 5},

  	// {title: "simple game",
  	// author: "Hugo Ybarra",
  	// upVotes: 200,
  	// downVotes: 3},
  	// ];

/*
 ██████╗██╗     ██╗ ██████╗██╗  ██╗███████╗
██╔════╝██║     ██║██╔════╝██║ ██╔╝██╔════╝
██║     ██║     ██║██║     █████╔╝ ███████╗
██║     ██║     ██║██║     ██╔═██╗ ╚════██║
╚██████╗███████╗██║╚██████╗██║  ██╗███████║
 ╚═════╝╚══════╝╚═╝ ╚═════╝╚═╝  ╚═╝╚══════
*/
    $scope.newSubjectPartTwo = function(){

      // error check the input field

      if (typeof $scope.NUSubject.title === undefined){

          // add an error class to the field

      }else{

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
