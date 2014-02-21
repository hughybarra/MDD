'use strict';

describe('Directive: newSubjectForms', function () {

  // load the directive's module
  beforeEach(module('personalProjectApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<new-subject-forms></new-subject-forms>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the newSubjectForms directive');
  }));
});
