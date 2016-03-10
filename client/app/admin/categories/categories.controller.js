'use strict';

(function() {

    class CategoriesCtrl {

        constructor($http, $scope, $log, Modal, socket) {

            this.$http = $http;
            this.categories =[];

            $log.info('Service Started');
            if (this.categories.length == 0) {
                $http.get('/api/categories').then(response => {
                    this.categories = response.data;
                    socket.syncUpdates('category', this.categories);
                });

                $scope.$on('$destroy', function() {
                    socket.unsyncUpdates('category');
                });
            }
            this.deleteCategory = function(cat) {
                // $log.info(cat);
                $http.delete('/api/categories/' + cat._id).then(response => {
                });
            };


        }
    }

    angular.module('jvapesApp')
        .controller('CategoriesCtrl', CategoriesCtrl);

})();