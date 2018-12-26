(function() {
  var userService = function($http) {

    var getUser = function(id) {
      return $http.get(userServiceApiBasePath + '/api/users/' + id);
    };

    return {
      getUser: getUser
    };
  };

  angular
    .module('skiprope')
    .service('userService', userService);
})();