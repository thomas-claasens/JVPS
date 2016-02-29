'use strict';

angular.module('jvapesApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('orders', {
        url: '/admin/orders',
        templateUrl: 'app/admin/orders/orders.html',
        controller: 'OrdersCtrl',
        controllerAs: 'orders',
        authenticate: 'admin'
      });
  });
