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
      .when('/profile/:profileId', {
        templateUrl: 'components/profile/profile.view.html',
        controller: 'profileCtrl',
        controllerAs: 'vm',
      })
      .when('/library', {
        templateUrl: 'components/library/library.view.html',
        controller: 'libraryCtrl',
        controllerAs: 'vm',
      })
      .otherwise({redirectTo: '/'});

    $locationProvider.html5Mode(true);
  }

  angular
    .module('skiprope')
    .config(['$routeProvider', '$locationProvider', setup]);
})();
