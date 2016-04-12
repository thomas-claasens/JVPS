'use strict';

(function () {

  class CategoriesCtrl {

    constructor($http, $scope, $log, Modal, socket) {

      this.$http = $http;
      $http.get('/api/categories/').then(response => {
          this.categories = response.data;
      });
     
      this.deleteCategory = function (cat) {
       // $log.info(cat);
        $http.delete('/api/categories/' + cat._id).then(response => {
        });
      };

     
    }
  }

  angular.module('jvapesApp')
    .controller('CategoriesCtrl', CategoriesCtrl);

})();