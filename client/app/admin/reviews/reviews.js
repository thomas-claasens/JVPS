'use strict';

angular.module('jvapesApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('reviews', {
        url: '/admin/reviews',
        templateUrl: 'app/admin/reviews/reviews.html',
        controller: 'ReviewsCtrl'
      });
  });
