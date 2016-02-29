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
  }
}

angular.module('jvapesApp')
  .controller('NavbarController', NavbarController);
