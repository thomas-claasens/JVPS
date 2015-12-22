'use strict';

angular.module('jvapesApp', [
  'jvapesApp.auth',
  'jvapesApp.admin',
  'jvapesApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap',
  'validation.match',
  'angularFileUpload',
  'textAngular'
 
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
