(function() {
var loginCtrl = function($scope, $location,  loginService){
    var vm = this;
    
    vm.submitLogin = function(){
        loginService.loginUser(vm.username, vm.password).then(
            function success(response){
                console.log("Login uspesen")
                $location.path("/");
            },
            function error(error){
                console.log("Login neuspesen");
            }
        );
    }

    
  
        
};

angular
    .module('skiprope')
    .controller('loginCtrl', loginCtrl);
})();
 
