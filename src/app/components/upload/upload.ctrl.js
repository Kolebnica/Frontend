(function() {
  var uploadCtrl = function($routeParams, $location, $window, songService){
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

			// Upload song data as stream
			songService.uploadStream(file).then(
				function success(response){
					console.log("Upload streama uspesen")
					console.log(response.data)
					// Upload song data
					songService.postSong(vm.title, response.data, userId).then(
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
    
    