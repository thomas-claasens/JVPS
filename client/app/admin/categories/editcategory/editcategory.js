'use strict';

angular.module('jvapesApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('editcategory', {
        url: '/admin/category/edit/:id',
        templateUrl: 'app/admin/categories/editcategory/editcategory.html',
        controller: 'EditcategoryCtrl',
        controllerAs: 'vm',
        authenticate: 'admin'
      });
  });
