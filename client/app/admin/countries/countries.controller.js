'use strict';

angular.module('jvapesApp')
  .controller('CountriesCtrl', function ($scope, $http, $log, socket) {
    $scope.message = 'Hello';
    $scope.countries = [];
    
     $http.get('/api/countries').then(response => {
       // $log.info(response.data);
        this.countries = response.data;
        socket.syncUpdates('country', this.countries);
      });

      $scope.$on('$destroy', function () {
        socket.unsyncUpdates('country');
      });
  });
