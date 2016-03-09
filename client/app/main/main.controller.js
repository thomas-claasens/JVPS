'use strict';

(function () {

  class MainController {

    constructor($http, $scope, $log, socket) {
      this.$http = $http;
      this.awesomeThings = [];
      this.categories = [];
      this.homePageContent = '';

      $http.get('/api/categories').then(response => {
        $log.info(response.data);
        this.categories = response.data;
      //  socket.syncUpdates('category', this.categories);
      });

    //   $scope.$on('$destroy', function () {
    //     socket.unsyncUpdates('category');
    //   });

      $http.get('/api/homepage').then(response => {
        this.awesomeThings = response.data;
        // this.homePageContent = this.awesomeThings[0].info;
        // socket.syncUpdates('home', this.awesomeThings);
      });

    //   $scope.$on('$destroy', function () {
    //     socket.unsyncUpdates('home');
    //   });
    }
  }

  angular.module('jvapesApp')
    .controller('MainController', MainController);

})();
