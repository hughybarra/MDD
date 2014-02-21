'use strict';
// yo angular:directive navdir

App.directive('theNavBar', function(){
  return {
    link: function($scope, $rootScope){

    	/*
			When nav options is clicked
			-- nav will set the class of toggled to nav options window
			-- controller will set toggled off to main page div
    	*/

      /*
      ██╗   ██╗ █████╗ ██████╗ ███████╗
      ██║   ██║██╔══██╗██╔══██╗██╔════╝
      ██║   ██║███████║██████╔╝███████╗
      ╚██╗ ██╔╝██╔══██║██╔══██╗╚════██║
       ╚████╔╝ ██║  ██║██║  ██║███████║
        ╚═══╝  ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝
      */
      //toggle array for right nav bar
      // $scope.navStat = ['snv-container', 'snv-container-push-toleft '];

      $scope.navToggle = false;

      $scope.navStat = [
        'snv-container-right',
        'snv-container-push-toleft',
        ];

      $scope.getStat = function(){
        var divStat = '';

        if ($scope.navToggle == false){
          // options is off of the page
          divStat = 'snv-container-right';

          // push main page to left

          $rootScope.containerStat = 'main-containter-push-open';

        }else if($scope.navToggle == true){
          // options is on the page
          divStat = 'snv-container-right-open';
          // push main page to left
          $rootScope.containerStat = 'main-container-push';

        }
        return divStat;
      };

      $scope.barToggle = function(){
        if ($scope.navToggle == false){
          $scope.navToggle = true;
        }else if ($scope.navToggle == true){
          $scope.navToggle = false;
        }
      };


      /*
       ██████╗██╗     ██╗ ██████╗██╗  ██╗███████╗
      ██╔════╝██║     ██║██╔════╝██║ ██╔╝██╔════╝
      ██║     ██║     ██║██║     █████╔╝ ███████╗
      ██║     ██║     ██║██║     ██╔═██╗ ╚════██║
      ╚██████╗███████╗██║╚██████╗██║  ██╗███████║
       ╚═════╝╚══════╝╚═╝ ╚═════╝╚═╝  ╚═╝╚══════
      */

      $scope.hideBar = function(){
        $scope.barToggle();
        $scope.getStat();
      }

      $scope.optionsClick = function(){
        $scope.barToggle();
        $scope.getStat();
      }
    },
    restrict: 'E',
    templateUrl: 'views/directives/theNavBar.html'
  }
})