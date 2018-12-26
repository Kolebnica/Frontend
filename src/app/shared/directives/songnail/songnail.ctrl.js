(function() {
  var songnailCtrl = function($scope, songService) {
    var vm = this;
    vm.songTitle = $scope.title
    vm.songArtist = $scope.artist
    vm.songAlbum = $scope.album

    init();
		var context;    // Audio context
    var buf;        // Audio buffer
    var source;
    vm.enablePause = false;
    var startedAt;
    var pausedAt;
    var paused = false;

		function init() {
      if (!window.AudioContext) {
        if (!window.webkitAudioContext) {
          alert("Your browser does not support any AudioContext and cannot play back this audio.");
          return;
        }
          window.AudioContext = window.webkitAudioContext;
        }

      context = new AudioContext();
    }
    
    vm.playMusic = function () {
      
			songService.getStream($scope.streamid).then(
				function success(response){
          vm.enablePause = true;
					byteArray = response.data
					var arrayBuffer = new ArrayBuffer(byteArray.length);
					var bufferView = new Uint8Array(arrayBuffer);
					for (i = 0; i < byteArray.length; i++) {
						bufferView[i] = byteArray[i];
					}

					context.decodeAudioData(arrayBuffer, function(buffer) {
              buf = buffer;
							play();
					});
				},
				function error(error){
					console.log(error);
				}
			)
		}

		// Play the loaded file
		function play() {
				// Create a source node from the buffer
				source = context.createBufferSource();
				source.buffer = buf;
				// Connect to the final output node (the speakers)
				source.connect(context.destination);
        // Play immediately
        
        if(paused){
          startedAt = Date.now() - pausedAt;
          source.start(0, pausedAt / 1000);
        }
        else{
          startedAt = Date.now();
          source.start(0);
        }
        paused = false;
    }
    
    vm.pauseMusic = function() {
      source.stop(0);
      pausedAt = Date.now() - startedAt;
      paused = true;
      vm.enablePause = false;
  }
  };

  angular
    .module('skiprope')
    .controller('songnailCtrl', songnailCtrl);
})();
