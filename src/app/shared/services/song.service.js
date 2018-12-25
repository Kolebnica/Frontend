(function() {

  var songService = function($http) {

    var uploadStream = function(fileData) {
      return $http.post(songServiceApiBasePath + '/api/stream', fileData, {headers : {'Content-Type' : 'application/octet-stream'}});
    };

    var postSong = function(title, streamId){
      var song = {
        title: title,
        stream_id: streamId 
      };
      return $http.post(songServiceApiBasePath + '/api/song', song);
    }

    var getStream = function(streamId){
      return $http.get(songServiceApiBasePath + '/api/stream/' + streamId)
    }


    return {
      uploadStream: uploadStream,
      postSong: postSong,
      getStream: getStream
    };
  };

  angular
    .module('skiprope')
    .service('songService', songService);
})();