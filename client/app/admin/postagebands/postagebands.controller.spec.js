'use strict';

describe('Controller: PostagebandsCtrl', function () {

  // load the controller's module
  beforeEach(module('jvapesApp'));

  var PostagebandsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PostagebandsCtrl = $controller('PostagebandsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
