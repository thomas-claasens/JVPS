'use strict';

describe('Controller: EditproductCtrl', function () {

  // load the controller's module
  beforeEach(module('jvapesApp'));

  var EditproductCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EditproductCtrl = $controller('EditproductCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
