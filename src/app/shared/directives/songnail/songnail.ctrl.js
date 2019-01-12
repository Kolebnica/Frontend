(function() {
  var songnailCtrl = function($scope, $window, songService) {
    var vm = this;
    vm.songTitle = $scope.title
    vm.songArtist = $scope.artist
    vm.songAlbum = $scope.album
    vm.thumbnail = "../public/img/icons/music.png"
    vm.hasYoutube = false

    init();
		var context;    // Audio context
    var buf;        // Audio buffer
    var source;
    vm.enablePause = false;
    var startedAt;
    var pausedAt;
    var paused = false;
    var duration = 0;
    var byteArray;
    var loaded = false;
    vm.progress = "100%";
    var intervalId;

    function updateProgressBar(){
      intervalId = setInterval(function(){
        var passed = (Date.now() - startedAt)/1000;

        if(duration <= passed){
          vm.progress = "100%"
          $scope.$apply()
          return;
        }

        vm.progress = ((passed)/duration)*100+"%"
        $scope.$apply()
      }, 100);
    }

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
      vm.progress = "0%"
      vm.enablePause = true;
      if(!loaded){
        songService.getStream($scope.streamid).then(
          function success(response){
            byteArray = response.data
            loaded = true; 

            var arrayBuffer = new ArrayBuffer(byteArray.length);
            var bufferView = new Uint8Array(arrayBuffer);
            for (i = 0; i < byteArray.length; i++) {
              bufferView[i] = byteArray[i];
            }

            updateProgressBar()

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
      else{
        var arrayBuffer = new ArrayBuffer(byteArray.length);
        var bufferView = new Uint8Array(arrayBuffer);
        for (i = 0; i < byteArray.length; i++) {
          bufferView[i] = byteArray[i];
        }

        updateProgressBar()

        context.decodeAudioData(arrayBuffer, function(buffer) {
            buf = buffer;
            play();
        });
      }
		}

		// Play the loaded file
		function play() {
				// Create a source node from the buffer
        source = context.createBufferSource();
				source.buffer = buf;
        duration = buf.duration;
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
      clearInterval(intervalId);
      source.stop(0);
      pausedAt = Date.now() - startedAt;
      paused = true;
      vm.enablePause = false;
    }

    vm.getData = function(){
      title = vm.songTitle
      console.log("Bom naredil response za: ", title)
      songService.getSongsData(title).then(
        function success(response){
          console.log("imam response: ",response, " za ",title)
          if(response.data != ""){
            console.log(response.data.result[0])
            data = response.data.result[0]
            if(data != "off"){
              vm.thumbnail = data.thumbnails.standard
              vm.youtube = "https://www.youtube.com/watch?v="+data.ytVideo
              vm.hasYoutube = true
              console.log("sem prikazal podatke")
            }
          }
          console.log("Nimam podatkov")
        },
        function error(error){
          console.log("Error: ",error)
        }
      )
    }

    vm.visitYoutube = function(){
      $window.open(vm.youtube, '_blank');
    }
  };

  angular
    .module('skiprope')
    .controller('songnailCtrl', songnailCtrl);
})();
