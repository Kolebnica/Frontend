(function() {

  var navbarCtrl = function() {
    var vm = this;

    vm.flag = false;
    vm.name = "Blažka";
    vm.surname = "Blatnik";
  };

  angular
    .module('skiprope')
    .controller('navbarCtrl', navbarCtrl);
})();
