(function() {
  /* global angular */

  angular.module('skiprope', ['ngRoute']);

  function setup($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'components/main/main.view.html',
        controller: 'mainCtrl',
        controllerAs: 'vm'
      })
      .otherwise({redirectTo: '/'});

    $locationProvider.html5Mode(true);
  }

  angular
    .module('skiprope')
    .config(['$routeProvider', '$locationProvider', setup]);
})();
