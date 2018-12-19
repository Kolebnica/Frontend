(function() {

  var navbarCtrl = function($window) {
    var vm = this;

    vm.logedIn = $window.localStorage['logedIn'];
    vm.name = $window.localStorage['name'];
    vm.surname = $window.localStorage['surname'];

    vm.profilePictureNum = Math.floor(Math.random() * Math.floor(10))+1;

    vm.logout = function() {
      vm.logedIn = false;
      $window.localStorage['logedIn'] = false;
    }
  };

  angular
    .module('skiprope')
    .controller('navbarCtrl', navbarCtrl);
})();
