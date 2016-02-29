'use strict';

describe('Directive: shopmenu', function () {

  // load the directive's module and view
  beforeEach(module('jvapesApp'));
  beforeEach(module('app/components/shopmenu/shopmenu.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<shopmenu></shopmenu>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the shopmenu directive');
  }));
});
