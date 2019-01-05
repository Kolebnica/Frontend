(function() {
var loginCtrl = function($scope, $location, loginService, $window){
    var vm = this;
    
    vm.submitLogin = function(){
        loginService.loginUser(vm.username, vm.password).then(
            function success(response){
                console.log("Login uspesen")
                console.log(response)
                $window.localStorage['logedIn'] = true;
                $window.localStorage['name'] = response.data.name;
                $window.localStorage['surname'] = response.data.surname;
                $window.localStorage['userId'] = response.data.id;
                $location.path("/profile/"+response.data.id);
            },
            function error(error){
                console.log("Login neuspesen");
                $window.localStorage['logedIn'] = false;
            }
        );
    }
};

angular
    .module('skiprope')
    .controller('loginCtrl', loginCtrl);
})();
 
