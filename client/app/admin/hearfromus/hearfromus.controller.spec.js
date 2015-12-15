'use strict';

describe('Controller: HearfromusCtrl', function () {

  // load the controller's module
  beforeEach(module('jvapesApp'));

  var HearfromusCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HearfromusCtrl = $controller('HearfromusCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
