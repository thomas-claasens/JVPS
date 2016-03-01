'use strict';

angular.module('jvapesApp')
    .controller('ShopCtrl', function ($scope, $state, $http, $log, socket) {
        this.categories = [];
        $log.info($state.params);
        //Categories
        $http.get('/api/categories').then(response => {
            $log.info(response.data);
            this.categories = response.data;
            socket.syncUpdates('category', this.categories);
        });

        $scope.$on('$destroy', function () {
            socket.unsyncUpdates('category');
        });
    });
