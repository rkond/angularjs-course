(function () {
'use strict';
angular.module('MenuData')
.service('MenuDataService',MenuDataService);

MenuDataService.$inject=['$http','$q'];
function MenuDataService($http,$q) {
  var categoriesEndpoint = 'https://davids-restaurant.herokuapp.com/categories.json';
  var menuitemsEndpoint = 'https://davids-restaurant.herokuapp.com/menu_items.json';

  this.getAllCategories = function () {
    return $http({
      method: 'GET',
      url: categoriesEndpoint
    })
    .then(function (response){
      return response.data;
    });

  }
  this.getItemsForCategory = function (categoryShortName) {
    return $http({
      method: 'GET',
      url: menuitemsEndpoint,
      params: {
        category:categoryShortName
      }
    })
    .then(function (response){
      return response.data;
    });
  }
}

})();
