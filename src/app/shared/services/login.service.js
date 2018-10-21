(function() {

  var loginService = function($window, $http) {

    var loginUser = function(username, password) {
      return $http.post(userServiceApiBasePath+'/api/login?username='+username+"&password="+password);
    };

    return {
      loginUser: loginUser
    };
  };

  angular
    .module('skiprope')
    .service('loginService', loginService);
})();