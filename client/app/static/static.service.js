'use strict';


(function () {
    function StaticService($scope, $http, $log, socket) {
        this.categories = [];
        return {
            getCategories: function () {
                $log.info('Service Started');
                if (this.categories.length == 0) {
                    $http.get('/api/categories').then(response => {
                        this.categories = response.data;
                        socket.syncUpdates('category', this.categories);
                    });

                    $scope.$on('$destroy', function () {
                        socket.unsyncUpdates('category');
                    });
                }
                return this.categories;
            }
        }
    };
    angular.module('jvapesApp.static')
        .factory('static', StaticService);
});