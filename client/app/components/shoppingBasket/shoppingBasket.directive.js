'use strict';

angular.module('jvapesApp')
  .directive('shoppingBasket', function () {
    return {
      templateUrl: 'app/components/shoppingBasket/shoppingBasket.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });
