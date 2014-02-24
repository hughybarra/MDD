'use strict';

describe('Service: Checklogin', function () {

  // load the service's module
  beforeEach(module('learnAppApp'));

  // instantiate service
  var Checklogin;
  beforeEach(inject(function (_Checklogin_) {
    Checklogin = _Checklogin_;
  }));

  it('should do something', function () {
    expect(!!Checklogin).toBe(true);
  });

});
