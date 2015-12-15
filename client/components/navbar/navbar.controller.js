'use strict';

class NavbarController {
  //start-non-standard
  menu = [{
    'title': 'Home',
    'state': 'main'
  }, {
      'title': 'Shop',
    'state':'shop'
  }];

  isCollapsed = true;
  //end-non-standard

  constructor(Auth,socket, $scope, $http) {
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
    // this.categories = [];
    // $http.get('/api/categories').then(response => {
    //     this.categories = response.data;
    //     socket.syncUpdates('category', this.categories);
    //   });

    //   $scope.$on('$destroy', function () {
    //     socket.unsyncUpdates('category');
    //   });
  }
}

angular.module('jvapesApp')
  .controller('NavbarController', NavbarController);
