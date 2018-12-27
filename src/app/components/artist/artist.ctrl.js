(function() {
  var artistCtrl = function($routeParams, libraryService, songService) {
    var vm = this;

    var artistId = $routeParams.artistId;

    vm.editMode = false;
    vm.copy = {};

    vm.cancelEdit = function() {
      vm.artist = JSON.parse(vm.copy.artist);
      vm.editMode = false;
    };

    vm.startEdit = function() {
      vm.editMode = true;
    };

    vm.saveEdit = function() {
      libraryService.updateArtist(vm.artist).then(
        function success(response) {
          vm.editMode = false;
          vm.artist = response.data;
          vm.copy.artist = JSON.stringify(response.data);
          console.log(vm.artist);
        },
        function error(error) {
          console.error(error);
        }
      );
    };

    libraryService.getArtist(artistId).then(
      function success(response) {
        vm.artist = response.data;
        vm.copy.artist = JSON.stringify(response.data);
        console.log(vm.artist);
      },
      function error(error) {
        console.error(error);
      }
    );

    libraryService.getAlbumsByArtist(artistId).then(
      function success(response) {
        vm.albums = response.data;
        console.log(vm.albums);
      },
      function error(error) {
        console.error(error);
      }
    );

    songService.getSongsByArtist(artistId).then(
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
  .controller('artistCtrl', artistCtrl);
})();

    