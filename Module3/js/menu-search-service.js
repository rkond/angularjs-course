(function () {
'use strict';
angular.module('NarrowItDownApp')
.service('MenuSearchService',MenuSearchService);

MenuSearchService.$inject=['$http','$q'];
function MenuSearchService($http,$q) {
  var menuEndpoint = 'https://davids-restaurant.herokuapp.com/menu_items.json';
  this.getMatchedMenuItems = function (searchTerm) {
    if (searchTerm === '') {
      var def = $q.defer();
      def.resolve([]);
      return def.promise;
    }
    var response = $http({
      method: "GET",
      url: menuEndpoint
    }).then(function(response) {
      var filtered = response.data.menu_items.filter(function(item) {
        return item.description.indexOf(searchTerm) !== -1;
      });
      return filtered;
    });
    return response;
  }
}

})();
