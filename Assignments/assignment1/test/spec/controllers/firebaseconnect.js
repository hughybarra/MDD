'use strict';

describe('Controller: FirebaseconnectCtrl', function () {

  // load the controller's module
  beforeEach(module('assignment1App'));

  var FirebaseconnectCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FirebaseconnectCtrl = $controller('FirebaseconnectCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
