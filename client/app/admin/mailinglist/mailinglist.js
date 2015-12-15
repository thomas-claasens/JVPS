'use strict';

angular.module('jvapesApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('mailinglist', {
        url: '/admin/mailinglist',
        templateUrl: 'app/admin/mailinglist/mailinglist.html',
        controller: 'MailinglistCtrl'
      });
  });
