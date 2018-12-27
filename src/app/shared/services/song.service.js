(function() {

  var songService = function($http) {

    var uploadStream = function(fileData) {
      return $http.post(songServiceApiBasePath + '/api/stream', fileData, {headers : {'Content-Type' : 'application/octet-stream'}});
    };

    var postSong = function(title, streamId, userId){
      var song = {
        title: title,
        stream_id: streamId,
        user_id: userId,
        artist_id: null,
        album_id: 0,
      };
      return $http.post(songServiceApiBasePath + '/api/song', song);
    };

    var getStream = function(streamId){
      return $http.get(songServiceApiBasePath + '/api/stream/' + streamId);
    };

    var getSongList = function(){
      return $http.get(songServiceApiBasePath + '/api/song/list');
    };

    var getSongsByArtist = function (artistId) {
      return $http.get(songServiceApiBasePath + '/api/song/artist/' + artistId);
    };

    var getSongsByAlbum = function(albumId) {
      return $http.get(songServiceApiBasePath + '/api/song/album/' + albumId);
    };

    var getSongsByUser = function (userId) {
      return $http.get(songServiceApiBasePath + '/api/song/user/' + userId);
    };

    return {
      uploadStream: uploadStream,
      postSong: postSong,
      getStream: getStream,
      getSongList: getSongList,
      getSongsByArtist: getSongsByArtist,
      getSongsByAlbum: getSongsByAlbum,
      getSongsByUser: getSongsByUser
    };
  };

  angular
    .module('skiprope')
    .service('songService', songService);
})();