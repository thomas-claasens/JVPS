(function(angular, undefined) {
'use strict';

angular.module('jvapesApp.constants', [])

.constant('appConfig', {userRoles:['guest','user','admin']})
// .factory('staticService', function ($scope, $http, $log, socket) {
//         this.categories = [];
//         return {

//             getCategories: function () {
//                 $log.info('Service Started');
//                 if (this.categories.length == 0) {
//                     $http.get('/api/categories').then(response => {
//                         this.categories = response.data;
//                         socket.syncUpdates('category', this.categories);
//                     });

//                     $scope.$on('$destroy', function () {
//                         socket.unsyncUpdates('category');
//                     });
//                 }
//                 return this.categories;
//             }
//         }
//     })
;
})(angular);