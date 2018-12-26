(function() {

  var navbarCtrl = function($window, $location) {
    var vm = this;

    vm.logedIn = $window.localStorage['logedIn'] == "true";
    vm.name = $window.localStorage['name'];
    vm.surname = $window.localStorage['surname'];

    console.log("vm.logedIn ",vm.logedIn)
    vm.profilePictureNum = Math.floor(Math.random() * Math.floor(10))+1;

    vm.logout = function() {
      vm.logedIn = false;
      $window.localStorage['logedIn'] = false;
      $location.path("/");
    }
  };

  angular
    .module('skiprope')
    .controller('navbarCtrl', navbarCtrl);
})();
