(function() {

  var songDataModalDirective = function() {
    return {
      restrict: 'EC',
      scope: {
       songid: '=',
      },
      controller: "songDataModalCtrl",
      controllerAs:'vm',
      templateUrl: "/shared/directives/songdatamodal/songdatamodal.template.html"
    };
  };

  angular
    .module('skiprope')
    .directive('srSongDataModal', songDataModalDirective);
})();
