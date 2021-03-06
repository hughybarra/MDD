'use strict';

describe('Directive: newSubForm', function () {

  // load the directive's module
  beforeEach(module('learnAppApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<new-sub-form></new-sub-form>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the newSubForm directive');
  }));
});
