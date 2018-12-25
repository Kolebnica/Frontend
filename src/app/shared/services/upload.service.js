(function() {

  var uploadService = function($http) {

    var uploadSong = function(file, title) {
      var uploadForm = {
        song: {title: title}
      }
      return $http.post(songServiceApiBasePath + '/api/upload', uploadForm, {headers: {'Content-Type': 'application/json'}});
    };

    return {
      uploadSong: uploadSong
    };
  };

  angular
    .module('skiprope')
    .service('uploadService', uploadService);
})();