angular.module('ui', ['tabs']);
angular.module('tabs', []);


angular.module('tabs').controller('infoCtrl',['$scope',function($scope){
    $scope.currentStatue = "infoImg";
    $scope.status = function(){
        if($scope.currentStatue == "" || $scope.currentStatue == "infoImg"){
            $scope.currentStatue="enlarge";
        }else{
            $scope.currentStatue="infoImg";
        }

        return $scope.currentStatue;
    }
}]);