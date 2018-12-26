(function() {
	var mainCtrl = function($scope, songService){
		$scope.msg = "app test";
		var vm = this;

		console.log(songService)

		songService.getSongList().then(
			function success(response){
				vm.songList = response.data;
			},
			function error(error){
				console.log(error);
	})
		
	};

angular
    .module('skiprope')
    .controller('mainCtrl', mainCtrl);
})();
 
