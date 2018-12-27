(function() {
  var albumCtrl = function($routeParams, songService, libraryService) {
    var vm = this;

    var albumId = $routeParams.albumId;

    vm.editMode = false;
    vm.copy = {};

    vm.cancelEdit = function() {
      vm.album = JSON.parse(vm.copy.album);
      vm.editMode = false;
    };

    vm.startEdit = function() {
      vm.editMode = true;
    };

    vm.saveEdit = function() {
      libraryService.updateAlbum(vm.album).then(
        function success(response) {
          vm.editMode = false;
          vm.album = response.data;
          vm.copy.album = JSON.stringify(response.data);
          console.log(vm.album);
        },
        function error(error) {
          console.error(error);
        }
      );
    };

    libraryService.getAlbum(albumId).then(
      function success(response) {
        vm.album = response.data;
        vm.copy.album = JSON.stringify(response.data);
        console.log(vm.album);
      },
      function error(error) {
        console.error(error);
      }
    );

    songService.getSongsByAlbum(albumId).then(
      function success(response) {
        vm.songs = response.data;
        console.log(vm.songs);
      },
      function error(error) {
        console.error(error);
      }
    );

    libraryService.getArtists().then(
      function success(response) {
        vm.artists = response.data;
      },
      function error(error) {
        console.error(error);
      }
    );

  };
      
  angular
  .module('skiprope')
  .controller('albumCtrl', albumCtrl);
})();

    