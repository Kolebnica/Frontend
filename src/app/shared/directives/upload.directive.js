(function() {
	var onReadFile = function ($parse) {
    return {
      restrict: 'A',
      scope: false,
      link: function(scope, element, attrs) {
        var fn = $parse(attrs.onReadFile);
              
        element.on('change', function(onChangeEvent) {
          console.log("CP1")
          var reader = new FileReader();
                  
          reader.onload = function(onLoadEvent) {
            var buffer = onLoadEvent.target.result;
            var uint8 = new Uint8Array(buffer); // Assuming the binary format should be read in unsigned 8-byte chunks
            // If you're on ES6 or polyfilling
            // var result = Array.from(uint8);
            // Otherwise, good old loop
            var result = [];
            for (var i = 0; i < uint8.length; i++) {
              result.push(uint8[i]);
            }

            // Result is an array of numbers, each number representing one byte (from 0-255)
            // On your backend, you can construct a buffer from an array of integers with the same uint8 format
            scope.$apply(function() {
                fn(scope, {$fileContent: result});
            });
          };

          reader.readAsArrayBuffer((onChangeEvent.srcElement || onChangeEvent.target).files[0]);
        });
      }
    };
  }
angular
    .module('skiprope')
    .directive('onReadFile', onReadFile);
})();