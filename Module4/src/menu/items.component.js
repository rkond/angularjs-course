(function () {
'use strict';

angular.module('MenuApp')
.component('items',{
    template:'<ul><li ng-repeat="item in $ctrl.itemsList">{{item.name}} ({{item.short_name}}) — \
    {{ item.price_small?"$"+item.price_small:""}}{{item.price_small && item.price_large?"/":""}}{{item.price_large?"$"+item.price_large:""}}\
    <br>{{item.description}}</li><ul>',
    bindings: {
        itemsList: '<'
    }
});

})();
