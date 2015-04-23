/**
 * Created by SHERRI on 4/23/15.
 */
;(function(window){
    angular.module('app', ['ui.bootstrap']);

    //define directives
  angular.module('app', [])
.directive('tab', function() {
  return {
    restrict: 'E',
    transclude: true,
    template: '<h2>hello</h2> <div role="tabpanel" ng-transclude></div>',
    scope: { },
    link: function(scope, elem, attr) {}
  }
})
      .directive('tabset', function() {
          return {
              restrict: 'E',
              transclude: true,
              scope: { },
              templateUrl: 'tabset.html',
              controllerAs: 'tabset',
              controller: function() {
                  var self = this
                  self.tabs = []

              }
          }
      })

})(window);
