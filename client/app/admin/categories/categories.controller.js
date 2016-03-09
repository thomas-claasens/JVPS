'use strict';

(function () {

  class CategoriesCtrl {

    constructor($http, $scope, $log, Modal, socket, staticservice) {

      this.$http = $http;
      this.categories = staticservice.getCategories();
     
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