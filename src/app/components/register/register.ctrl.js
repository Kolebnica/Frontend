(function() {
var registerCtrl = function($scope, registerService, $location, $window){
    var vm = this;

    vm.submitRegistration = function(){
        if(vm.password != vm.password2){
            console.log("gesli se ne ujemata")
            return
        } 
        registerService.registerUser(vm.name, vm.surname, vm.email, vm.username, vm.password).then(
            function success(response){
                console.log("Registracija uspesna")
                console.log(response)
                $window.localStorage['logedIn'] = true;
                $window.localStorage['name'] = response.data.name;
                $window.localStorage['surname'] = response.data.surname;
                $location.path("/");
            },
            function error(error){
                $window.localStorage['logedIn'] = false;
                console.log("Registracija neuspesna");
            }
        );
    }

};

angular
    .module('skiprope')
    .controller('registerCtrl', registerCtrl);
})();
 
