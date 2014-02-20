'use strict';

angular.module('personalProjectApp')
  .controller('UsersubjectsCtrl', function ($scope, $routeParams, $location, $rootScope) {
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
    $scope.showFormPart1 = false;
    $scope.showFormPart2 = false;



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
  	downVotes: 3},
  	];


/*
██████╗ ██╗██████╗ ███████╗ ██████╗████████╗██╗██╗   ██╗███████╗███████╗
██╔══██╗██║██╔══██╗██╔════╝██╔════╝╚══██╔══╝██║██║   ██║██╔════╝██╔════╝
██║  ██║██║██████╔╝█████╗  ██║        ██║   ██║██║   ██║█████╗  ███████╗
██║  ██║██║██╔══██╗██╔══╝  ██║        ██║   ██║╚██╗ ██╔╝██╔══╝  ╚════██║
██████╔╝██║██║  ██║███████╗╚██████╗   ██║   ██║ ╚████╔╝ ███████╗███████║
╚═════╝ ╚═╝╚═╝  ╚═╝╚══════╝ ╚═════╝   ╚═╝   ╚═╝  ╚═══╝  ╚══════╝╚══════╝

*/

App.directive('formContainer', function(){
  return{
    restrict: 'E',
    controller: function(){
      this.swapState = function (message){
        console.log("swap the state" + message);








      }
    }
  }
});

// form one
App.directive('goblinFormOne', function factory(injectables){
  var directiveDefinitionObject = {
    priority: 0,
    templateUrl : 'views/directives/formOne.html',
    replace: false,
    transclude: false,
    restrict: 'E',
    scope: false,
    controller: function($scope, $elements, $attrs, $transclude, otherInjectables){
      console.log('goblin form instantiated');
    },
    require: '',
    compile: function compile(tElement, tAttrs, transclude){
      return {
        pre: function preLink(scope, iElement, iAttrs, controller){
          console.log("pre");
        },
        post: function postLink(scope, iElement, iAttrs, controller){
          console.log('post');
        }
      }
    }
  }
});



/*
 ██████╗██╗     ██╗ ██████╗██╗  ██╗███████╗
██╔════╝██║     ██║██╔════╝██║ ██╔╝██╔════╝
██║     ██║     ██║██║     █████╔╝ ███████╗
██║     ██║     ██║██║     ██╔═██╗ ╚════██║
╚██████╗███████╗██║╚██████╗██║  ██╗███████║
 ╚═════╝╚══════╝╚═╝ ╚═════╝╚═╝  ╚═╝╚══════
*/
    $scope.nextOption = function(){
      console.log('next option');
      $scope.showFormPart1 = true;
    }
    $scope.formSwap = function(){
      console.log('show form');
      $scope.showForm = true;
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
  });
