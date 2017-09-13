/**
 * @ngdoc overview
 * @name chupi.topMenuController
 * @description description
 *
 */

'use strict';

angular.module('chupi').controller('topMenuController',
['$scope',
  function($scope) {

    /* PRIVATE FUNCTIONS */
    function init() {
      // Namespace for holding variables and easier interpretation from the view
      $scope.open = false;
      
    }

    /* PUBLIC FUNCTIONS */


    // Initialize
    init();
  }
]);
