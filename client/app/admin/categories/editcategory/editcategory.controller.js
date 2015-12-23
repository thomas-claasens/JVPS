'use strict';

angular.module('jvapesApp')
    .controller('EditcategoryCtrl', function ($log, $scope, $stateParams, socket, $http, Upload) {
        $scope.categoryId = $stateParams.id;
        $log.info($scope.categoryId);
        $scope.categories = [];
        $scope.category = {
            name: '',
            parent: '',
            active: false
        };
        $scope.file = '';
        
        $scope.saveCategory = function (form) {
            if ($scope.categoryId != -1) {
                $log.info(angular.toJson($scope.category))
                if ($scope.category.parent == "") {
                    $scope.category.parent = undefined;
                }
                if ($scope.category.active == undefined) {
                    $scope.category.active = false;
                }
                $http.put('/api/categories/' + $scope.category._id, $scope.category).then(response => {

                });
            } else {
                $log.info(angular.toJson($scope.category));
                if ($scope.category.parent == "") {
                    $scope.category.parent = undefined;
                }
                $http.post('/api/categories', $scope.category).then(response => {
                });
            }

        };
        // upload on file select or drop
        $scope.upload = function (file) {
            Upload.upload({
                url: '/api/categories/upload',
                data: { file: file, 'username': $scope.username }
            }).then(function (resp) {
                console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + angular.toJson(resp.data));
                $scope.file =  resp.data;
            }, function (resp) {
                console.log('Error status: ' + resp.status);
            }, function (evt) {
                var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
            });
        };
//         // for multiple files:
//         $scope.uploadFiles = function (files) {
//             if (files && files.length) {
//                 for (var i = 0; i < files.length; i++) {
//                     Upload.upload({..., data: { file: files[i] }, ...})...;
//         }
// // or send them all together for HTML5 browsers:
// Upload.upload({..., data: { file: files }, ...})...;
//       }
//     }

Activate();

function Activate() {
    $http.get('/api/categories').then(response => {
        $scope.categories = response.data;
        socket.syncUpdates('category', $scope.categories);
    });

    $scope.$on('$destroy', function () {
        socket.unsyncUpdates('category');
    });

}
if ($stateParams.id != '-1') {
    $http.get('/api/categories/' + $stateParams.id).then(response => {
        $scope.category = response.data;
        socket.syncUpdates('category', $scope.categories);
    });

    $scope.$on('$destroy', function () {
        socket.unsyncUpdates('category');
    });
}
    });
