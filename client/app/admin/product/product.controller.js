'use strict';
(function () {

  class MainController {

    constructor($log, $scope, $stateParams, $http, Upload, socket) {
      this.$http = $http;
      this.products = [];
      this.category = {};//$stateParams.category;
      //this.state = $stateParams;
      $http.get('/api/products/category/' + $stateParams.category).then(response => { 
          this.products = response.data;
          socket.syncUpdates('products', this.products);
          //$log.debug(response.status);
      });
      $scope.$on('$destroy', function () {
        socket.unsyncUpdates('products');
        socket.unsyncUpdates('category');
      });
      $http.get('/api/categories/' + $stateParams.category).then(response => {
       // $log.info(response.data);
        this.category = response.data;
        socket.syncUpdates('category', this.category);
      });
      
      

    //   $http.get('/api/homepage').then(response => {
    //     this.awesomeThings = response.data;
    //     this.homePageContent = this.awesomeThings[0].info;
    //     socket.syncUpdates('home', this.awesomeThings);
    //   });

    //   $scope.$on('$destroy', function () {
    //     socket.unsyncUpdates('home');
    //   });
    }
  }

  angular.module('jvapesApp')
    .controller('ProductCtrl', MainController);

})();
