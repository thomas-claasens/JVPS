'use strict';

angular.module('jvapesApp')
  .directive('item', function () {
    return {
      templateUrl: 'app/components/item/item.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });
