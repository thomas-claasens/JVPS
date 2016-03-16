'use strict';

(function () {

  class CategoriesCtrl {

    constructor($http, $scope, $log, Modal, socket, Catsvc) {

        this.$http = $http;
        var response = Catsvc.categories();
        $log.info('Response:', response());
        //.then(function(res) {
    //         $log.info('Response in page', res);
    //         this.categories = res;
    //     });
    //    ;
     
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