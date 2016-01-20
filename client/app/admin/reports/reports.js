'use strict';

angular.module('jvapesApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('reports', {
        url: '/admin/reports',
        templateUrl: 'app/admin/reports/reports.html',
        controller: 'ReportsCtrl',
        controllerAs: 'vm',
        authenticate: 'admin'
      });
  });
