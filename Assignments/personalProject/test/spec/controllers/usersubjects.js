'use strict';

describe('Controller: UsersubjectsCtrl', function () {

  // load the controller's module
  beforeEach(module('personalProjectApp'));

  var UsersubjectsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UsersubjectsCtrl = $controller('UsersubjectsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
