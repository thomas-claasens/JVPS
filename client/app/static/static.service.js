'use strict';
angular.module('jvapesApp')
    .factory('Catsvc', function($http, $rootScope, $log, socket) {
        this.categories = [];
        return {
                categories: function() {
            $log.info('Service Started');
            if (this.categories.length == 0) {
                $http.get('/api/categories').then(response => {
                    $log.info('Categories:', response.data);
                    this.categories = response.data;
                    return response.data;
              //      socket.syncUpdates('category', this.categories);
                });

                // $rootScope.$scope.$on('$destroy', function() {
                //     socket.unsyncUpdates('category');
                // });
            }
            return undefined;
        }};
    });

