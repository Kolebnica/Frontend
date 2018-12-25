(function() {
  var libraryCtrl = function($routeParams, libraryService, userService) {
    var vm = this;
    
    var userId = 4;
    
    if (userId == undefined) {
      // TODO: redirect
    }

    libraryService.getArtistsByUser(userId).then(
      function success(response) {
        vm.artists = response.data;
        console.log(vm.artists);
      },
      function error(error) {
        console.error(error);
      }
    );

    libraryService.getAlbumsByUser(userId).then(
      function success(response) {
        vm.albums = response.data;
        console.log(vm.albums);
      },
      function error(error) {
        console.error(error);
      }
    );

  };
      
  angular
  .module('skiprope')
  .controller('libraryCtrl', libraryCtrl);
})();

    