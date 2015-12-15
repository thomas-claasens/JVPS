'use strict';

angular.module('jvapesApp')
  .controller('EditcategoryCtrl', function ($log, $scope, $stateParams, socket, $http, FileUploader) {
    $scope.categoryId = $stateParams.id;
    $log.info($scope.categoryId);
    $scope.categories = [];
    $scope.category = {
      name: '',
      parent: '',
      active: false
    };

    $scope.saveCategory = function (form) {
      if ($scope.categoryId != -1) {
        $log.info(form);
        if ($scope.category.parent == "") {
          $scope.category.parent = undefined;
        }
        $http.put('/api/categories/' + $scope.category._id, $scope.category).then(response => { 
          
        });
      } else {
        $log.info(form);
         if ($scope.category.parent == "") {
          $scope.category.parent = undefined;
        }
        $http.post('/api/categories', $scope.category).then(response => {
        });
      }

    };

    $scope.uploader = new FileUploader({
      url: 'api/categories/image'
    });
    Activate();

    function Activate() {
      $http.get('/api/categories').then(response => {
        $scope.categories = response.data;
        socket.syncUpdates('category', $scope.categories);
      });

      $scope.$on('$destroy', function () {
        socket.unsyncUpdates('category');
      });
      
      ///Uploader Code.
      

      $scope.uploader.onWhenAddingFileFailed = function (item /*{File|FileLikeObject}*/, filter, options) {
        console.info('onWhenAddingFileFailed', item, filter, options);
      };
      $scope.uploader.onAfterAddingFile = function (fileItem) {
        console.info('onAfterAddingFile', fileItem);
      };
      $scope.uploader.onAfterAddingAll = function (addedFileItems) {
        console.info('onAfterAddingAll', addedFileItems);
      };
      $scope.uploader.onBeforeUploadItem = function (item) {
        console.info('onBeforeUploadItem', item);
      };
      $scope.uploader.onProgressItem = function (fileItem, progress) {
        console.info('onProgressItem', fileItem, progress);
      };
      $scope.uploader.onProgressAll = function (progress) {
        console.info('onProgressAll', progress);
      };
      $scope.uploader.onSuccessItem = function (fileItem, response, status, headers) {
        console.info('onSuccessItem', fileItem, response, status, headers);
      };
      $scope.uploader.onErrorItem = function (fileItem, response, status, headers) {
        console.info('onErrorItem', fileItem, response, status, headers);
      };
      $scope.uploader.onCancelItem = function (fileItem, response, status, headers) {
        console.info('onCancelItem', fileItem, response, status, headers);
      };
      $scope.uploader.onCompleteItem = function (fileItem, response, status, headers) {
        console.info('onCompleteItem', fileItem, response, status, headers);
      };
      $scope.uploader.onCompleteAll = function () {
        console.info('onCompleteAll');
      };

      console.info('uploader', $scope.uploader);
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
