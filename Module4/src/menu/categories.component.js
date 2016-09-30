(function () {
'use strict';

angular.module('MenuApp')
.component('categories',{
    template:'<ul><li ng-repeat="category in $ctrl.catlist"><a ui-sref="items({categoryID:category.short_name})">{{category.name}}</a></li><ul>',
    bindings: {
        catlist: '<'
    }
});

})();
