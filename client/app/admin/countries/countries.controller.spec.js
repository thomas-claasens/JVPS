'use strict';

describe('Controller: CountriesCtrl', function () {

  // load the controller's module
  beforeEach(module('jvapesApp'));

  var CountriesCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CountriesCtrl = $controller('CountriesCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
