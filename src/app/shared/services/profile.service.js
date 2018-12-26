(function() {
  var profileService = function($http) {

    var getProfile = function(id) {
      return $http.get(profileServiceApiBasePath + '/api/profiles/' + id);
    };

    return {
      getProfile: getProfile
    };
  };

  angular
    .module('skiprope')
    .service('profileService', profileService);
})();