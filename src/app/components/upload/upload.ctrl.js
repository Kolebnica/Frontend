(function() {
  var uploadCtrl = function($routeParams, $location, songService){
    var vm = this;
		var file;
		
		vm.processData = function($fileContent) {
			console.log("imam file");
			file=$fileContent;
    };

		window.onload = init;
		var context;    // Audio context
		var buf;        // Audio buffer

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
			songService.getStream(1).then(
				function success(response){
					console.log("got response data")
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
				var source = context.createBufferSource();
				source.buffer = buf;
				// Connect to the final output node (the speakers)
				source.connect(context.destination);
				// Play immediately
				source.start(0);
		}

    vm.upload = function(){
			console.log("Bom uploadal");
			console.log(file);
			// Upload song data as stream
			songService.uploadStream(file).then(
				function success(response){
					console.log("Upload streama uspesen")
					console.log(response.data)
					// Upload song data
					songService.postSong(vm.title, response.data).then(
						function success(response){
							console.log("Upload pesmi uspesen")
							$location.path("/");
						},
						function error(error){
							console.log("Upload pesmi neuspesen");
						}
					)
				},
				function error(error){
					console.log("Upload streama neuspesen");
				}
			)
    };
  };
      
  angular
  .module('skiprope')
  .controller('uploadCtrl', uploadCtrl);
})();
    
    