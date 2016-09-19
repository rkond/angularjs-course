(function () {
'use strict';

angular.module('ShoppingListApp', [])
.controller('ShoppingListToBuyController', ShoppingListToBuyController)
.controller('ShoppingListBoughtController', ShoppingListBoughtController)
.service('ShoppingList',ShoppingList);

ShoppingListToBuyController.$inject = ['ShoppingList'];
function ShoppingListToBuyController(ShoppingList) {
  var toBuy = this;
  this.items = ShoppingList.getToBuyItems();
  ShoppingList.addItem("Beans",10);
  ShoppingList.addItem("Chicken",1);
  ShoppingList.addItem("Bread",2);
  ShoppingList.addItem("Soap",2);
  ShoppingList.addItem("Salt",1);

  this.buyItem = function (idx) {
    ShoppingList.buyItem(idx);
  }
}
ShoppingListBoughtController.$inject = ['ShoppingList'];
function ShoppingListBoughtController(ShoppingList) {
  var bought = this;
  this.items = ShoppingList.getBoughtItems();
}

function ShoppingList() {
  var list = this;

  var toBuyItems = [];
  var boughtItems = [];

  list.getToBuyItems = function () { return toBuyItems;}
  list.getBoughtItems = function () { return boughtItems;}

  list.addItem = function (name,quantity) {
    toBuyItems.push({name:name,quantity:quantity});
  }
  list.buyItem = function(idx) {
    boughtItems.push(toBuyItems.splice(idx,1)[0]);
  }
}

})();
