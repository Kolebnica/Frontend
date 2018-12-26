(function() {
  var libraryCtrl = function(libraryService, songService) {
    var vm = this;
    
    var userId = 2;
    
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

    songService.getSongsByUser(userId).then(
      function success(response) {
        vm.songs = response.data;
        console.log(vm.songs);
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

    