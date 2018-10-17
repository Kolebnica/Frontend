(function() {
var mainCtrl = function($scope){
    $scope.msg = "app test";
};
mainCtrl.$inject = ['$scope'];

angular
    .module('skiprope')
    .controller('mainCtrl', mainCtrl);
})();
 
