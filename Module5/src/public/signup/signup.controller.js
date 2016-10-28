(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['UserService'];
function SignupController(UserService) {
  var signupCtrl = this;
  signupCtrl.done = false;
  signupCtrl.submit = function() {
      UserService.setUser({
          firstName:this.first_name,
          lastName:this.last_name,
          email:this.email,
          tel:this.tel,
          fav:this.fav,
      });
      signupCtrl.done = true;
  }
}

})();
