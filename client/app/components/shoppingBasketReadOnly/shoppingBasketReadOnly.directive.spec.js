'use strict';

describe('Directive: shoppingBasketReadOnly', function () {

  // load the directive's module and view
  beforeEach(module('jvapesApp'));
  beforeEach(module('app/components/shoppingBasketReadOnly/shoppingBasketReadOnly.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<shopping-basket-read-only></shopping-basket-read-only>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the shoppingBasketReadOnly directive');
  }));
});
