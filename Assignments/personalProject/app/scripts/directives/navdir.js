'use strict';
// yo angular:directive navdir

App.directive('theNavBar', function(){
  return {
    controller: function($scope, $rootScope){

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
      $scope.navStat = ['navOptionsUntoggled', 'navOptionsToggled'];
      $scope.navToggle = false;


      $scope.optionsClick = function(){

        if ($scope.navToggle == false){
          $scope.navToggle = true;
        }else if($scope.navToggle == true){
          $scope.navToggle = false;
        }
          console.log($scope.navToggle);

      }
    },
    restrict: 'E',
    templateUrl: 'views/directives/theNavBar.html'
  }
})