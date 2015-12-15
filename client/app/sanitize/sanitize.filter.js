'use strict';

angular.module('jvapesApp')
  .filter('sanitize', function ($sce, $log) {
   // $log.info('Filter called');
    return function (input) {
     // $log.info(input);
      return $sce.trustAsHtml(input);
    };
  });
