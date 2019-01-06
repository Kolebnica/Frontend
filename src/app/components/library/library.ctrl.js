(function() {
  var libraryCtrl = function($window, libraryService, songService) {
    var vm = this;
    
    var userId = $window.localStorage['userId'];
    
    if (userId == undefined) {
      // TODO: redirect
    }

    vm.openSongDataModal = function(songId) {
      var modal = $('#songDataModal');
      modal.data('songid', songId);
      modal.modal('show');
    };

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

    