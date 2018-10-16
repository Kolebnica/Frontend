(function() {
var mainCtrl = function($scope){
    $scope.msg = "app test";
};
mainCtrl.$inject = ['$scope'];

angular
    .module('sr-app')
    .controller('mainCtrl', mainCtrl);
})();
 
