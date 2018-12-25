(function() {
  var uploadCtrl = function($routeParams, uploadService){
    var vm = this;
    var file = null;
    
    vm.processData = function($fileContent) {
      file=$fileContent;
    };

    vm.upload = function(){
      uploadService.uploadSong(file, vm.title).then(
          function success(response){
              console.log("Upload uspesen")
              $location.path("/");
          },
          function error(error){
              console.log("Upload neuspesen");
          }
      );
  }

  };
      
  angular
  .module('skiprope')
  .controller('uploadCtrl', uploadCtrl);
})();
    
    