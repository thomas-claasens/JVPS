'use strict';

angular.module('jvapesApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('editproduct', {
        url: '/admin/product/editproduct',
        templateUrl: 'app/admin/product/editproduct/editproduct.html',
        controller: 'EditproductCtrl'
      });
  });
