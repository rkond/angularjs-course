(function () {
'use strict';
angular.module('NarrowItDownApp')
.directive('foundItems',FoundItems);

function FoundItems() {
  var ddo = {
    template: '<ul><li ng-repeat="item in ctrl.items">{{item.short_name}}, {{item.name}}, {{item.description}} <button ng-click="ctrl.remove($index);">Don\'t want this one!</button></li></ul>\
<span class="error" ng-if="ctrl.items!==null && ctrl.items.length==0">Nothing found.</span>',
    restrict: "E",
    controller: ItemsController,
    controllerAs: "ctrl",
    bindToController: true,
    scope:{
      items:'<foundItems',
      onRemove:'&'
    }
  };
  return ddo;
}

function ItemsController() {
  var ctrl = this;
  ctrl.remove = function (myIndex) {
    ctrl.onRemove({ index: myIndex });
  };
}
})();
