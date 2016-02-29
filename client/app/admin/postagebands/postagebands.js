'use strict';

angular.module('jvapesApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('postagebands', {
        url: '/admin/postagebands',
        templateUrl: 'app/admin/postagebands/postagebands.html',
        controller: 'PostagebandsCtrl',
        controllerAs: 'vm',
        authenticate: 'admin'
      });
  });
