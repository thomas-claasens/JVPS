'use strict';

describe('Controller: ReviewsCtrl', function () {

  // load the controller's module
  beforeEach(module('jvapesApp'));

  var ReviewsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ReviewsCtrl = $controller('ReviewsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
