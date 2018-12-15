(function() {

  var registerService = function($window, $http) {

    var registerUser = function(name, surname, email, username, password) {
      var user = {
        name: name,
        surname: surname,
        email: email,
        username: username,
        password: password
      };
      return $http.put(userServiceApiBasePath+'/api/register', user);
    };

    return {
      registerUser: registerUser
    };
  };

  angular
    .module('skiprope')
    .service('registerService', registerService);
})();