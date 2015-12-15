'use strict';

angular.module('jvapesApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('categories', {
        url: '/admin/categories',
        templateUrl: 'app/admin/categories/categories.html',
        controller: 'CategoriesCtrl',
        controllerAs: 'vm',
        authenticate: 'admin'
      });
  });
