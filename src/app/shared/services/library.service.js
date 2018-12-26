(function() {
  var libraryService = function($http) {

    var getArtist = function (artistId) {
      return $http.get(libraryServiceApiBasePath + '/api/artists/' + artistId);
    };

    var getArtistsByUser = function (userId) {
      return $http.get(libraryServiceApiBasePath + '/api/artists/user/' + userId);
    };

    var getAlbumsByUser = function (userId) {
      return $http.get(libraryServiceApiBasePath + '/api/albums/user/' + userId);
    };

    var getAlbumsByArtist = function (artistId) {
      return $http.get(libraryServiceApiBasePath + '/api/albums/artist/' + artistId);
    };

    return {
      getArtistsByUser: getArtistsByUser,
      getAlbumsByUser: getAlbumsByUser,
      getAlbumsByArtist: getAlbumsByArtist,
      getArtist: getArtist,
    };
  };

  angular
    .module('skiprope')
    .service('libraryService', libraryService);
})();