'use strict';

angular.module('jvapesApp')
    .directive('shopmenu', function () {
        return {
            templateUrl: 'app/components/shopmenu/shopmenu.html',
            restrict: 'EA',
            scope: {
                category: '=category'
            },
            link: function (scope, element, attrs) {
            }
        };
    });
