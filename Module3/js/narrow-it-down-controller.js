(function () {
'use strict';
angular.module('NarrowItDownApp')
  .controller('NarrowItDownController',NarrowItDownController);

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var nidctrl = this;
  nidctrl.searchTerm = '';
  nidctrl.found = null;
  nidctrl.searchMenu = function () {
    MenuSearchService.getMatchedMenuItems(nidctrl.searchTerm)
      .then(function(result) {
        nidctrl.found = result;
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  nidctrl.remove = function(index) {
    nidctrl.found.splice(index,1);
  }

}
})();
