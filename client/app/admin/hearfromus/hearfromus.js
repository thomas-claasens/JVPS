'use strict';

angular.module('jvapesApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('hearfromus', {
        url: '/admin/hearfromus',
        templateUrl: 'app/admin/hearfromus/hearfromus.html',
        controller: 'HearfromusCtrl'
      });
  });
