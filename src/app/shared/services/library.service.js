(function() {
  /* global libraryServiceApiBasePath */
  var libraryService = function($http) {

    var getArtistsByUser = function (userId) {
      return $http.get(libraryServiceApiBasePath + '/api/artists/user/' + userId);
    };

    var getAlbumsByUser = function (userId) {
      return $http.get(libraryServiceApiBasePath + '/api/albums/user/' + userId);
    };

    return {
      getArtistsByUser: getArtistsByUser,
      getAlbumsByUser: getAlbumsByUser,
    };
  };

  angular
    .module('skiprope')
    .service('libraryService', libraryService);
})();