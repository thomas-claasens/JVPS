'use strict';

angular.module('jvapesApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('product', {
        url: '/admin/product/:category',
        templateUrl: 'app/admin/product/product.html',
        controller: 'ProductCtrl',
        controllerAs: 'vm',
        authenticate: 'admin'
      });
  });
