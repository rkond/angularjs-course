(function () {
"use strict";

angular.module('common')
.directive('checkItem', checkItem);


checkItem.$inject=['MenuService','$q'];
function checkItem(MenuService,$q) {

    return {
      restrict: 'A',
      require: 'ngModel',
      link: function (scope, element, attr, ctrl) {
        function itemValidator(itemName) {
                if (!itemName)
                    return $q.reject('notexists');;
                return MenuService.getMenuItem(itemName).then(
                        function resolved() {
                            return true;
                        }, function rejected() {
                            return $q.reject('notexists');
                        }
                );
            }
            ctrl.$asyncValidators.itemNotExists = itemValidator;
      }

    };
}

})();
