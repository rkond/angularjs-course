(function () {
'use strict';

angular.module('ShoppingListApp', [])
.controller('ShoppingListToBuyController', ShoppingListToBuyController)
.controller('ShoppingListBoughtController', ShoppingListBoughtController)
.service('ToBuyList',ShoppingList)
.service('BoughtList',ShoppingList);

ShoppingListToBuyController.$inject = ['ToBuyList','BoughtList'];
function ShoppingListToBuyController(ToBuyList, BoughtList) {
  var toBuy = this;
  this.items = ToBuyList.getItems();
  ToBuyList.addItem("Beans",10);
  ToBuyList.addItem("Chicken",1);
  ToBuyList.addItem("Bread",2);
  ToBuyList.addItem("Soap",2);
  ToBuyList.addItem("Salt",1);

  this.buyItem = function (idx) {
    var item = ToBuyList.removeItem(idx);
    BoughtList.addItem(item.name,item.quantity);
  }
}
ShoppingListBoughtController.$inject = ['ToBuyList','BoughtList'];
function ShoppingListBoughtController(ToBuyList, BoughtList) {
  var bought = this;
  this.items = BoughtList.getItems();
}

function ShoppingList() {
  var list = this;

  var items = [];

  list.getItems = function () { return items;}

  list.addItem = function (name,quantity) {
    items.push({name:name,quantity:quantity});
  }
  list.removeItem = function(idx) {
    return items.splice(idx,1)[0];
  }
}

})();
