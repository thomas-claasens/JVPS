'use strict';

describe('Directive: shoppingBasket', function () {

  // load the directive's module and view
  beforeEach(module('jvapesApp'));
  beforeEach(module('app/components/shoppingBasket/shoppingBasket.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<shopping-basket></shopping-basket>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the shoppingBasket directive');
  }));
});
