'use strict';
(function () {

  class MainController {

    constructor($log, $scope, $stateParams, $http, Upload) {
      this.$http = $http;
      this.products = [];
      //this.state = $stateParams;
      $http.get('/api/product/' + $stateParams.category).then(response => { 
          this.products = response.data;
          $log.debug(response.status);
      });
    //   $http.get('/api/categories').then(response => {
    //     $log.info(response.data);
    //     this.categories = response.data;
    //     socket.syncUpdates('category', this.categories);
    //   });

    //   $scope.$on('$destroy', function () {
    //     socket.unsyncUpdates('category');
    //   });

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
