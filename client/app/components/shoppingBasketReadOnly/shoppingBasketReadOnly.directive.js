'use strict';

angular.module('jvapesApp')
  .directive('shoppingBasketReadOnly', function () {
    return {
      templateUrl: 'app/components/shoppingBasketReadOnly/shoppingBasketReadOnly.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });
