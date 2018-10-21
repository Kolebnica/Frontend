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
      .when('/login', {
        templateUrl: 'components/login/login.view.html',
        controller: 'loginCtrl',
        controllerAs: 'vm'
      })
      .when('/register', {
        templateUrl: 'components/register/register.view.html',
        controller: 'registerCtrl',
        controllerAs: 'vm'
      })
      .otherwise({redirectTo: '/'});

    $locationProvider.html5Mode(true);
  }

  angular
    .module('skiprope')
    .config(['$routeProvider', '$locationProvider', setup]);
})();
