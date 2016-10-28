(function () {
"use strict";

angular.module('public')
.controller('InfoController', InfoController);

InfoController.$inject = ['UserService','favoriteItem'];
function InfoController(UserService,favoriteItem) {
  var infoCtrl = this;
  infoCtrl.user = UserService.getUser();
  infoCtrl.registered = (infoCtrl.user !== false);
  infoCtrl.favoriteItem = favoriteItem;
}

})();
