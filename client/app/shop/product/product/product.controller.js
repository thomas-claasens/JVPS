'use strict';

angular.module('jvapesApp')
    .controller('shopproductCtrl', function (Auth, $state, $scope,$log, $stateParams, $http, socket) {
        this.isLoggedIn = Auth.isLoggedIn;
        this.isAdmin = Auth.isAdmin;
        this.getCurrentUser = Auth.getCurrentUser;
        this.products = [];
        $log.info($state.params);
        this.before = $state.params.referrer;
         //Categories
        $http.get('/api/products/category/' + $stateParams.id).then(response => {
            //$log.info(response.data);
            this.products = response.data;
            socket.syncUpdates('products', this.products);
        });

        $scope.$on('$destroy', function () {
            socket.unsyncUpdates('products');
        });
    });
