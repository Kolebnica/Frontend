(function() {
  var uploadCtrl = function($routeParams, $location, $window, songService, libraryService){
    var vm = this;
		var file;
		vm.message;
		var userId = $window.localStorage['userId'];
		
		vm.logedIn = $window.localStorage['logedIn'] == "true";
		if(!vm.logedIn){
			$location.path("/");
		}

		vm.processData = function($fileContent) {
			file=$fileContent;
    };

		libraryService.getAlbums().then(
			function success(response){
				vm.albums = response.data
			},
			function error(error){
				console.log(error)
			}
		)

		libraryService.getArtists().then(
			function success(response){
				vm.artists = response.data
			},
			function error(error){
				console.log(error)
			}
		)

    vm.upload = function(){
			vm.message = "";

			if (file == undefined){
				vm.message = "No file selected!"
				return;
			}

			if (vm.title == "" || vm.title == undefined){
				vm.message = "No such thing as titleless song!"
				return;
			}

			if (vm.selectedArtist == undefined){
				vm.message = "No artist selected!"
				return;
			}

			if (vm.selectedAlbum == undefined){
				vm.message = "No album selected!"
				return;
			}

			// Upload song data as stream
			songService.uploadStream(file).then(
				function success(response){
					console.log("Upload streama uspesen")
					console.log(response.data)
					// Upload song data
					songService.postSong(vm.title, response.data, userId, vm.selectedArtist.id, vm.selectedAlbum.id).then(
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
    
    