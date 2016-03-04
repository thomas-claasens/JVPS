'use strict';

angular.module('jvapesApp')
    .controller('EditproductCtrl', function ($scope, $http, $log, socket, $stateParams) {
        this.product = {};
        this.category = $stateParams.category;
        $log.info(this.category);
        if ($stateParams.id != -1) {
            $http.get('/api/products/' + $stateParams.id).then(response => {
                this.product = response.data;
                socket.syncUpdates('product', this.product);
                //$log.debug(response.status);
            });
            $scope.$on('$destroy', function () {
                socket.unsyncUpdates('product');

            });
        }
    });
