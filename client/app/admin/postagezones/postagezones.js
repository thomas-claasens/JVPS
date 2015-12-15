'use strict';

angular.module('jvapesApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('postagezones', {
        url: '/admin/postagezones',
        templateUrl: 'app/admin/postagezones/postagezones.html',
        controller: 'PostagezonesCtrl'
      });
  });
