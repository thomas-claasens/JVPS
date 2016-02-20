'use strict';

angular.module('jvapesApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('shopproduct', {
        url: '/shop/category/:id',
        templateUrl: 'app/shop/product/product/product.html',
        controller: 'shopproductCtrl', 
        controllerAs: 'shopproduct'
      });
  });
