'use strict';

describe('Controller: PostagezonesCtrl', function () {

  // load the controller's module
  beforeEach(module('jvapesApp'));

  var PostagezonesCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PostagezonesCtrl = $controller('PostagezonesCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
