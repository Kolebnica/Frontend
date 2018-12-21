(function() {
  var profileCtrl = function($routeParams, profileService, userService){
    var vm = this;
    
    var profileId = $routeParams.profileId;
    var userId = $routeParams.profileId;
    
    if (profileId == undefined) {
      // TODO: redirect
    }
    
    profileService.getProfile(profileId).then(
      function success(response) {
        vm.profile = response.data;
        console.log(vm.profile);
      },
      function error(error) {
        console.error(error);
      }
      );
      
      userService.getUser(userId).then(
        function success(response) {
          vm.user = response.data;
          console.log(vm.user);
        },
        function error(error) {
          console.error(error);
        }
        );
        
      };
      
      angular
      .module('skiprope')
      .controller('profileCtrl', profileCtrl);
    })();
    
    