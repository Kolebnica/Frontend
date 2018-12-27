(function() {
  var libraryService = function($http) {

    var getArtist = function (artistId) {
      return $http.get(libraryServiceApiBasePath + '/api/artists/' + artistId);
    };

    var getArtists = function () {
      return $http.get(libraryServiceApiBasePath + '/api/artists');
    };

    var getAlbum = function (albumId) {
      return $http.get(libraryServiceApiBasePath + '/api/albums/' + albumId);
    };

    var updateArtist = function (artistObj) {
      return $http.put(libraryServiceApiBasePath + '/api/artists/' + artistObj.id, artistObj);
    };

    var updateAlbum = function (albumObj) {
      return $http.put(libraryServiceApiBasePath + '/api/albums/' + albumObj.id, albumObj);
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
      getArtists: getArtists,
      getAlbum: getAlbum,
      updateArtist: updateArtist,
      updateAlbum: updateAlbum,
    };
  };

  angular
    .module('skiprope')
    .service('libraryService', libraryService);
})();