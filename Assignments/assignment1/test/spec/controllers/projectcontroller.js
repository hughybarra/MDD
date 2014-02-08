'use strict';

describe('Controller: ProjectcontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('assignment1App'));

  var ProjectcontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProjectcontrollerCtrl = $controller('ProjectcontrollerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
