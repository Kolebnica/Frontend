(function() {

  var navbarCtrl = function($window) {
    var vm = this;

    vm.logedIn = $window.localStorage['logedIn'] == "true";
    vm.name = $window.localStorage['name'];
    vm.surname = $window.localStorage['surname'];


    console.log("vm.logedIn ",vm.logedIn)

    vm.logout = function() {
      vm.logedIn = false;
      $window.localStorage['logedIn'] = false;
    }
  };

  angular
    .module('skiprope')
    .controller('navbarCtrl', navbarCtrl);
})();
