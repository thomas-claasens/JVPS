'use strict';

angular.module('jvapesApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('countries', {
        url: '/admin/countries',
        templateUrl: 'app/admin/countries/countries.html',
        controller: 'CountriesCtrl'
      });
  });
