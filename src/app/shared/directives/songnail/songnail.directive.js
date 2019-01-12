(function() {

  var songnailDirective = function() {
    return {
      restrict: 'EC',
      scope: {
       title: '=',
       streamid: '=',
       album: '=',
       artist: '=',
       thumbnail: '=',
       youtube: '='
      },
      controller: "songnailCtrl",
      controllerAs:'vm',
      templateUrl: "/shared/directives/songnail/songnail.template.html"
    };
  };

  angular
    .module('skiprope')
    .directive('srSongnail', songnailDirective);
})();
