(function() {

  var songService = function($http) {

    var uploadStream = function(fileData) {
      return $http.post(songServiceApiBasePath + '/api/stream', fileData, {headers : {'Content-Type' : 'application/octet-stream'}});
    };

    var postSong = function(title, streamId, userId, artistId, albumId){
      var song = {
        title: title,
        stream_id: streamId,
        user_id: userId,
        artist_id: artistId,
        album_id: albumId,
      };
      return $http.post(songServiceApiBasePath + '/api/song', song);
    };

    var getStream = function(streamId){
      return $http.get(songServiceApiBasePath + '/api/stream/' + streamId);
    };

    var getSongList = function(){
      return $http.get(songServiceApiBasePath + '/api/song/list');
    };

    var getSong = function (songId) {
      return $http.get(songServiceApiBasePath + '/api/song/' + songId);
    };

    var updateSong = function (songObj) {
      return $http.put(songServiceApiBasePath + '/api/song/' + songObj.id, songObj);
    };

    var getSongsByArtist = function (artistId) {
      return $http.get(songServiceApiBasePath + '/api/song/artist/' + artistId);
    };

    var getSongsByAlbum = function (albumId) {
      return $http.get(songServiceApiBasePath + '/api/song/album/' + albumId);
    };

    var getSongsByUser = function (userId) {
      return $http.get(songServiceApiBasePath + '/api/song/user/' + userId);
    };

    var getSongsData = function (songTitle) {
      return $http.get(songServiceApiBasePath + '/api/lyrics?q=' + songTitle);
    };

    return {
      uploadStream: uploadStream,
      postSong: postSong,
      getStream: getStream,
      getSongList: getSongList,
      getSong: getSong,
      updateSong: updateSong,
      getSongsByArtist: getSongsByArtist,
      getSongsByAlbum: getSongsByAlbum,
      getSongsByUser: getSongsByUser,
      getSongsData: getSongsData
    };
  };

  angular
    .module('skiprope')
    .service('songService', songService);
})();