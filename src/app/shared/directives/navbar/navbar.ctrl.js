(function() {

  var navbarCtrl = function() {
    var vm = this;

    vm.flag = false;
    vm.name = "Blažka";
    vm.surname = "Blatnik";

    vm.logout = function() {
      vm.flag = true;
    }
  };

  angular
    .module('skiprope')
    .controller('navbarCtrl', navbarCtrl);
})();
