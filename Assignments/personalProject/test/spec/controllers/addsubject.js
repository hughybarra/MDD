'use strict';

describe('Controller: AddsubjectCtrl', function () {

  // load the controller's module
  beforeEach(module('personalProjectApp'));

  var AddsubjectCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddsubjectCtrl = $controller('AddsubjectCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
