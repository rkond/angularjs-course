(function () {
"use strict";

angular.module('common')
.service('UserService', UserService);


UserService.$inject = [];
function UserService() {
  var service = this;
  var user = false;

  service.getUser = function () {
      return user;
  };
  service.setUser = function (u) {
      user = u;
  };

}



})();
