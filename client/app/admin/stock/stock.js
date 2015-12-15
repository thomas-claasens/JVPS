'use strict';

angular.module('jvapesApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('stock', {
        url: '/admin/stock',
        templateUrl: 'app/admin/stock/stock.html',
        controller: 'StockCtrl'
      });
  });
