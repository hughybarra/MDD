'use strict';

describe('Controller: AddprojCtrl', function () {

  // load the controller's module
  beforeEach(module('assignment1App'));

  var AddprojCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddprojCtrl = $controller('AddprojCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
