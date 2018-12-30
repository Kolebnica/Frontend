(function() {
  var songDataModalCtrl = function($scope, songService, libraryService) {
    var vm = this;

    var modal = $('#songDataModal');

    vm.saveData = function() {
      songService.updateSong(vm.song).then(
        function success(response) {
          // TODO: update songs on page when modal closed ?
          console.log(response.data);
          modal.modal('hide');
        },
        function error(error) {
          console.error(error);
        }
      );
    };

    libraryService.getArtists().then(
      function success(response) {
        vm.artists = response.data;
        console.log(vm.artists);
      },
      function error(error) {
        console.error(error);
      }
    );

    libraryService.getAlbums().then(
      function success(response) {
        vm.albums = response.data;
        console.log(vm.albums);
      },
      function error(error) {
        console.error(error);
      }
    );

    modal.on('show.bs.modal', function (e) {
      var songId = modal.data('songid');
      songService.getSong(songId).then(
        function success(response) {
          vm.song = response.data;
          console.log(vm.song);
        },
        function error(error) {
          console.error(error);
        }
      );
    });

    modal.on('hidden.bs.modal', function (e) {
      vm.song = null;
    });

  };
  
  angular
    .module('skiprope')
    .controller('songDataModalCtrl', songDataModalCtrl);
  })();
  