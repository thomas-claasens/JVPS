'use strict';

angular.module('jvapesApp.auth', [
  'jvapesApp.constants',
  'jvapesApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
