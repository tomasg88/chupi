/**
 * @ngdoc overview
 * @name chupi.topMenuController
 * @description description
 *
 */

'use strict';

angular.module('chupi').directive('topMenu',
['$location',
  function($location) {
    return {
      restrict: 'EA',
      replace: true,
      templateUrl: './partials/directives/top-menu.html',
      scope: {},
      link: function(scope, elem, attr, ctrl) {
        scope.isopen = false;

        scope.$watch('isOpen', function(value) {
          if (!value) {
            $('.menu').transition({ y: 0 });
            $('.content').transition({ y: -50 });
          } else {
            $('.menu').transition({ y: -50 });
            $('.content').transition({ y: 0 });
          }
        });

        scope.redirectTo = function(target) {
          scope.isOpen = false;
          $location.path(target);
        }

      }
    }
  }
]);
