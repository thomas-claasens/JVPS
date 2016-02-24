'use strict';

(function () {

  class CategoriesCtrl {

    constructor($http, $scope, $log, Modal, socket) {

      this.$http = $http;
      this.categories = [];
     
      this.deleteCategory = function (cat) {
       // $log.info(cat);
        $http.delete('/api/categories/' + cat._id).then(response => {
        });
      };

      $http.get('/api/categories').then(response => {
        this.categories = response.data;
        socket.syncUpdates('category', this.categories);
      });

      $scope.$on('$destroy', function () {
        socket.unsyncUpdates('category');
      });
    }
  }

  angular.module('jvapesApp')
    .controller('CategoriesCtrl', CategoriesCtrl);

})();