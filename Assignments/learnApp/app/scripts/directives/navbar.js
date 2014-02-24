'use strict';

angular.module('learnAppApp')
  .directive('navbar', function () {
    return {
      templateUrl: 'views/nav/navBar.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
      	scope.navToggle = false;

      	scope.navStat = [
      	'snv-container-right',
      	'snv-container-push-toleft'
      	];

      	scope.getStat = function(){
      		var divStat = '';

      		if (scope.navToggle == false){
      			// options is off the page
      			divStat = 'snv-container-right';

      			// push main page to left
      			scope.containerstat = 'main-container-push-open';
      		}else if (scope.navToggle == true){
      			divStat = 'snv-container-right-open';
      			$rootScope.containerStat = 'main-container-push';
      		}
      		return divStat;
      	};

      	scope.barToggle = function(){
      		if (scope.navToggle = false){
      			scope.navToggle = true;
      		}else if (scope.navtoggle == false){
      			scope.navToggle = false;
      		}
      	};

      	// clicks
      	scope.hidebar = function(){
      		scope.barToggle();
      		scope.getStat();
      	};

        scope.optionsClick = function(){
          console.log('clicking');
          scope.barToggle();
          scope.getStat();
        }
      },
    };
  });
