(function() {
    'use strict';

    angular.module('LunchCheck',[])
    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        $scope.result = "";
        $scope.lunchItems = "";
        $scope.checkIfTooMuch = function() {
            var lunchItems = $scope.lunchItems.trim().split(',');
            lunchItems = lunchItems.map(function(i){return i.trim()}).filter(function(i){return i.length});
            console.log(lunchItems);
            if (lunchItems.length == 0) {
                $scope.result = "empty";
                return;
            }
            $scope.result = lunchItems.length<=3?"ok":"toomuch";
        };
    }

})();