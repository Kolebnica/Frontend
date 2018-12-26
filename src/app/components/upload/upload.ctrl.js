(function() {
  var uploadCtrl = function($routeParams, $location, songService){
    var vm = this;
		var file;
		
		vm.processData = function($fileContent) {
			file=$fileContent;
    };

    vm.upload = function(){
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
    
    