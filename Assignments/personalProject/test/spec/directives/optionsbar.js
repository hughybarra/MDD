'use strict';

describe('Directive: optionsBar', function () {

  // load the directive's module
  beforeEach(module('personalProjectApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<options-bar></options-bar>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the optionsBar directive');
  }));
});
