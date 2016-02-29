'use strict';

describe('Controller: shopproductCtrl', function () {

  // load the controller's module
  beforeEach(module('jvapesApp'));

  var ProductCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProductCtrl = $controller('shopproductCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
